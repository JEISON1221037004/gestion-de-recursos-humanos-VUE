<template>
    <div class="container mt-4">
      <h1 class="mb-4">Lista de Posiciones</h1>
      <div class="mb-3">
        <button @click="createPosicion" class="btn btn-primary">Agregar Posición</button>
      </div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="posicion in posiciones" :key="posicion.id">
            <td>{{ posicion.id }}</td>
            <td>{{ posicion.nombre }}</td>
            <td>{{ posicion.descripcion }}</td>
            <td>
              <button @click="editPosicion(posicion.id)" class="btn btn-info btn-sm">Editar</button>
              <button @click="deletePosicion(posicion.id)" class="btn btn-danger btn-sm">Eliminar</button>
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
        posiciones: []
      }
    },
    created() {
      this.fetchPosiciones();
    },
    methods: {
      fetchPosiciones() {
        axios.get('/posiciones')
          .then(response => {
            this.posiciones = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the posiciones!", error);
          });
      },
      createPosicion() {
        this.$router.push({ name: 'posiciones.create' });
      },
      editPosicion(id) {
        this.$router.push({ name: 'posiciones.edit', params: { id } });
      },
      deletePosicion(id) {
        axios.delete(`/posiciones/${id}`)
          .then(() => {
            this.fetchPosiciones();
          })
          .catch(error => {
            console.error("There was an error deleting the posicion!", error);
          });
      }
    }
  }
  </script>
  