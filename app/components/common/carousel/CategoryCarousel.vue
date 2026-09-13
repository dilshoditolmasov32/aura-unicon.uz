<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { Category } from '~/data/categories'
import { categories } from '~/data/categories'

const { t } = useI18n()

const AUTOPLAY_DELAY = 2500
const RESUME_DELAY = 2500
const TRANSITION_MS = 500
const DRAG_THRESHOLD = 40

const realLength = categories.length

// Aylanma (infinite) effekt uchun boshiga oxirgi, oxiriga birinchi
// kartaning "klon"i qo'shiladi — chegaraga yetganda shu klondan
// haqiqiy kartaga animatsiyasiz, sezilmas tarzda almashtiramiz.
type TrackItem = Category & { _key: string }

const trackItems = computed<TrackItem[]>(() => [
  { ...categories[realLength - 1]!, _key: 'clone-start' },
  ...categories.map((category): TrackItem => ({ ...category, _key: `item-${category.id}` })),
  { ...categories[0]!, _key: 'clone-end' },
])

const viewportRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const cardRefs = ref<(HTMLElement | null)[]>([])

// trackIndex — trackItems ichidagi joriy pozitsiya (klonlarni ham hisobga oladi)
const trackIndex = ref(1)
const translateX = ref(0)
const transitionEnabled = ref(false)

// displayIndex — foydalanuvchiga ko'rinadigan haqiqiy toifa indeksi (0..realLength-1)
const displayIndex = computed(() => {
  if (trackIndex.value === 0) return realLength - 1
  if (trackIndex.value === trackItems.value.length - 1) return 0
  return trackIndex.value - 1
})

const trackStyle = computed(() => ({
  transform: `translateX(${translateX.value}px)`,
  transition: transitionEnabled.value ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
}))

let autoplayTimer: ReturnType<typeof setInterval> | null = null
let resumeTimer: ReturnType<typeof setTimeout> | null = null
let resizeTimeout: ReturnType<typeof setTimeout> | null = null

const setCardRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  cardRefs.value[index] = (el as HTMLElement | null) ?? null
}

// Joriy trackIndex kartasini viewport markaziga qo'yadigan translateX qiymatini hisoblaydi.
const applyTransform = (behavior: 'smooth' | 'auto') => {
  const viewport = viewportRef.value
  const card = cardRefs.value[trackIndex.value]
  if (!viewport || !card) return

  transitionEnabled.value = behavior === 'smooth'
  translateX.value = -(card.offsetLeft + card.offsetWidth / 2 - viewport.clientWidth / 2)
}

// trackIndex hech qachon trackItems chegarasidan chiqmasligi kerak — aks
// holda tez-tez bosilganda (yoki avtoplay bilan ustma-ust tushganda) joriy
// animatsiya tugamasdan turib yangisi boshlanadi, "transitionend" chegarada
// ishlamay qoladi va sanoq cheksiz o'sib ketadi (masalan "53/7").
const goTo = (index: number, behavior: 'smooth' | 'auto' = 'smooth') => {
  const maxIndex = trackItems.value.length - 1
  trackIndex.value = Math.max(0, Math.min(index, maxIndex))
  nextTick(() => applyTransform(behavior))
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    goTo(trackIndex.value + 1)
  }, AUTOPLAY_DELAY)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const pause = () => {
  stopAutoplay()
  if (resumeTimer) {
    clearTimeout(resumeTimer)
    resumeTimer = null
  }
}

const scheduleResume = () => {
  if (resumeTimer) clearTimeout(resumeTimer)
  resumeTimer = setTimeout(startAutoplay, RESUME_DELAY)
}

const manualGoTo = (index: number) => {
  goTo(index)
  pause()
  scheduleResume()
}

const prev = () => {
  manualGoTo(trackIndex.value - 1)
}

const next = () => {
  manualGoTo(trackIndex.value + 1)
}

const goToCategory = (realIndex: number) => {
  manualGoTo(realIndex + 1)
}

// CSS transition haqiqatan tugaganidagina ishga tushadi (taxminiy
// debounce emas) — shu sababli klondan asl kartaga almashtirish
// har doim aynan to'g'ri paytda, sezilmas tarzda amalga oshadi.
const handleTransitionEnd = (event: TransitionEvent) => {
  if (event.propertyName !== 'transform' || event.target !== trackRef.value) return

  const lastIndex = trackItems.value.length - 1
  if (trackIndex.value === 0) {
    goTo(lastIndex - 1, 'auto')
  } else if (trackIndex.value === lastIndex) {
    goTo(1, 'auto')
  }
}

const handleResize = () => {
  applyTransform('auto')
}

const handleResizeDebounced = () => {
  if (resizeTimeout) clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(handleResize, 150)
}

// ================= Barmoq / sichqoncha bilan surish =================

const isDragging = ref(false)
let dragStartX = 0
let dragStartTranslate = 0
let dragMoved = false

const handlePointerDown = (event: PointerEvent) => {
  isDragging.value = true
  dragMoved = false
  dragStartX = event.clientX
  dragStartTranslate = translateX.value
  transitionEnabled.value = false
  pause()
  ;(event.target as HTMLElement).setPointerCapture?.(event.pointerId)
}

const handlePointerMove = (event: PointerEvent) => {
  if (!isDragging.value) return
  const delta = event.clientX - dragStartX
  if (Math.abs(delta) > 5) dragMoved = true
  translateX.value = dragStartTranslate + delta
}

const handlePointerUp = (event: PointerEvent) => {
  if (!isDragging.value) return
  isDragging.value = false

  const delta = event.clientX - dragStartX
  if (dragMoved && delta <= -DRAG_THRESHOLD) {
    goTo(trackIndex.value + 1)
  } else if (dragMoved && delta >= DRAG_THRESHOLD) {
    goTo(trackIndex.value - 1)
  } else {
    applyTransform('smooth')
  }
  scheduleResume()
}

onMounted(() => {
  nextTick(() => {
    applyTransform('auto')
    startAutoplay()
  })
  window.addEventListener('resize', handleResizeDebounced)
})

onUnmounted(() => {
  pause()
  if (resizeTimeout) clearTimeout(resizeTimeout)
  window.removeEventListener('resize', handleResizeDebounced)
})
</script>

<template>
  <section
    class="
      relative
      w-full
      overflow-hidden
      bg-[#1878D8]
    "
  >
    <div
      class="
        absolute inset-0
        bg-cover
        bg-center
        opacity-20
      "
      style="
        background-image: url('/images/category-bg-image.png');
      "
    />

    <!-- Blue overlay -->
    <div
      class="
        absolute inset-0
       bg-gradient-to-r from-[#004FAD] to-[#58A4FF]
        opacity-10
      "
    />

    <!-- Main container -->
    <div
      class="
        relative z-10
        mx-auto
        w-full
        max-w-[1200px]
        py-8

        md:py-10
      "
    >

      <!-- ================= TITLE ================= -->

      <h2
        class="
          mb-7
          text-center
          text-[24px]
          font-bold
          leading-none
          text-white

          md:text-[30px]
        "
      >
        {{ t('categories.title') }}
      </h2>


      <!-- ================= CAROUSEL ================= -->

      <div
        ref="viewportRef"
        class="
          w-full
          touch-pan-y
          select-none
          overflow-hidden
        "
      >
        <div
          ref="trackRef"
          class="
            flex
            w-max
            cursor-grab
            gap-4
            active:cursor-grabbing

            md:gap-5
          "
          :style="trackStyle"
          @transitionend="handleTransitionEnd"
          @pointerdown="handlePointerDown"
          @pointermove="handlePointerMove"
          @pointerup="handlePointerUp"
          @pointercancel="handlePointerUp"
          @mouseenter="pause"
          @mouseleave="startAutoplay"
        >
          <div
            v-for="(category, index) in trackItems"
            :key="category._key"
            :ref="(el) => setCardRef(el, index)"
          >
            <CategoryCarouselCard
              :category="category"
              :active="index === trackIndex"
            />
          </div>
        </div>
      </div>


      <!-- ================= CONTROLS ================= -->

      <div
        class="
          mx-auto
          mt-6
          flex
          w-full
          max-w-[620px]
          items-center
          gap-5
          px-5

          md:px-0
        "
      >

        <!-- Arrows -->
        <div
          class="
            flex
            shrink-0
            items-center
            gap-2
          "
        >
          <button
            type="button"
            class="
              flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-white
              text-white
              transition
              hover:bg-white/10
            "
            @click="prev"
          >
            <Icon
              name="lucide:arrow-left"
              class="size-5"
            />
          </button>

          <button
            type="button"
            class="
              flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-white
              text-white
              transition
              hover:bg-white/10
            "
            @click="next"
          >
            <Icon
              name="lucide:arrow-right"
              class="size-5"
            />
          </button>
        </div>


        <!-- Progress -->
        <div
          class="
            flex
            min-w-0
            flex-1
            items-center
            gap-4
          "
        >
          <!-- Lines -->
          <div
            class="
              flex
              min-w-0
              flex-1
              items-center
              gap-2
            "
          >
            <button
              v-for="(_, index) in categories"
              :key="index"
              type="button"
              class="
                h-[4px]
                cursor-pointer
                rounded-full
                bg-white/25
                transition-all
                duration-500
                ease-out
              "
              :class="index === displayIndex ? 'flex-[3] bg-white' : 'flex-1'"
              :aria-label="`${index + 1}-toifaga o'tish`"
              @click="goToCategory(index)"
            />
          </div>

          <!-- Counter -->
          <span
            class="
              shrink-0
              text-base
              font-medium
              text-white
            "
          >
            {{ displayIndex + 1 }}/{{ categories.length }}
          </span>
        </div>

      </div>
    </div>
  </section>
</template>
