<script setup lang="ts">
import { signInApi } from '@/api/user'
import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import Button from '@/components/ui/button.vue'
import Input from '@/components/ui/input.vue'

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
              <Input placeholder="用户名" v-model="formData.username" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label class="text-base font-medium text-gray-900">密码</label>
            </div>
            <div class="mt-2">
              <Input placeholder="密码" type="password" v-model="formData.password" />
            </div>
          </div>
          <div>
            <Button class="w-full" type="submit"> 登录 </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
