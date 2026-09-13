<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('about.title')} — AURA`,
  description: () => t('about.description'),
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppHeader />

    <main class="mx-auto flex max-w-[1280px] flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1F6FA] text-2xl font-bold text-[#0066B3]"
      >
        A
      </div>

      <h1 class="mt-6 text-2xl font-bold text-[#34495E] sm:text-3xl">
        {{ t('about.title') }}
      </h1>

      <p class="mt-3 max-w-md text-sm text-gray-500 sm:text-base">
        {{ t('about.description') }}
      </p>

      <NuxtLink
        to="/home"
        class="mt-8 rounded-full bg-[#0066B3] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#00548f]"
      >
        {{ t('common.back_home') }}
      </NuxtLink>
    </main>

    <AppFooter />
  </div>
</template>
