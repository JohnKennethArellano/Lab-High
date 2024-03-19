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
  // 404 page
  {
    path: '/404',
    name: 'error',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login'
  },
  // { path: '/:pathMatch(.*)*', redirect: '/login' },
  //Main content after Login
  {
    path: '/',
    redirect: () => {
      let userRole = store.state.userData.role
      return userRole ? `/${userRole}/dashboard` : '/login'
    },
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
        name: 'adminAttendance',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Attendance.vue')
      },
      {
        path: '/admin/listOfSections',
        name: 'adminListOfSections',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/ListOfSections.vue')
      },
      {
        path: '/admin/listOfStudents',
        name: 'adminListOfStudents',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/ListOfStudents.vue')
      },
      {
        path: '/admin/announcements',
        name: 'adminAnnouncements',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Announcements.vue')
      },
      {
        path: '/admin/account',
        name: 'adminAccount',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Account.vue')
      },
      {
        path: '/admin/users',
        name: 'adminUsers',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Users.vue')
      },
      {
        path: '/admin/activityLog',
        name: 'adminActivityLog',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/ActivityLog.vue')
      },
      { path: '/adviser/', redirect: '/adviser/dashboard' },
      {
        path: '/admin/dashboard',
        name: 'adminDashboard',
        meta: { role: 'admin' },
        component: () => import('../views/Admin/Dashboard.vue')
      },
      {
        path: '/adviser/dashboard',
        name: 'adviserDashboard',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Dashboard.vue')
      },
      {
        path: '/adviser/attendance',
        name: 'adviserAttendance',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Attendance.vue')
      },
      {
        path: '/adviser/registration',
        name: 'adviserRegistration',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Registration.vue')
      },
      {
        path: '/adviser/announcements',
        name: 'adviserAnnouncements',
        meta: { role: 'adviser' },
        component: () => import('../views/Adviser/Announcements.vue')
      },
      {
        path: '/adviser/account',
        name: 'adviserAccount',
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
  const { token, role } = store.state.userData
  if (to.meta.requiresAuth && !token) {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    const redirectPath = role ? `/${role}/dashboard` : '/'
    next(redirectPath)
  } else if (to.meta.role && role !== to.meta.role) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
