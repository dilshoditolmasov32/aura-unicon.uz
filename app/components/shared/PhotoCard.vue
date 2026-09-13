<script setup lang="ts">
defineProps<{
  title: string
  image: string
  description?: string
}>()
</script>

<template>
  <NuxtLink
    to="#"
    class="group block overflow-hidden rounded-xl bg-white shadow-[0_2px_10px_rgba(16,42,67,0.06)] transition hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="relative aspect-[1.55] overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        width="400"
        height="260"
        loading="lazy"
      />

      <div
        class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"
      />

      <div class="absolute bottom-3 left-3 right-3">
        <h3 class="text-sm font-semibold text-white">
          {{ title }}
        </h3>

        <p
          v-if="description"
          class="mt-0.5 line-clamp-1 text-[10px] text-white/80"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
