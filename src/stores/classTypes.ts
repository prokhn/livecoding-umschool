import type { IClassType } from '@/types/api'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import useApi from '@/composables/useApi'
import getClassTypesAPI from '@/api/getClassTypes'

export const useClassTypesStore = defineStore('classTypes', () => {
  const classTypes = ref<Array<IClassType>>([])

  const { execute, isPending, error } = useApi(() => getClassTypesAPI())

  async function getClassTypes() {
    const result = await execute()

    if (result) classTypes.value = result
  }

  function getClassTypeByID (id: number) {
    return classTypes.value.find((classType) => classType.id === id)
  }

  return { classTypes, isPending, error, getClassTypes, getClassTypeByID }
})
