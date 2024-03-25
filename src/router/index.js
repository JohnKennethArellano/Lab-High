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
  {
    path: '/forgot',
    name: 'forgotpassword',
    meta: { requiresAuth: false },
    component: () => import('../views/ForgotPassword.vue')
  },
  {
    path: '/reset',
    name: 'resetpassword',
    meta: { requiresAuth: false },
    component: () => import('../views/ResetPassword.vue')
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
        path: '/admin/dashboard',
        name: 'adminDashboard',
        component: () => import('../views/Admin/Dashboard.vue')
      },
      {
        path: '/admin/attendance',
        name: 'adminAttendance',
        component: () => import('../views/Admin/Attendance.vue')
      },
      {
        path: '/admin/listOfSections',
        name: 'adminListOfSections',
        component: () => import('../views/Admin/ListOfSections.vue')
      },
      {
        path: '/admin/listOfStudents',
        name: 'adminLlistOfStudents',
        component: () => import('../views/Admin/ListOfStudents.vue')
      },
      {
        path: '/admin/announcements',
        name: 'adminAnnouncements',
        component: () => import('../views/Admin/Announcements.vue')
      },
      {
        path: '/admin/account',
        name: 'adminAccount',
        component: () => import('../views/Admin/Account.vue')
      },
      {
        path: '/admin/users',
        name: 'adminUsers',
        component: () => import('../views/Admin/Users.vue')
      },
      {
        path: '/admin/activityLog',
        name: 'adminActivityLog',
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
        path: '/adviser/dashboard',
        name: 'adviserDashboard',
        component: () => import('../views/Adviser/Dashboard.vue')
      },
      {
        path: '/adviser/attendance',
        name: 'adviserAttendance',
        component: () => import('../views/Adviser/Attendance.vue')
      },
      {
        path: '/adviser/registration',
        name: 'adviserRegistration',
        component: () => import('../views/Adviser/Registration.vue')
      },
      {
        path: '/adviser/announcements',
        name: 'adviserAnnouncements',
        component: () => import('../views/Adviser/Announcements.vue')
      },
      {
        path: '/adviser/account',
        name: 'adviserAccount',
        component: () => import('../views/Adviser/Account.vue')
      }
    ]
  },
  
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
    const redirectPath = role ? `/${role}/dashboard` : '/'
    next(redirectPath)
  } else if (to.meta.role && role !== to.meta.role) {
    next(`/${role}/dashboard`)
  } else {
    next()
  }
})

export default router
