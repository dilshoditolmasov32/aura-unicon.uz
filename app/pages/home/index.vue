<script setup lang="ts">
import HomeDirections from '~/components/views/home/HomeDirections.vue'
import HomeRegions from '~/components/views/home/HomeRegions.vue'
import HomeStatistics from '~/components/views/home/HomeStatistics.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => `AURA — ${t('page.title')}`,
  description: () => t('page.description'),
})
</script>

<template>
  <div class="min-h-screen bg-[#F4F6F9]">
    <!-- Header + Hero -->
    <div class="">
      <section class="relative overflow-hidden">
        <!-- z-0: umumiy gradient background -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#DCEAFB] via-[#E7E0F6] to-[#FBDCE7]"
          aria-hidden="true"
        />

        <div class="relative z-10">
          <AppHeader />

          <main>
            <HomeHeroSection />
          </main>
        </div>
      </section>
    </div>

    <main>
      <HomeDirections />
      <HomeRegions />
      <CategoryCarousel />
      <HomeStatistics />
    </main>

    <AppFooter />
  </div>
</template>