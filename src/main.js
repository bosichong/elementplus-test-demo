import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
