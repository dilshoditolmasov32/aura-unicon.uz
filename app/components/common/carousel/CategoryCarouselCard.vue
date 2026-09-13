<script setup lang="ts">
interface Category {
  id: number
  titleKey: string
  image: string
  views: string
}

const { t } = useI18n()

withDefaults(
  defineProps<{
    category: Category
    active?: boolean
  }>(),
  {
    active: false,
  },
)
</script>

<template>
  <div
    class="
      group relative
      h-[150px] w-[220px]
      shrink-0
      overflow-hidden
      rounded-[18px]
      bg-gray-200
      transition-all duration-500 ease-out

      md:h-[250px] md:w-[380px]
    "
    :class="
      active
        ? 'z-10 scale-[1.03] shadow-xl shadow-black/30 ring-[3px] ring-[#FFB648]'
        : 'ring-0 hover:z-10 hover:scale-[1.03] hover:shadow-xl hover:shadow-black/30 hover:ring-[3px] hover:ring-[#FFB648]'
    "
  >
    <!-- Image -->
    <NuxtImg
      :src="category.image"
      :alt="t(category.titleKey)"
      class="
        absolute inset-0
        h-full w-full
        object-cover
        transition-transform duration-500
        group-hover:scale-105
      "
    />

    <!-- Bottom gradient -->
    <div
      class="
        absolute inset-x-0 bottom-0
        h-1/2
        bg-gradient-to-t
        from-black/80
        to-transparent
      "
    />

    <!-- Content -->
    <div
      class="
        absolute
        bottom-4 left-4 right-4
        z-10
        text-white
      "
    >
      <h3
        class="
          max-w-[70%]
          text-sm
          font-semibold
          leading-tight

          md:text-lg
        "
      >
        {{ t(category.titleKey) }}
      </h3>

      <div
        class="
          mt-1
          flex
          items-center
          gap-1
          text-xs
          md:text-sm
        "
      >
        <Icon
          name="lucide:instagram"
          class="size-4"
        />

        <span>{{ category.views }}</span>
      </div>
    </div>

    <!-- Batafsil: faol yoki hover holatida chiqadi -->
    <button
      class="
        absolute
        bottom-4 right-4
        z-20
        flex
        items-center
        gap-2
        rounded-full
        bg-[#315EEA]
        px-4 py-2
        text-xs
        font-medium
        text-white
        transition-all
        duration-300
        hover:bg-[#244bc5]
      "
      :class="
        active
          ? 'translate-y-0 opacity-100'
          : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
      "
    >
      {{ t('common.read_more') }}

      <Icon
        name="lucide:arrow-right"
        class="size-4"
      />
    </button>
  </div>
</template>
