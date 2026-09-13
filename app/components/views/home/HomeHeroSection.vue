<script setup lang="ts">
import { Search, Right } from "@element-plus/icons-vue";

const { t } = useI18n();

const query = ref("");
</script>

<template>
  <div>
  <section class="relative overflow-hidden">
    <img
      src="/images/katakchalar.svg"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 z-[-2] translate-y-[17%] h-full w-full object-contain"
    />

    <div class="relative z-10 flex flex-col items-center px-4 pt-6 text-center sm:pt-8 lg:pt-10">
      <h1
        class="max-w-[1000px] text-2xl font-bold leading-tight text-[#102A43] sm:text-3xl lg:text-[42px]"
      >
        {{ t('hero.title_top') }}
        <span class="block mt-4 text-[50px] font-bold uppercase text-[#000]">
          {{ t('hero.title_bottom') }}
        </span>
      </h1>

      <div
        class="mt-8 flex w-full max-w-[800px] items-center gap-2 rounded-[100px] bg-white py-4 px-5 shadow-md sm:mt-8"
      >
        <ElIcon :size="24" class=" shrink-0 text-[#274DCB]">
          <Search color="#274DCB" />
        </ElIcon>

        <input
          v-model="query"
          type="text"
          :placeholder="t('hero.search_placeholder')"
          class="w-full border-none bg-transparent text-[16px] text-[#000] outline-none placeholder:text-[#8A9BAE]"
        />

        <button
          type="button"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#3D68F8] to-[#1537A7] text-white transition hover:bg-[#00538F]"
        >
          <ElIcon :size="24" class="shrink-0 ">
            <Right color="white" />
          </ElIcon>
        </button>
      </div>

      <a
        href="https://tcm.uz/uz/"
        class="relative z-[1] mt-6 block w-full max-w-[420px] cursor-pointer lg:absolute lg:right-0 lg:top-0 lg:z-[-5] lg:mt-0 lg:w-auto lg:max-w-none"
      >
        <img
          src="/images/tashkent-content-market.webp"
          alt="Tashkent Content Market"
          class="h-auto w-full"
        />
      </a>
    </div>

    <div class="relative z-[2] mt-4 w-full sm:mt-6 lg:mt-8">
      <img
        src="/images/hero-image-cropped.webp"
        alt="Toshkent shahri manzarasi"
        class="relative z-[10] block w-full"
      />

      <img
        src="/images/aura-hero.svg"
        alt="AURA"
        class="pointer-events-none absolute inset-x-0 top-1/2 z-[-1] mx-auto w-[80%] max-w-[820px] -translate-y-[120%] translate-x-[-5%] sm:max-w-[950px] lg:max-w-[1100px]"
      />
    </div>
  </section>
  </div>

</template>
