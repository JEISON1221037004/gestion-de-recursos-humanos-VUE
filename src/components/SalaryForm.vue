<template>
    <div>
      <h1>Add New Salary</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="employee">Employee:</label>
          <input type="text" v-model="salary.employee" id="employee" required>
        </div>
        <div>
          <label for="amount">Amount:</label>
          <input type="number" v-model="salary.amount" id="amount" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SalaryForm',
    data() {
      return {
        salary: {
          employee: '',
          amount: 0
        }
      };
    },
    methods: {
      submitForm() {
        axios.post('/api/salaries', this.salary)
          .then(response => {
            alert('Salary added successfully');
            this.salary.employee = '';
            this.salary.amount = 0;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del componente */
  </style>
  