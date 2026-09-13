<script setup lang="ts">
import { ref } from "vue";
import type { SeasonOrTime } from "~/interface/HomePage";

const { t } = useI18n();

const iconQor = "/icons/qor.svg";
const iconLola = "/icons/lola.svg";
const iconYoz = "/icons/yoz.svg";
const iconBarg = "/icons/barg.svg";
const iconSun = "/icons/sun.svg";
const iconMoon = "/icons/moon.svg";


const seasons = computed<SeasonOrTime[]>(() => [
  { id: "winter", title: t('seasons_and_time.winter'), icon: iconQor, image: "/images/humo-arena.webp" },
  {
    id: "spring",
    title: t('seasons_and_time.spring'),
    icon: iconLola,
    image: "/images/svilizatsiya-markazi.webp",
  },
  { id: "summer", title: t('seasons_and_time.summer'), icon: iconYoz, image: "/images/tashkent-city.webp" },
  { id: "autumn", title: t('seasons_and_time.autumn'), icon: iconBarg, image: "/images/new-uzb.webp" },
]);

const timeOfDays = computed<SeasonOrTime[]>(() => [
  { id: "day", title: t('seasons_and_time.day'), icon: iconSun, image: "/images/buxoro.webp" },
  { id: "night", title: t('seasons_and_time.night'), icon: iconMoon, image: "/images/samarqand.webp" },
]);

const activeItem = ref<string>("");

const selectItem = (id: string) => {
  activeItem.value = id;
};
</script>

<template>
  <section class="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
    <div class="mx-auto max-w-[1200px]">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          {{ t('seasons_and_time.title') }}
        </h2>
      </div>

      <div class="flex flex-col gap-4 sm:gap-6">
        <!-- 1-QATOR: Fasllar -->
        <div class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <div
            v-for="item in seasons"
            :key="item.id"
            @click="selectItem(item.id)"
            class="group relative h-36 cursor-pointer overflow-hidden rounded-2xl sm:h-44 md:h-48 transition-all duration-300 hover:shadow-xl"
            :class="{ 'ring-4 ring-blue-500 ring-offset-2': activeItem === item.id }"
          >
            <!-- Asosiy rasm -->
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              format="webp"
              loading="lazy"
              sizes="sm:50vw md:25vw"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            ></div>

            <!-- SVG Ikonka + Text Badge -->
            <!-- Ikonka chiqariladigan joy -->
            <div
              class="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md"
            >
              <img :src="item.icon" :alt="item.title" class="h-4 w-4 object-contain" />
              <span class="text-xs sm:text-sm font-medium text-white">{{
                item.title
              }}</span>
            </div>

            <!-- Strelka -->
            <div
              class="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all group-hover:bg-white group-hover:text-black"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- 2-QATOR: Kun va Tun -->
        <div class="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          <div
            v-for="item in timeOfDays"
            :key="item.id"
            @click="selectItem(item.id)"
            class="group relative h-40 cursor-pointer overflow-hidden rounded-2xl sm:h-48 md:h-52 transition-all duration-300 hover:shadow-xl"
            :class="{ 'ring-4 ring-blue-500 ring-offset-2': activeItem === item.id }"
          >
            <!-- Asosiy rasm -->
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              format="webp"
              loading="lazy"
              sizes="sm:100vw md:50vw"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            ></div>

            <!-- SVG Ikonka + Text Badge -->
            <!-- Ikonka chiqariladigan joy -->
            <div
              class="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md"
            >
              <img :src="item.icon" :alt="item.title" class="h-4 w-4 object-contain" />
              <span class="text-xs sm:text-sm font-medium text-white">{{
                item.title
              }}</span>
            </div>

            <!-- Strelka -->
            <div
              class="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all group-hover:bg-white group-hover:text-black"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
