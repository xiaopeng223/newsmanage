import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入particles例子库
import Particles from "vue3-particles";
createApp(App)
    .use(ElementPlus)
    .use(Particles)
    .use(store).use(router).mount('#app')
