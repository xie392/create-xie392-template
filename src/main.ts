import './styles/globals.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './app.vue'
import router from './router'
import { checkPermission } from './permission'

const app = createApp(App)
const pinia = createPinia().use(piniaPluginPersistedstate)

app.use(pinia).use(router).mount('#app')

// Check permission
checkPermission()
