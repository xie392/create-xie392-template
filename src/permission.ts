import router from './router'
import { useUserStore } from './stores/user'

const whiteList = ['sign-in', 'sign-up']

export function checkPermission() {
  router.beforeEach((to, _from, next) => {
    const store = useUserStore().token

    if (store) {
      whiteList.includes(to.name as string) ? next({ path: '/' }) : next()
      return
    }

    if (to.meta.requiresAuth) {
      next(`/sign-in?redirect=${to.fullPath}`)
      return
    }

    next()
  })
}
