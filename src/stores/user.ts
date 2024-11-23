import { ref, computed } from 'vue'
import { createStore } from '@/utils/stores'

export const useUserStore = createStore(
  'user',
  () => {
    const token = ref('')

    return { token }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
