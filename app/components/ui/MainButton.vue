<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit'
  }>(),
  {
    variant: 'primary',
    type: 'button',
  },
)
</script>

<template>
  <button
    :type="type"
    class="rounded-xl px-6 py-3 text-sm font-medium transition active:scale-[0.98]"
    :class="
      variant === 'primary'
        ? 'bg-[#0066B3] text-white hover:bg-[#005A9C]'
        : 'border border-[#D9E2EC] bg-white text-[#102A43] hover:border-[#0066B3] hover:text-[#0066B3]'
    "
  >
    <slot />
  </button>
</template>