<template>
    <div class="container mt-4">
      <h1 class="mb-4">Agregar Nueva Evaluación</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="empleado_id" class="form-label">Empleado</label>
          <select id="empleado_id" v-model="form.empleado_id" class="form-control" required>
            <option v-for="empleado in empleados" :key="empleado.id" :value="empleado.id">{{ empleado.nombre }} {{ empleado.apellido }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="puntaje" class="form-label">Puntaje</label>
          <input type="number" id="puntaje" v-model="form.puntaje" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="comentarios" class="form-label">Comentarios</label>
          <textarea id="comentarios" v-model="form.comentarios" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label for="fecha" class="form-label">Fecha</label>
          <input type="date" id="fecha" v-model="form.fecha" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Crear</button>
        <button @click="cancel" class="btn btn-secondary">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from '../../axios';
  
  export default {
    data() {
      return {
        form: {
          empleado_id: '',
          puntaje: '',
          comentarios: '',
          fecha: ''
        },
        empleados: []
      }
    },
    created() {
      this.fetchEmpleados();
    },
    methods: {
      fetchEmpleados() {
        axios.get('/empleados')
          .then(response => {
            this.empleados = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the empleados!", error);
          });
      },
      submitForm() {
        axios.post('/evaluaciones', this.form)
          .then(() => {
            this.$router.push({ name: 'evaluaciones.index' });
          })
          .catch(error => {
            console.error("There was an error creating the evaluacion!", error);
          });
      },
      cancel() {
        this.$router.push({ name: 'evaluaciones.index' });
      }
    }
  }
  </script>
  