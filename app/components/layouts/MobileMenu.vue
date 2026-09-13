<script setup lang="ts">
import type { SelectOption } from "~/interface/HomePage";

defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const { t, locale, setLocale } = useI18n();

const mediaOptions = computed<SelectOption[]>(() => [
  { label: t("common.video"), value: "videos", link: "/videos", image: "/icons/video-icon.svg" },
  { label: t("common.photo"), value: "photos", link: "/photos", image: "/icons/photo-icon.svg" },
  { label: t("common.infographics"), value: "infographics", link: "/infographics", image: "/icons/infografika-icon.svg " },
]);

const languageOptions = computed<SelectOption[]>(() => [
  { label: "O‘zbek", value: "uz", image: "/icons/uzb.svg" },
  { label: "Русский", value: "ru", image: "/icons/russia.svg" },
  { label: "English", value: "en", image: "/icons/us.svg" },
]);

const mediaOpen = ref(false);
const langOpen = ref(false);

const handleLanguageChange = (code: string) => {
  setLocale(code as "uz" | "ru" | "en");
  langOpen.value = false;
  emit("close");
};
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[100] bg-black/40"
        @click.self="emit('close')"
      >
        <Transition name="slide">
          <aside class="h-full w-[310px] max-w-[82vw] bg-white p-3 shadow-2xl">
            <div class="flex h-10 items-center justify-between">
              <AppLogo />
            </div>

            <div class="mt-10 space-y-2">
              <NuxtLink
                to="/login"
                class="flex px-4 py-3 w-full items-center rounded-full bg-gradient-to-r from-[#0966c3] to-[#4a9ef1] text-left text-[16px] font-medium  text-white mb-5"
                @click="emit('close')"
              >
               <img src="/icons/login.svg" alt="login icon"  />
                <span class="ml-2">
                  {{ t("common.login") }}
                </span>
              </NuxtLink>

              <div class="rounded-2xl bg-white shadow-[0_2px_10px_rgba(15,45,90,0.08)] overflow-hidden">
                <button
                  type="button"
                  class="flex w-full items-center justify-between px-4 py-3"
                  @click="mediaOpen = !mediaOpen"
                >
                  <span class="flex items-center gap-2 text-[16px] font-medium text-[#173452]">
                    <img src="/icons/media-icon.svg" alt="" class="h-5 w-5" />
                    {{ t("common.media") }}
                  </span>
                  <svg
                    class="h-4 w-4 shrink-0 text-[#173452] transition-transform duration-200"
                    :class="mediaOpen ? 'rotate-180' : ''"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>

                <div v-show="mediaOpen">
                  <NuxtLink
                    v-for="option in mediaOptions"
                    :key="option.value"
                    :to="option.link"
                    class="flex items-center gap-2 border-t border-[#EEF2F7] px-4 py-3 text-[15px] text-[#173452]"
                    @click="emit('close')"
                  >
                    <img :src="option.image" alt="" class="h-4 w-4" />
                    {{ option.label }}
                  </NuxtLink>
                </div>
              </div>

              <!-- Prezident -->
              <NuxtLink
                to="/president"
                class="flex px-4 py-3 w-full items-center gap-2 rounded-full bg-[#e8f2ff] text-[16px] font-medium text-[#173452]"
                @click="emit('close')"
              >
                <img src="/icons/prezident-icon.svg" alt="" class="h-3.5 w-3.5" />

                {{ t("navigation.president") }}
              </NuxtLink>

              <!-- Yangi Uzbekistan -->
              <NuxtLink
                to="/new-uzbekistan"
                class="flex px-4 py-3 w-full items-center gap-2 rounded-full bg-[#e8f2ff] text-[16px] font-medium text-[#173452]"
                @click="emit('close')"
              >
                <img src="/icons/new-uzb-icon.svg" alt="" class="h-3.5 w-3.5" />

                {{ t("navigation.new_uzbekistan") }}
              </NuxtLink>

              <!-- About -->
              <NuxtLink
                to="/about"
                class="flex px-4 py-3 w-full items-center gap-2 rounded-full bg-[#e8f2ff] text-[16px] font-medium text-[#173452]"
                @click="emit('close')"
              >
                <img src="/icons/about-icon.svg" alt="" class="h-3.5 w-3.5" />

                {{ t("navigation.about_us") }}
              </NuxtLink>

              <div class="rounded-2xl bg-white shadow-[0_2px_10px_rgba(15,45,90,0.08)] overflow-hidden">
                <button
                  type="button"
                  class="flex w-full items-center justify-between px-4 py-3"
                  @click="langOpen = !langOpen"
                >
                  <span class="flex items-center gap-2 text-[16px] font-medium text-[#173452]">
                    <img
                      :src="languageOptions.find((o) => o.value === locale)?.image"
                      alt=""
                      class="h-5 w-5 rounded-full"
                    />
                    {{ languageOptions.find((o) => o.value === locale)?.label }}
                  </span>
                  <svg
                    class="h-4 w-4 shrink-0 text-[#173452] transition-transform duration-200"
                    :class="langOpen ? 'rotate-180' : ''"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>

                <div v-show="langOpen">
                  <button
                    v-for="option in languageOptions"
                    :key="option.value"
                    type="button"
                    class="flex w-full items-center gap-2 border-t border-[#EEF2F7] px-4 py-3 text-left text-[15px] text-[#173452]"
                    @click="handleLanguageChange(option.value)"
                  >
                    <img :src="option.image" alt="" class="h-4 w-4 rounded-full" />
                    {{ option.label }}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
