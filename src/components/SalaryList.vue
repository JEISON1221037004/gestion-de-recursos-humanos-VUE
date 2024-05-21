<template>
    <div>
      <h1>Salary List</h1>
      <!-- Lista de salarios irá aquí -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'SalaryList',
    data() {
      return {
        salaries: []
      };
    },
    methods: {
      fetchSalaries() {
        // Aquí se realizaría una solicitud para obtener los salarios
      }
    },
    mounted() {
      this.fetchSalaries();
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  