<!-- 定义路由参数 -->
<route lang="yaml">
# 设置路由名称
name: home
meta:
  # 设置该路由是否需要登录权限
  requiresAuth: true
  # 设置该路由的标题
  title: 首页
</route>

<script setup lang="ts">
import HelloWorld from '@/components/hello-world.vue'
</script>

<template>
  <HelloWorld />
</template>
