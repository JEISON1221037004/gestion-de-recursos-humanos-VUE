import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmpleadoIndex from '../components/empleados/EmpleadoIndex.vue';
import EmpleadoCreate from '../components/empleados/EmpleadoCreate.vue';
import EmpleadoEdit from '../components/empleados/EmpleadoEdit.vue';
import DepartamentoIndex from '../components/departamentos/DepartamentoIndex.vue';
import DepartamentoCreate from '../components/departamentos/DepartamentoCreate.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/empleados',
    name: 'empleados.index',
    component: EmpleadoIndex
  },
  {
    path: '/empleados/create',
    name: 'empleados.create',
    component: EmpleadoCreate
  },
  {
    path: '/empleados/edit/:id',
    name: 'empleados.edit',
    component: EmpleadoEdit
  },

  {
    path: '/departamentos',
    name: 'departamentos.index',
    component: DepartamentoIndex
  },

  {
    path: '/departamentos/Create',
    name: 'departamentos.Create',
    component: DepartamentoCreate
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
