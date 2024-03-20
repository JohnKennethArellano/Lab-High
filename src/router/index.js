import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'
import store from '@/store'

const routes = [
  //Login Route
  {
    path: '/',
    name: 'login',
    meta: { requiresAuth: false },
    component: () => import('../views/LogIn.vue')
  },
  // 404 page
  {
    path: '/404',
    name: 'error',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  //Admin Route
  {
    path: '/admin',
    name: 'admin',
    component: BaseLayout,
    meta: { requiresAuth: true, role: 'admin' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Admin/Dashboard.vue')
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('../views/Admin/Attendance.vue')
      },
      {
        path: '/listOfSections',
        name: 'listOfSections',
        component: () => import('../views/Admin/ListOfSections.vue')
      },
      {
        path: '/listOfStudents',
        name: 'listOfStudents',
        component: () => import('../views/Admin/ListOfStudents.vue')
      },
      {
        path: '/announcements',
        name: 'announcements',
        component: () => import('../views/Admin/Announcements.vue')
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('../views/Admin/Account.vue')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/Admin/Users.vue')
      },
      {
        path: '/activityLog',
        name: 'activityLog',
        component: () => import('../views/Admin/ActivityLog.vue')
      }
    ]
  },
  //Adviser Route
  {
    path: '/adviser',
    name: 'adviser',
    component: BaseLayout,
    meta: { requiresAuth: true, role: 'adviser' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Adviser/Dashboard.vue')
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('../views/Adviser/Attendance.vue')
      },
      {
        path: '/registration',
        name: 'registration',
        component: () => import('../views/Adviser/Registration.vue')
      },
      {
        path: '/announcements',
        name: 'announcements',
        component: () => import('../views/Adviser/Announcements.vue')
      },
      {
        path: '/account',
        name: 'account',
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
  const token = store.state.userData.token
  const role = store.state.userData.role
  const userLoggedIn = token ? true : false

  if (to.meta.requiresAuth && !userLoggedIn) {
    next({ name: 'login' })
  } else if (userLoggedIn && to.name === 'login') {
    const redirectPath = role ? `/${role}` : '/'
    next(redirectPath)
  } else if (to.meta.role && role !== to.meta.role) {
    next(`/${role}`)
  } else {
    next()
  }
})

export default router
