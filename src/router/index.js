import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import MainBox from '@/views/MainBox.vue';
import RoutesConfig from './config';
import store from '@/store';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: MainBox,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next();
  } else {
    // 判断是否登录
    if (localStorage.getItem("token")) {
      if (!store.state.isGetterRouter) {
        ConfigRouter();
        next({ path: to.fullPath, replace: true });
      } else {
        next();
      }
    } else {
      next({ path: '/login' });
    }
  }
});

// 定义config路由的函数
const ConfigRouter = () => {
  RoutesConfig.forEach(item => {
    router.addRoute('mainbox', item);
  });
  store.commit("changeGetterRouter", true);
};

export default router;
