import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'
import store from '@/store'
import { reactive } from 'vue'

const role = reactive(store.state.userData.role)
const routes = [
  //Login Route
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogIn.vue')
  },
  // 404 page
  {
    path: '/404',
    name: 'error',
    component: () => import('../views/404.vue')
  },
  // { path: '/:pathMatch(.*)*', redirect: '/404' },
  //Main content after Login
  {
    path: '/',
    redirect: `/${role}/dashboard`,
    component: BaseLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Dashboard.vue')
      },
      {
        path: '/admin/attendance',
        name: 'attendance',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Attendance.vue')
      },
      {
        path: '/admin/listOfSections',
        name: 'listOfSections',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/ListOfSections.vue')
      },
      {
        path: '/admin/listOfStudents',
        name: 'listOfStudents',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/ListOfStudents.vue')
      },
      {
        path: '/admin/announcements',
        name: 'announcements',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Announcements.vue')
      },
      {
        path: '/admin/account',
        name: 'account',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Account.vue')
      },
      {
        path: '/admin/users',
        name: 'users',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Users.vue')
      },
      {
        path: '/admin/activityLog',
        name: 'activityLog',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/ActivityLog.vue')
      },
      {
        path: '/adviser/dashboard',
        name: 'dashboard',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Dashboard.vue')
      },
      {
        path: '/adviser/attendance',
        name: 'attendance',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Attendance.vue')
      },
      {
        path: '/adviser/registration',
        name: 'registration',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Registration.vue')
      },
      {
        path: '/adviser/announcements',
        name: 'announcements',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Announcements.vue')
      },
      {
        path: '/adviser/account',
        name: 'account',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Account.vue')
      }
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
  } else if (role != to.meta.role) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
