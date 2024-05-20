<template>
    <div class="container mt-4">
      <h1 class="mb-4">Lista de Departamentos</h1>
      <div class="mb-3">
        <button @click="createDepartamento" class="btn btn-primary">Agregar Departamento</button>
      </div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Ubicación</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="departamento in departamentos" :key="departamento.id">
            <td>{{ departamento.id }}</td>
            <td>{{ departamento.nombre }}</td>
            <td>{{ departamento.ubicacion }}</td>
            <td>
              <button @click="editDepartamento(departamento.id)" class="btn btn-info btn-sm">Editar</button>
              <button @click="deleteDepartamento(departamento.id)" class="btn btn-danger btn-sm">Eliminar</button>
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
        departamentos: []
      }
    },
    created() {
      this.fetchDepartamentos();
    },
    methods: {
      fetchDepartamentos() {
        axios.get('/departamentos')
          .then(response => {
            this.departamentos = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the departamentos!", error);
          });
      },
      createDepartamento() {
        this.$router.push({ name: 'departamentos.create' });
      },
      editDepartamento(id) {
        this.$router.push({ name: 'departamentos.edit', params: { id } });
      },
      deleteDepartamento(id) {
        axios.delete(`/departamentos/${id}`)
          .then(() => {
            this.fetchDepartamentos();
          })
          .catch(error => {
            console.error("There was an error deleting the departamento!", error);
          });
      }
    }
  }
  </script>
  