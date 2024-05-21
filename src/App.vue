<template>
  <div id="app">
    <nav>
      <router-link to="/employees">Employee List</router-link>
      <router-link to="/employees/add">Add Employee</router-link>
      <!-- Agrega enlaces a otras rutas según sea necesario -->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
/* Estilos específicos del componente App.vue */
nav {
  background-color: #333;
  padding: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
