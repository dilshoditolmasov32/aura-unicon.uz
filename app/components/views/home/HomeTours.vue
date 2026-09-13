<script setup lang="ts">
const { t } = useI18n()

const tours = computed(() => [
  {
    title: t('tours.family'),
    image: '/images/hero-image.webp',
  },
  {
    title: t('tours.historical'),
    image: '/images/samarqand.png',
  },
  {
    title: t('tours.nature'),
    image: '/images/buxoro.png',
  },
  {
    title: t('tours.city'),
    image: '/images/tashkent-content-market.webp',
  },
])
</script>

<template>
  <section
    id="tours"
    class="bg-[#0875C1] px-4 py-8 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-[1000px]">
      <div class="mb-5 flex items-end justify-between">
        <div>
          <p class="text-[10px] font-medium text-white/70">
            {{ t('tours.for_you') }}
          </p>

          <h2
            class="mt-1 text-base font-bold text-white sm:text-lg"
          >
            {{ t('tours.choose_recommendation') }}
          </h2>
        </div>

        <NuxtLink
          to="#"
          class="text-xs font-medium text-white underline underline-offset-4"
        >
          {{ t('common.all') }}
        </NuxtLink>
      </div>

      <div
        class="grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        <NuxtLink
          v-for="tour in tours"
          :key="tour.title"
          to="#"
          class="group relative aspect-[1.35] overflow-hidden rounded-xl"
        >
          <img
            :src="tour.image"
            :alt="tour.title"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            width="450"
            height="330"
            loading="lazy"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
          />

          <h3
            class="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white sm:text-sm"
          >
            {{ tour.title }}
          </h3>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
