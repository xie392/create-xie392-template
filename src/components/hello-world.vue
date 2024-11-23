<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import Button from '@/components/ui/button.vue'

// 用法一：直接使用 store
const store = useCounterStore()
// 用法二：使用 storeToRefs 转换 store 为响应式对象
const { count } = storeToRefs(store)
</script>

<template>
  <div class="container flex justify-center flex-col items-center min-h-screen">
    <div class="space-y-2">
      <h1
        class="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent"
      >
        Home Page + Shadcn-Vue
      </h1>
      <p>Count: {{ count }}</p>
      <div class="flex space-x-3">
        <Button @click="store.increment" size="sm"> Count + 1 </Button>
        <Button @click="store.update('count', store.count - 1)" variant="destructive" size="sm">
          Count - 1
        </Button>
      </div>
    </div>
  </div>
</template>
