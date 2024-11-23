<script setup lang="ts">
import { signInApi } from '@/api/user'
import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const formData = reactive({
  username: 'admin',
  password: '123456',
})

const router = useRouter()
const userStore = useUserStore()

const submitHandler = async (event: Event) => {
  event.preventDefault()
  const { code, data, msg } = await signInApi(formData)
  if (code !== 200) {
    console.log('error:', msg)
    return
  }
  userStore.update('token', data?.token)
  router.push('/')
  console.log(data)
}

const INPUT_CLASS = `flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm focus-visible:outline-none 
focus-visible:ring-2 focus-visible:ring-black`
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-10">
    <div class="w-full shadow-md p-4 max-w-md">
      <h2 class="text-center text-2xl font-bold leading-tight text-black">登录</h2>
      <p class="mt-2 text-center text-sm text-gray-600">没有账号？注册</p>
      <form class="mt-8" @submit="submitHandler">
        <div class="space-y-5">
          <div>
            <label class="text-base font-medium text-gray-900">用户名</label>
            <div class="mt-2">
              <input :class="INPUT_CLASS" placeholder="用户名" v-model="formData.username" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label class="text-base font-medium text-gray-900">密码</label>
            </div>
            <div class="mt-2">
              <input
                :class="INPUT_CLASS"
                placeholder="密码"
                type="password"
                v-model="formData.password"
              />
            </div>
          </div>
          <div>
            <button
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 mb-3"
              type="submit"
            >
              登录
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
