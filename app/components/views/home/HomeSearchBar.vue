<script setup lang="ts">
import {
  ArrowRight,
  Search,
} from '@element-plus/icons-vue'

const { t } = useI18n()

const search = ref('Toshkent')
</script>

<template>
  <form
    class="
      relative
      z-10
      mx-auto
      flex
      h-7
      w-[370px]
      max-w-[calc(100%-60px)]
      items-center
      rounded-full
      bg-white
      shadow-sm
    "
    @submit.prevent
  >
    <!-- Search icon -->
    <el-icon
      class="
        ml-3
        shrink-0
        text-[#147bd3]
      "
      size="12"
    >
      <Search />
    </el-icon>

    <!-- Input -->
    <input
      v-model="search"
      type="text"
      :placeholder="t('common.search')"
      class="
        min-w-0
        flex-1
        border-0
        bg-transparent
        px-2
        text-[8px]
        outline-none
        placeholder:text-gray-400
      "
    />

    <!-- Submit -->
    <button
      type="submit"
      class="
        mr-[3px]
        grid
        h-[22px]
        w-[22px]
        shrink-0
        place-items-center
        rounded-full
        bg-gradient-to-br
        from-[#168be8]
        to-[#0060b9]
        text-white
      "
    >
      <el-icon size="12">
        <ArrowRight />
      </el-icon>
    </button>
  </form>
</template>