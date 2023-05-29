<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    options: Array<Record<string, any>>
    labelKey: string
    valueKey: string
    modelValue: number | null
  }>(),
  {}
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()

function onSelectInput(e: Event) {
  const newValue = e.target?.value
  let valueToEmit = null

  if (newValue !== 'all') valueToEmit = parseInt(e.target?.value)

  emit('update:modelValue', valueToEmit)
}
</script>

<template>
  <div class="app-select">
    <label>{{ props.label }}</label>

    <select
      :value="props.modelValue"
      @input="onSelectInput"
    >
      <option :value="'all'">Все</option>

      <option
        v-for="option in props.options"
        :key="option[props.valueKey]"
        :value="option[props.valueKey]"
      >
        {{ option[props.labelKey] }}
      </option>
    </select>
  </div>
</template>

<style lang="postcss">
.app-select {
  @apply flex gap-2;
}
</style>
