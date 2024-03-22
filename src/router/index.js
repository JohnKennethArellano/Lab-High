import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'
const routes = [
  //Login Route
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogIn.vue')
  },
  //Main content after Login
  {
    path: '/',
    redirect: '/dashboard',
    component: BaseLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
      }
    ]
  },
  {
    path: '/forgot',
    name: 'forgotpassword',
    component: () => import('../views/ForgotPassword.vue')
  },
  {
    path: '/reset',
    name: 'resetpassword',
    component: () => import('../views/ResetPassword.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   // For auth guard

//   if (to.meta.requiresAuth && !store.state.user.token) {
//     next({ name: "Login" });
//   } else if (store.state.user.token && to.name === "Login") {
//     next({ name: "Dashboard" });
//   } else {
//     next();
//   }
// });

export default router
