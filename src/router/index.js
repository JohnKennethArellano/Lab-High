import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'
import store from '@/store'
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
    redirect: '/admin/dashboard',
    component: BaseLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        meta: { role: 'admin' },
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/admin/test',
        name: 'admin1',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/test.vue')
      },
      {
        path: '/teacher/test',
        name: 'teacher1',
        meta: { role: 'teacher' },
        component: () => import('../views/Teacher/test.vue')
      }
      //Add this for every child component meta : {role : <role ng entity na pwede mag access ng link>}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.userData.token) {
    next({ name: 'login' })
  } else if (store.state.userData.token && to.name === 'login') {
    next({ name: 'dashboard' })
  } else if (store.state.userData.role != to.meta.role) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
