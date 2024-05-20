<template>
    <div class="container mt-4">
      <h1 class="mb-4">Historial de Salarios</h1>
      <div class="mb-3">
        <button @click="createHistorialSalario" class="btn btn-primary">Agregar Registro de Salario</button>
      </div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Empleado</th>
            <th scope="col">Salario</th>
            <th scope="col">Fecha de Inicio</th>
            <th scope="col">Fecha de Fin</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="historial in historiales" :key="historial.id">
            <td>{{ historial.id }}</td>
            <td>{{ historial.empleado.nombre }} {{ historial.empleado.apellido }}</td>
            <td>{{ historial.salario }}</td>
            <td>{{ historial.fecha_inicio }}</td>
            <td>{{ historial.fecha_fin }}</td>
            <td>
              <button @click="editHistorialSalario(historial.id)" class="btn btn-info btn-sm">Editar</button>
              <button @click="deleteHistorialSalario(historial.id)" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from '../../axios';
  
  export default {
    data() {
      return {
        historiales: []
      }
    },
    created() {
      this.fetchHistoriales();
    },
    methods: {
      fetchHistoriales() {
        axios.get('/historial_salarios')
          .then(response => {
            this.historiales = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the historial de salarios!", error);
          });
      },
      createHistorialSalario() {
        this.$router.push({ name: 'historial_salarios.create' });
      },
      editHistorialSalario(id) {
        this.$router.push({ name: 'historial_salarios.edit', params: { id } });
      },
      deleteHistorialSalario(id) {
        axios.delete(`/historial_salarios/${id}`)
          .then(() => {
            this.fetchHistoriales();
          })
          .catch(error => {
            console.error("There was an error deleting the historial de salario!", error);
          });
      }
    }
  }
  </script>
  