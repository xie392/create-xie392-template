import { createPersistStore } from '@/utils/stores'

export const useUserStore = createPersistStore(
    {
        token: ''
    },
    () => {},
    {
        name: 'user',
        version: 1
    }
)
