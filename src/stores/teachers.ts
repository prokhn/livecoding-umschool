import type { ITeacher } from './../types/api';
import { ref } from 'vue'
import { defineStore } from 'pinia'
import useApi from '@/composables/useApi'
import getTeachersAPI from '@/api/getTeachers'

export const useTeachersStore = defineStore('teachers', () => {
  const teachers = ref<Array<ITeacher>>([])

  const { execute, isPending, error } = useApi(() => getTeachersAPI())

  async function getTeachers() {
    const result = await execute()

    if (result) teachers.value = result
  }

  function getTeacherByID (id: number) {
    return teachers.value.find((teacher) => teacher.id === id)
  }

  return { teachers, isPending, error, getTeachers, getTeacherByID }
})
