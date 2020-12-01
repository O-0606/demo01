import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import SensorLibrary from '../components/SensorLibrary.vue'
import IndexList from '../components/IndexList.vue'
import IndexEdit from '../components/IndexEdit.vue'
import IndexPicture from '../components/IndexPicture.vue'
import PlatformManagement from '../views/PlatformManagement.vue'
import ApplicationCenter from '../views/ApplicationCenter.vue'
import ApplicationManagement from '../views/ApplicationManagement.vue'
import SystemMaintenance from '../views/SystemMaintenance.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/index/platformManagement',
        name: 'PlatformManagement',
        component: PlatformManagement,
        children: [
          {
            path: '/index/platformManagement/indexEdit',
            name: 'IndexEdit',
            component: IndexEdit
          },
          {
            path: '/index/platformManagement/sensorLibrary',
            name: 'SensorLibrary',
            component: SensorLibrary
          },
          {
            path: '/index/platformManagement/indexList',
            name: 'IndexList',
            component: IndexList
          },
          {
            path: '/indexPicture',
            name: 'IndexPicture',
            component: IndexPicture
          }
        ]
      },
      {
        path: '/index/applicationCenter',
        name: 'ApplicationCenter',
        component: ApplicationCenter
      },
      {
        path: '/index/applicationManagement',
        name: 'ApplicationManagement',
        component: ApplicationManagement
      },
      {
        path: '/index/systemMaintenance',
        name: 'SystemMaintenance',
        component: SystemMaintenance
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
