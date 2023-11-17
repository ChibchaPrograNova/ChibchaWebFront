import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/Common/homeIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: '/adminDashboard',
      name: 'adminDashboard',
      component: () => import('../pages/Admin/indexAdmin.vue')
    },
    {
      path: '/newDistributor',
      name: 'distributorForm',
      component: () => import('../pages/Admin/distributor/distributorForm.vue')
    },
    {
      path: '/distribuidorInfo/:id',
      name: 'distributorInfo',
      component: () => import('../pages/Admin/distributor/distributorInfo.vue'),
      props: true
    },
    {
      path: '/vistaDistribuidor',
      name: 'distributorView',
      component: () => import('../pages/Admin/distributor/distributorView.vue')
    },
    {
      path: '/newEmployee',
      name: 'employeeForm',
      component: () => import('../pages/Admin/employee/employeeForm.vue')
    },
    {
      path: '/employeeInfo/:id',
      name: 'employeeInfo',
      component: () => import('../pages/Admin/employee/employeeInfo.vue'),
      props: true
    },
    {
      path: '/vistaEmployee',
      name: 'employeeView',
      component: () => import('../pages/Admin/employee/employeeView.vue')
    },
    {
      path: '/userInfo/:id',
      name: 'userInfo',
      component: () => import('../pages/Admin/user/userInfo.vue'),
      props: true
    },
    {
      path: '/vistaUser',
      name: 'userView',
      component: () => import('../pages/Admin/user/userView.vue')
    },
    {
      path: '/home',
      name: 'homeIndex',
      component: () => import('../pages/Common/homeIndex.vue')
    },
    {
      path: '/login',
      name: 'loginView',
      component: () => import('../pages/Common/loginView.vue')
    },
    {
      path: '/register',
      name: 'registerView',
      component: () => import('../pages/Common/registerView.vue')
    },
    {
      path: '/infoEmployee',
      name: 'caseInfo',
      component: () => import('../pages/Employee/caseInfo.vue')
    },
    {
      path: '/dashboard',
      name: 'mainDashboard',
      component: () => import('../pages/Employee/mainDashboard.vue')
    },
    {
      path: '/detailBuy',
      name: 'detailOfBuy',
      component: () => import('../pages/User/detailOfBuy.vue')
    },
    {
      path: '/vistaPayment',
      name: 'paymentView',
      component: () => import('../pages/User/paymentView.vue')
    },
    {
      path: '/vistaResult',
      name: 'resultView',
      component: () => import('../pages/User/resultView.vue')
    },
    {
      path: '/domain/:nombreDominio',
      name: 'searchDomain',
      component: () => import('../pages/User/searchDomain.vue'),
      props: true
    },
    {
      path: '/userDashboard',
      name: 'userDashboard',
      component: () => import('../pages/User/userDashboard.vue')
    },
    {
      path: '/vistaPlan',
      name: 'planView',
      component: () => import('../pages/User/planView.vue')
    },
    {
      path: '/vistaAyuda',
      name: 'ayuda',
      component: () => import('../pages/User/ticketView.vue')
    },
  ]
})

export default router
