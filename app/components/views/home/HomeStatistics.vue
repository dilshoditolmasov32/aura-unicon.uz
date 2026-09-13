<script setup lang="ts">
const { t } = useI18n();

const statistics = computed(() => [
  {
    label: t('statistics.total_materials'),
    value: "1275",
    unit: t('statistics.unit_pieces'),
    icon: "ep:files", // yoki mos icon
  },
  {
    label: t('statistics.videos'),
    value: "1275",
    unit: t('statistics.unit_pieces'),
    icon: "ep:video-play",
  },
  {
    label: t('statistics.photos'),
    value: "367",
    unit: t('statistics.unit_pieces'),
    icon: "ep:picture",
  },
  {
    label: t('statistics.infographics'),
    value: "15",
    unit: t('statistics.unit_pieces'),
    icon: "ep:data-analysis",
  },
  {
    label: t('statistics.downloads'),
    value: "25 630",
    unit: t('statistics.unit_times'),
    icon: "ep:download",
  },
  {
    label: t('statistics.authors'),
    value: "95",
    unit: t('statistics.unit_pieces'),
    icon: "ep:user",
  },
  {
    label: t('statistics.local_users'),
    value: "971",
    unit: t('statistics.unit_pieces'),
    icon: "ep:user-filled",
  },
  {
    label: t('statistics.foreign_users'),
    value: "105",
    unit: t('statistics.unit_pieces'),
    icon: "ep:coordinate",
  },
]);
</script>

<template>
  <section class="bg-white">
    <SectionLayout>
      <SectionTitle :title="t('statistics.title')" />

      <div class="rounded-3xl bg-[#E9F2FF] px-8 py-12 max-sm:px-4 max-sm:py-5">
        <div class="grid grid-cols-2 gap-y-6 lg:grid-cols-4">
          <div
            v-for="(item, index) in statistics"
            :key="item.label"
            class="relative flex items-center gap-3 px-2 sm:px-4"
          >
            <div
              v-if="(index + 1) % 4 !== 0"
              class="hidden lg:block absolute right-0 top-1/2 h-10 w-[1px] -translate-y-1/2 bg-[#D0E2FF]"
            ></div>

            <div
              v-if="index < statistics.length - 2"
              class="lg:hidden absolute bottom-[-12px] left-2 right-2 h-[1px] bg-[#D0E2FF]"
            ></div>

            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2A75D3] text-white shadow-sm sm:h-12 sm:w-12"
            >
              <Icon :name="item.icon" class="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <div class="min-w-0">
              <p class="truncate text-4 text-black max-sm:text-xs">
                {{ item.label }}
              </p>
              <p
                class="bg-gradient-to-r from-[#004FAD] to-[#58A4FF] bg-clip-text text-base font-bold text-transparent sm:text-xl"
              >
                {{ item.value }}
                <span class="font-normal">{{ item.unit }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  </section>
</template>
