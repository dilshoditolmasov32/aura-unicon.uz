<script setup lang="ts">
const { t } = useI18n()

const navigationGroups = computed(() => [
  [
    { title: t('common.video'), to: '/video', icon: 'mdi:play' },
    { title: t('common.photo'), to: '/rasm', icon: 'mdi:image-outline' },
    { title: t('navigation.infographics'), to: '/infografika', icon: 'mdi:chart-box-outline' },
  ],
  [
    { title: t('navigation.president'), to: '/prezident', icon: 'mdi:account-outline' },
    { title: t('navigation.new_uzbekistan'), to: '/yangi-ozbekiston', icon: 'mdi:flower-outline' },
    { title: t('navigation.about_us'), to: '/biz-haqimizda', icon: 'mdi:information-outline' },
  ],
])

const contactLinks = [
  { label: 'info@aura.com', href: 'mailto:info@aura.com', icon: 'mdi:email-outline' },
  { label: '@aura_support_bot', href: 'https://t.me/aura_support_bot', icon: 'mdi:paper-plane-outline' },
]
</script>

<template>
  <footer class="relative overflow-hidden bg-[#003875] text-white">
    <SectionLayout>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 pb-8">
        
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3">
    
            <NuxtImg
              src="/images/footer-logo.svg"
              alt="Kontent markazi"
              class="w-100"
            
            />
          </div>

          <p class="mt-5 max-w-[440px] text-[14px] leading-relaxed text-white/60 sm:text-sm">
            {{ t('footer.description') }}
          </p>

          <p class="mt-6 text-[14px] text-white/60 sm:text-sm">
            © {{ new Date().getFullYear() }} Aura.uz
          </p>
        </div>

        <div class="border-b border-dashed border-white/20 lg:hidden"></div>

        <div class="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-4">
          <nav v-for="(group, idx) in navigationGroups" :key="idx">
            <ul class="space-y-5">
              <li v-for="link in group" :key="link.title">
                <NuxtLink
                  :to="link.to"
                  class="inline-flex items-center gap-3 text-base font-bold text-white transition-opacity hover:opacity-80 sm:text-[18px] leading-[20px]"
                >
                  <Icon :name="link.icon" class="h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6" />
                  <span class="text-[16px]">{{ link.title }}</span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="lg:col-span-3">
          <div class="rounded-[20px] bg-[#16457d]  p-5 sm:p-6">
            <h3 class="text-[18px] font-bold text-white leading-[20px] sm:text-lg">
              {{ t('footer.contact_title') }}
            </h3>

            <div class="mt-5 space-y-3">
              <a
                v-for="contact in contactLinks"
                :key="contact.label"
                :href="contact.href"
                target="_blank"
                class="flex items-center gap-3 text-sm text-white/90 transition-opacity hover:opacity-100 sm:text-base"
              >
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon :name="contact.icon" class="h-4 w-4 text-white" />
                </div>
                <span class="truncate">{{ contact.label }}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </SectionLayout>

    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[80px] overflow-hidden opacity-40 sm:h-[100px]"
      aria-hidden="true"
    >
      <NuxtImg
        src="/images/footer-bottom-banner.svg"
        alt=""
        class="absolute bottom-0 left-1/2 h-auto w-full min-w-[1200px] -translate-x-1/2 object-cover"
      />
    </div>
  </footer>
</template>