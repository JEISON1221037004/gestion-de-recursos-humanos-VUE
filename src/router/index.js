import { createRouter, createWebHistory } from 'vue-router';
import EmployeeList from '../components/EmployeeList.vue';
import EmployeeForm from '../components/EmployeeForm.vue';
import DepartmentList from '../components/DepartmentList.vue';
import DepartmentForm from '../components/DepartmentForm.vue';
import PositionList from '../components/PositionList.vue';
import PositionForm from '../components/PositionForm.vue';
import SalaryList from '../components/SalaryList.vue';
import SalaryForm from '../components/SalaryForm.vue';
import PerformanceReviewList from '../components/PerformanceReviewList.vue';
import PerformanceReviewForm from '../components/PerformanceReviewForm.vue';

const routes = [
  {
    path: '/employees',
    name: 'EmployeeList',
    component: EmployeeList
  },
  {
    path: '/employees/add',
    name: 'AddEmployee',
    component: EmployeeForm
  },
  {
    path: '/departments',
    name: 'DepartmentList',
    component: DepartmentList
  },
  {
    path: '/departments/add',
    name: 'AddDepartment',
    component: DepartmentForm
  },
  {
    path: '/positions',
    name: 'PositionList',
    component: PositionList
  },
  {
    path: '/positions/add',
    name: 'AddPosition',
    component: PositionForm
  },
  {
    path: '/salaries',
    name: 'SalaryList',
    component: SalaryList
  },
  {
    path: '/salaries/add',
    name: 'AddSalary',
    component: SalaryForm
  },
  {
    path: '/performance-reviews',
    name: 'PerformanceReviewList',
    component: PerformanceReviewList
  },
  {
    path: '/performance-reviews/add',
    name: 'AddPerformanceReview',
    component: PerformanceReviewForm
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
