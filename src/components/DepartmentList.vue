<template>
    <div>
      <h1>Department List</h1>
      <!-- Lista de departamentos irá aquí -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'DepartmentList',
    data() {
      return {
        departments: []
      };
    },
    methods: {
      fetchDepartments() {
        // Aquí se realizaría una solicitud para obtener los departamentos
      }
    },
    mounted() {
      this.fetchDepartments();
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  