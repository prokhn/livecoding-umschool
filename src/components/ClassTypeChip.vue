<script setup lang="ts">
import type { IClassType } from '@/types/api';

const props = withDefaults(
  defineProps<{
    classType: IClassType
  }>(),
  {}
)
</script>

<template>
  <div class="class-type-chip" :style="`background-color: ${props.classType.color}`">
    {{ props.classType.name }}
  </div>
</template>

<style lang="postcss">
.class-type-chip {
  @apply px-2 py-1 text-white w-fit;
}
</style>
