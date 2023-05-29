import type { ISubject } from './../types/api';
import { ref } from 'vue'
import { defineStore } from 'pinia'
import useApi from '@/composables/useApi'
import getSubjectsAPI from '@/api/getSubjects'

export const useSubjectsStore = defineStore('subjects', () => {
  const subjects = ref<Array<ISubject>>([])

  const { execute, isPending, error } = useApi(() => getSubjectsAPI())

  async function getSubjects() {
    const result = await execute()

    if (result) subjects.value = result
  }

  function getSubjectByID (id: number) {
    return subjects.value.find((subject) => subject.id === id)
  }

  return { subjects, isPending, error, getSubjects, getSubjectByID }
})
