<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()

const handleError = () => {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <div
    class="min-h-screen bg-[#f5f8fc] flex items-center justify-center px-4 py-10"
  >
    <div class="w-full max-w-2xl text-center">

      
      <div class="flex justify-center mb-8">
        <NuxtLink to="/">
        <AppLogo/>
        </NuxtLink>
      </div>

      <!-- Error illustration -->
      <div class="relative flex justify-center mb-8">

        <!-- Background circle -->
        <div
          class="absolute w-64 h-64 rounded-full bg-[#e8f2fb]"
        />

        <!-- Error number -->
        <div class="relative">
          <span
            class="text-[120px] sm:text-[160px] font-extrabold leading-none text-[#0066b3]/10 select-none"
          >
            {{ error?.statusCode || 404 }}
          </span>

          <!-- Location pin -->
          <div
            class="absolute inset-0 flex items-center justify-center"
          >
            <div
              class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-lg flex items-center justify-center"
            >
              <svg
                class="w-10 h-10 sm:w-12 sm:h-12 text-[#0066b3]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                />

                <circle
                  cx="12"
                  cy="10"
                  r="2.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Text -->
      <div class="mb-8">
        <h1
          class="text-2xl sm:text-3xl font-bold text-[#102a43] mb-3"
        >
          {{ error?.statusCode === 404
            ? t('error.not_found_title')
            : t('error.generic_title') }}
        </h1>

        <p
          class="max-w-md mx-auto text-sm sm:text-base text-gray-500 leading-relaxed"
        >
          {{
            error?.statusCode === 404
              ? t('error.not_found_desc')
              : t('error.generic_desc')
          }}
        </p>
      </div>

      <!-- Error code -->
      <div
        v-if="error?.statusCode"
        class="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-white border border-gray-200 text-sm text-gray-500"
      >
        <span
          class="w-2 h-2 rounded-full bg-[#0066b3]"
        />

        {{ t('error.error_code') }}
        <strong class="text-[#102a43]">
          {{ error.statusCode }}
        </strong>
      </div>

      <!-- Actions -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <!-- Home -->
        <button
          type="button"
          @click="handleError"
          class="w-full sm:w-auto min-w-[180px] px-6 py-3 rounded-xl bg-[#0066b3] hover:bg-[#005799] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
        >
          {{ t('common.back_home') }}
        </button>

        <!-- Back -->
        <button
          type="button"
          @click="$router.back()"
          class="w-full sm:w-auto min-w-[180px] px-6 py-3 rounded-xl bg-white border border-gray-200 hover:border-[#0066b3] hover:text-[#0066b3] text-[#102a43] font-medium text-sm transition-all duration-200"
        >
          {{ t('error.go_back') }}
        </button>
      </div>

      <!-- Footer -->
      <div class="mt-12 pt-6 border-t border-gray-200">
        <p class="text-xs text-gray-400">
          {{ t('error.footer_note') }}
        </p>
      </div>

    </div>
  </div>
</template>