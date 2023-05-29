<script setup lang="ts">
import AppSelect from '@/components/AppSelect.vue'
import ProductCard from '@/components/ProductCard.vue'
import useProductsList from '@/composables/useProductsList'
import { useClassTypesStore } from '@/stores/classTypes'
import { useProductsStore } from '@/stores/products'
import { useSubjectsStore } from '@/stores/subjects'
import { useTeachersStore } from '@/stores/teachers'

const classTypesStore = useClassTypesStore()
const subjectsStore = useSubjectsStore()
const teachersStore = useTeachersStore()
const productsStore = useProductsStore()

classTypesStore.getClassTypes()
subjectsStore.getSubjects()
teachersStore.getTeachers()
productsStore.getProducts()

const { classTypeFilterByID, subjectFilterByID, productsFiltered } = useProductsList()
</script>

<template>
  <main class="home-view">
    <div class="select-wrapper">
      <AppSelect
        v-model="classTypeFilterByID"
        :label="'Тип класса'"
        :options="classTypesStore.classTypes"
        :label-key="'name'"
        :value-key="'id'"
      />

      <AppSelect
        v-model="subjectFilterByID"
        :label="'Предмет'"
        :options="subjectsStore.subjects"
        :label-key="'name'"
        :value-key="'id'"
      />
    </div>

    <div class="products-grid">
      <ProductCard
        v-for="product in productsFiltered"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<style lang="postcss">
.home-view {
  @apply pt-6;

  .select-wrapper {
    @apply flex gap-3;
  }

  .products-grid {
    @apply grid grid-cols-2 gap-4 mt-5;
  }
}
</style>
