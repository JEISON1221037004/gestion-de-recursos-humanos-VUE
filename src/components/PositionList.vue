<template>
    <div>
      <h1>Position List</h1>
      <!-- Lista de posiciones irá aquí -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'PositionList',
    data() {
      return {
        positions: []
      };
    },
    methods: {
      fetchPositions() {
        // Aquí se realizaría una solicitud para obtener las posiciones
      }
    },
    mounted() {
      this.fetchPositions();
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
<template>
    <div>
      <h1>Position List</h1>
      <!-- Lista de posiciones irá aquí -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'PositionList',
    data() {
      return {
        positions: []
      };
    },
    methods: {
      fetchPositions() {
        // Aquí se realizaría una solicitud para obtener las posiciones
      }
    },
    mounted() {
      this.fetchPositions();
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
    