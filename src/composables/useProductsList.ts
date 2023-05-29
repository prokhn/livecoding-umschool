import type { IProductMapped } from './../types/products'
import { useProductsStore } from './../stores/products'
import { useTeachersStore } from './../stores/teachers'
import { useSubjectsStore } from './../stores/subjects'
import { useClassTypesStore } from './../stores/classTypes'
import { computed, ref } from 'vue'

export default function useProductsList() {
  const classTypeFilterByID = ref<number | null>(null)
  const subjectFilterByID = ref<number | null>(null)

  const classTypesStore = useClassTypesStore()
  const subjectsStore = useSubjectsStore()
  const teachersStore = useTeachersStore()
  const productsStore = useProductsStore()

  const productsMapped = computed<Array<IProductMapped>>(() => {
    return productsStore.products.map((product) => {
      const { teacher_id, subject_id, class_type_id, ...productRest } = product

      const teacher = teachersStore.getTeacherByID(teacher_id) ?? null
      const subject = subjectsStore.getSubjectByID(subject_id) ?? null
      const classType = classTypesStore.getClassTypeByID(class_type_id) ?? null

      return { teacher, subject, classType, ...productRest }
    })
  })

  const productsFiltered = computed(() =>
    productsMapped.value.filter((product) => {
      let isProductPassesFilter = true

      if (classTypeFilterByID.value !== null) {
        isProductPassesFilter = product.classType?.id === classTypeFilterByID.value
      }

      if (subjectFilterByID.value !== null) {
        isProductPassesFilter = product.subject?.id === subjectFilterByID.value
      }

      return isProductPassesFilter
    })
  )

  return { classTypeFilterByID, subjectFilterByID, productsFiltered }
}
