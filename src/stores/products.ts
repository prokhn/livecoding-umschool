import type { IProduct } from './../types/api'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import useApi from '@/composables/useApi'
import getProductsAPI from '@/api/getProducts'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Array<IProduct>>([])

  const { execute, isPending, error } = useApi(() => getProductsAPI())

  async function getProducts() {
    const result = await execute()

    if (result) products.value = result
  }

  return { products, isPending, error, getProducts }
})
