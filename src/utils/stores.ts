import { ref, isRef, isReactive } from 'vue'
import { defineStore } from 'pinia'
import type { DefineStoreOptionsBase, StateTree, Store } from 'pinia'

export function createStore<T extends Record<string, any>>(
  name: string,
  callback: () => T,
  options?: DefineStoreOptionsBase<StateTree, Store>,
) {
  return defineStore(
    name,
    () => {
      const lastUpdateTime = ref<number>(Date.now())
      let state = callback()

      const update = (name: keyof T, value: any) => {
        if (isRef(state[name])) {
          state[name].value = value
        }

        if (isReactive(state[name])) {
          state[name] = value
        }

        lastUpdateTime.value = Date.now()
      }

      return {
        lastUpdateTime,
        update,
        ...state,
      }
    },
    options,
  )
}
