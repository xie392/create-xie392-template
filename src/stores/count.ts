import { createPersistStore } from '@/utils/stores'

export const useCountStore = createPersistStore(
    {
        count: 0
    },
    (set) => ({
        increment: () => set((state) => ({ count: state.count + 1 }))
    }),
    {
        name: 'count',
        version: 1
    }
)
