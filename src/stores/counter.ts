import { ref, computed } from 'vue'
import { createStore } from '@/utils/stores'

export const useCounterStore = createStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    return { count, doubleCount, increment }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
