import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'
import store from '@/store'
import { onMounted } from 'vue'

const role = onMounted(() => store.state.userData.role)
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
  //Main content after Login
  {
    path: '/',
    redirect: `/${role}/dashboard`,
    component: BaseLayout,
    meta: { requiresAuth: true },
    children: [
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

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !store.state.userData.token) {
//     next({ name: 'login' })
//   } else if (store.state.userData.token && to.name === 'login') {
//     next({ name: 'dashboard' })
//   } else if (role != to.meta.role) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

export default router
