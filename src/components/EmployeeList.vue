<template>
    <div>
      <h1>Employee List</h1>
      <!-- Lista de empleados irá aquí -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmployeeList',
    data() {
      return {
        employees: []
      };
    },
    methods: {
      fetchEmployees() {
        // Aquí se realizaría una solicitud para obtener los empleados
      }
    },
    mounted() {
      this.fetchEmployees();
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  