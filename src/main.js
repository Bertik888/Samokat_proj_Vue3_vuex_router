import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/color.scss'
import '@/assets/css/general.scss'
import '@/assets/css/animations.scss'


createApp(App).use(store).use(router).mount('#app')
