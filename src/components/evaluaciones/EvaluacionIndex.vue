<template>
    <div class="container mt-4">
      <h1 class="mb-4">Lista de Evaluaciones</h1>
      <div class="mb-3">
        <button @click="createEvaluacion" class="btn btn-primary">Agregar Evaluación</button>
      </div>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Empleado</th>
            <th scope="col">Puntaje</th>
            <th scope="col">Comentarios</th>
            <th scope="col">Fecha</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="evaluacion in evaluaciones" :key="evaluacion.id">
            <td>{{ evaluacion.id }}</td>
            <td>{{ evaluacion.empleado.nombre }} {{ evaluacion.empleado.apellido }}</td>
            <td>{{ evaluacion.puntaje }}</td>
            <td>{{ evaluacion.comentarios }}</td>
            <td>{{ evaluacion.fecha }}</td>
            <td>
              <button @click="editEvaluacion(evaluacion.id)" class="btn btn-info btn-sm">Editar</button>
              <button @click="deleteEvaluacion(evaluacion.id)" class="btn btn-danger btn-sm">Eliminar</button>
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
        evaluaciones: []
      }
    },
    created() {
      this.fetchEvaluaciones();
    },
    methods: {
      fetchEvaluaciones() {
        axios.get('/evaluaciones')
          .then(response => {
            this.evaluaciones = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the evaluaciones!", error);
          });
      },
      createEvaluacion() {
        this.$router.push({ name: 'evaluaciones.create' });
      },
      editEvaluacion(id) {
        this.$router.push({ name: 'evaluaciones.edit', params: { id } });
      },
      deleteEvaluacion(id) {
        axios.delete(`/evaluaciones/${id}`)
          .then(() => {
            this.fetchEvaluaciones();
          })
          .catch(error => {
            console.error("There was an error deleting the evaluacion!", error);
          });
      }
    }
  }
  </script>
  