<script setup lang="ts">
import CustomSelect from '../ui/CustomSelect.vue'
import type { SelectOption } from '~/interface/HomePage'

const { t, locale, setLocale } = useI18n()

const mobileMenu = ref(false)

const selectedMedia = ref('')
const mediaOptions = computed<SelectOption[]>(() => [
  { label: t('common.photo'), value: 'photos', link: '/photos', image: '/icons/photo-icon.svg' },
  { label: t('common.video'), value: 'videos', link: '/videos', image: '/icons/video-icon.svg' },
  { label: t('common.infographics'), value: 'infographics', link: '/infographics', image: '/icons/infografika-icon.svg' },
])

const languageOptions: SelectOption[] = [
  { label: 'O‘zbek', value: 'uz', image: '/icons/uzb.svg' },
  { label: 'Русский', value: 'ru', image: '/icons/russia.svg' },
  { label: 'English', value: 'en', image: '/icons/us.svg' },
]

const handleLanguageChange = (code: string) => {
  setLocale(code as 'uz' | 'ru' | 'en')
}

const navigation = computed(() => [
  { label: t('navigation.president'), to: '/president', icon: '/icons/prezident-icon.svg' },
  { label: t('navigation.new_uzbekistan'), to: '/new-uzbekistan', icon: '/icons/new-uzb-icon.svg' },
  { label: t('navigation.about_us'), to: '/about', icon: '/icons/about-icon.svg' },
])
</script>

<template>
  <header class="relative ">
    <div
      class="mx-auto flex h-[72px] max-w-[1216px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
    >
      <!-- Logo -->
      <NuxtLink to="/home" class="flex shrink-0 items-center">
        <img src="/images/aura-logo.svg" alt="AURA" class="h-8 w-auto sm:h-9" />
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden items-center gap-8 lg:flex">
        <!-- Media Select (Menyu ichida birinchi bo'lib turadi) -->
        <CustomSelect
          v-model="selectedMedia"
          :options="mediaOptions"
          icon="/icons/media-icon.svg"
          :placeholder="t('common.media')"
        />

        <!-- Qolgan oddiy menyular -->
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="flex items-center gap-2 text-[18px] font-medium text-[#1E293B] transition hover:text-[#0066B3]"
        >
          <img :src="item.icon" :alt="item.label" class="h-5 w-5" />
          <span>{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Right Side Actions -->
      <div class="hidden items-center gap-6 lg:flex">
        <!-- Kirish Tugmasi -->
        <NuxtLink
          to="/login"
          class="flex items-center gap-2 rounded-[58px] px-5 py-2 text-sm font-semibold leading-7 text-white transition hover:opacity-90"
          style="
            background: linear-gradient(90deg, #3d68f8 0%, #1537a7 100%),
              linear-gradient(90deg, #004fad 0%, #58a4ff 100%);
          "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_57_3428)">
              <path
                d="M9.95207 0.63158C9.71212 0.63158 9.482 0.7269 9.31233 0.896571C9.14266 1.06624 9.04734 1.29636 9.04734 1.53631C9.04734 1.77626 9.14266 2.00639 9.31233 2.17606C9.482 2.34572 9.71212 2.44105 9.95207 2.44105H18.9994C19.7193 2.44105 20.4096 2.72701 20.9187 3.23602C21.4277 3.74502 21.7136 4.4354 21.7136 5.15525V17.8215C21.7136 18.5414 21.4277 19.2317 20.9187 19.7408C20.4096 20.2498 19.7193 20.5357 18.9994 20.5357H9.95207C9.71212 20.5357 9.482 20.631 9.31233 20.8007C9.14266 20.9704 9.04734 21.2005 9.04734 21.4405C9.04734 21.6805 9.14266 21.9105 9.31233 22.0803C9.482 22.2499 9.71212 22.3451 9.95207 22.3451H18.9994C20.1992 22.3451 21.3498 21.8685 22.1981 21.0202C23.0464 20.1719 23.523 19.0213 23.523 17.8215V5.15525C23.523 3.95549 23.0464 2.80488 22.1981 1.95653C21.3498 1.10818 20.1992 0.63158 18.9994 0.63158H9.95207ZM16.021 10.8478L10.5926 5.41943C10.5085 5.33531 10.4086 5.26858 10.2987 5.22306C10.1888 5.17753 10.071 5.1541 9.95207 5.1541C9.83312 5.1541 9.71531 5.17753 9.60541 5.22306C9.4955 5.26858 9.39563 5.33531 9.31152 5.41943C9.22741 5.50355 9.16067 5.60341 9.11515 5.71331C9.06962 5.82322 9.04619 5.94102 9.04619 6.05999C9.04619 6.17894 9.06962 6.29674 9.11515 6.40665C9.16067 6.51656 9.22741 6.61642 9.31152 6.70054L13.1965 10.5836H0.904734C0.664784 10.5836 0.43466 10.679 0.26499 10.8486C0.0953199 11.0183 0 11.2484 0 11.4884C0 11.7283 0.0953199 11.9585 0.26499 12.1281C0.43466 12.2978 0.664784 12.3931 0.904734 12.3931H13.1965L9.31152 16.2763C9.14164 16.4461 9.04619 16.6766 9.04619 16.9168C9.04619 17.1571 9.14164 17.3875 9.31152 17.5574C9.4814 17.7273 9.71181 17.8227 9.95207 17.8227C10.1923 17.8227 10.4227 17.7273 10.5926 17.5574L16.021 12.1289C16.1053 12.0449 16.1721 11.9451 16.2177 11.8351C16.2633 11.7252 16.2868 11.6074 16.2868 11.4884C16.2868 11.3694 16.2633 11.2515 16.2177 11.1416C16.1721 11.0317 16.1053 10.9319 16.021 10.8478Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_57_3428">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {{ t('common.login') }}
        </NuxtLink>

        <CustomSelect
          :model-value="locale"
          :options="languageOptions"
          :placeholder="t('common.language')"
          @update:model-value="handleLanguageChange"
        />
      </div>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center bg-[#3D68F8] rounded-full  text-[#1E293B] lg:hidden"
        @click="mobileMenu = !mobileMenu"
      >
        <img src="/icons/hamburger-menu.svg" alt="Menu" />
      </button>
    </div>

    <MobileMenu :open="mobileMenu" @close="mobileMenu = false" />
  </header>
</template>
