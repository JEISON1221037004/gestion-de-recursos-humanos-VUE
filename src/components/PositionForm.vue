<template>
    <div>
      <h1>Position Form</h1>
      <!-- Formulario de posición irá aquí -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'PositionForm',
    data() {
      return {
        position: {}
      };
    },
    methods: {
      submitForm() {
        // Aquí se realizaría una solicitud para enviar los datos del formulario
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  