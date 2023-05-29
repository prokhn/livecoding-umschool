<script setup lang="ts">
import ClassTypeChip from './ClassTypeChip.vue'
import type { IProductMapped } from '@/types/products'

const props = withDefaults(
  defineProps<{
    product: IProductMapped
  }>(),
  {}
)
</script>

<template>
  <div class="product-card">
    <span class="product-title"
      >{{ props.product.subject?.name }} - {{ props.product.teacher?.name }}</span
    >

    <div class="product-class-type">
      <ClassTypeChip :class-type="props.product.classType ?? { id: 9, name: '', color: 'white' }" />
    </div>

    <div class="price">
      <span class="price-amount">{{ props.product.price.amount }}</span>
      <span class="price-currency">{{ props.product.price.currency }}</span>
    </div>

    <p class="product-description">
      {{ props.product.description }}
    </p>
  </div>
</template>

<style lang="postcss">
.product-card {
  @apply p-3 flex flex-col gap-2 bg-white shadow-sm rounded-md;

  .product-title {
    @apply font-medium;
  }

  .product-description {
    @apply line-clamp-2;
  }
}
</style>
