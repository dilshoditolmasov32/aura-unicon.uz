<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
  }>(),
  {
    subtitle: '',
  },
)
</script>

<template>
  <div class=" mb-8 text-center">
    <h2
      class="text-[40px] font-bold leading-[100%] tracking-normal text-[#0066B3]"
    >
      {{ title }}
    </h2>

    <p
      v-if="subtitle"
      class="mt-2 text-sm text-[#829AB1]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>