import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3Lottie, { name: 'Lottie' })

app.mount('#app')
