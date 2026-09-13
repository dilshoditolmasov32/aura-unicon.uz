<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { SelectOption } from '~/interface/HomePage';


const props = defineProps<{
  modelValue: string
  options: SelectOption[]
  placeholder?: string
  icon?: string
  block?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const router = useRouter()

const handleChange = (selectedVal: string) => {
  emit('update:modelValue', selectedVal)
  
  const targetOption = props.options.find(opt => opt.value === selectedVal)
  if (targetOption?.link) {
    router.push(targetOption.link)
  }
}
</script>

<template>
  <div
    class="flex items-center gap-1.5 cursor-pointer"
    :class="block ? 'w-full' : ''"
  >
    <img v-if="icon" :src="icon" alt="icon" class="h-5 w-5 shrink-0 " />

    <el-select
      :model-value="modelValue"
      :placeholder="placeholder"
      :class="block ? 'custom-mobile-select' : 'custom-header-select'"
      @change="handleChange"
    >
    <el-option
  v-for="item in options"
  :key="item.value"
  :label="item.label"
  :value="item.value"
>
  <div class="flex items-center gap-2">
    <img v-if="item.image" :src="item.image" alt="icon" class="w-4 h-4" />
    <span>{{ item.label }}</span>
  </div>
</el-option>    </el-select>
  </div>
</template>

<style scoped>


:deep(.custom-header-select) {
  --el-select-width: auto;
}

:deep(.custom-header-select .el-select__wrapper) {
  width: auto !important;
  min-width: fit-content !important;
}

:deep(.custom-header-select .el-select__selection) {
  flex: none !important;
}

:deep(.custom-header-select .el-select__selected-item.el-select__placeholder) {
  position: static !important;
  top: auto !important;
  transform: none !important;
  width: auto !important;
  white-space: nowrap !important;
}

:deep(.custom-header-select .el-select__wrapper),
:deep(.custom-header-select .el-input__wrapper) {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
  padding: 0 2px !important;
}

:deep(.custom-header-select .el-input),
:deep(.custom-header-select .el-select__wrapper:hover),
:deep(.custom-header-select .el-select__wrapper.is-focused),
:deep(.custom-header-select .el-select__wrapper.is-focused:hover),
:deep(.custom-header-select .el-input__wrapper:hover),
:deep(.custom-header-select .el-input__wrapper.is-focus),
:deep(.custom-header-select .el-input__wrapper.is-focus:hover) {
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}

:deep(.custom-header-select .el-select__selected-item),
:deep(.custom-header-select .el-select__placeholder),
:deep(.custom-header-select .el-input__inner) {
  color: #000000 !important;
  font-weight: 500 !important;
  font-size: 18px !important;
}

:deep(.custom-header-select .el-input__inner::placeholder) {
  color: #000000 !important;
  opacity: 1 !important;
  font-weight: 500 !important;
}

:deep(.custom-header-select .el-select__caret) {
  color: #000000 !important;
  font-weight: 500;
}

:deep(.custom-mobile-select) {
  --el-select-width: 100%;
  width: 100%;
}

:deep(.custom-mobile-select .el-select__wrapper) {
  width: 100% !important;
  min-height: 44px !important;
  border-radius: 9999px !important;
  background-color: #e9f2ff !important;
  box-shadow: none !important;
  border: none !important;
  padding: 0 16px !important;
}

:deep(.custom-mobile-select .el-select__wrapper:hover),
:deep(.custom-mobile-select .el-select__wrapper.is-focused),
:deep(.custom-mobile-select .el-select__wrapper.is-focused:hover) {
  box-shadow: none !important;
  border: none !important;
}

:deep(.custom-mobile-select .el-select__selected-item),
:deep(.custom-mobile-select .el-select__placeholder),
:deep(.custom-mobile-select .el-input__inner) {
  color: #000000 !important;
  font-weight: 500 !important;
  font-size: 16px !important;
}

:deep(.custom-mobile-select .el-select__caret) {
  color: #000000 !important;
  font-weight: 500;
}
</style>

<style>
.el-select-dropdown__item {
  color: #000000 !important;
  font-size: 18px !important;
}
</style>