import { ref, type UnwrapRef } from 'vue'

export default function useApi<R>(callback: () => R) {
  const isPending = ref(false)
  const data = ref<R | null>(null)
  const error = ref<string | null>(null)

  async function execute() {
    const randomDelay = Math.floor(Math.random() * 1000)

    isPending.value = true

    try {
      const fakeRequest = new Promise<R>((resolve) =>
        setTimeout(() => resolve(callback()), randomDelay)
      )

      const result = await fakeRequest

      if (result) {
        data.value = result as UnwrapRef<R>
      }

      return result
    } catch (e) {
      error.value = e
    }

    isPending.value = false
  }

  return {
    isPending,
    data,
    error,
    execute
  }
}
