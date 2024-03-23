import './assets/main.css'
import './assets/styles.css'
import store from './store'
import './axios/axios'
// import './axios/axioswithtoken'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { Icon } from '@iconify/vue'
const app = createApp(App)

app.use(store)
app.use(router)
// app.component('Icon', Icon)
app.mount('#app')
