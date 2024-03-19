import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'
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
    redirect: '/dashboard',
    component: BaseLayout,
    children: [
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('../views/Admin/Dashboard.vue')
      },
      {
        path: '/admin/attendance',
        name: 'attendance',
        component: () => import('../views/Admin/Attendance.vue')
      },
      {
        path: '/admin/listOfSections',
        name: 'listOfSections',
        component: () => import('../views/Admin/ListOfSections.vue')
      },
      {
        path: '/admin/listOfStudents',
        name: 'listOfStudents',
        component: () => import('../views/Admin/ListOfStudents.vue')
      },
      {
        path: '/admin/announcements',
        name: 'announcements',
        component: () => import('../views/Admin/Announcements.vue')
      },
      {
        path: '/admin/account',
        name: 'account',
        component: () => import('../views/Admin/Account.vue')
      },
      {
        path: '/admin/users',
        name: 'users',
        component: () => import('../views/Admin/Users.vue')
      },
      {
        path: '/admin/activityLog',
        name: 'activityLog',
        component: () => import('../views/Admin/ActivityLog.vue')
      },
      {
        path: '/adviser/dashboard',
        name: 'dashboard',
        component: () => import('../views/Adviser/Dashboard.vue')
      },
      {
        path: '/adviser/attendance',
        name: 'attendance',
        component: () => import('../views/Adviser/Attendance.vue')
      },
      {
        path: '/adviser/registration',
        name: 'registration',
        component: () => import('../views/Adviser/Registration.vue')
      },
      {
        path: '/adviser/announcements',
        name: 'announcements',
        component: () => import('../views/Adviser/Announcements.vue')
      },
      {
        path: '/adviser/account',
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
