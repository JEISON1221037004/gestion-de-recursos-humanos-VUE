<template>
    <div class="container mt-4">
      <h1 class="mb-4">Agregar Nuevo Registro de Salario</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="empleado_id" class="form-label">Empleado</label>
          <select id="empleado_id" v-model="form.empleado_id" class="form-control" required>
            <option v-for="empleado in empleados" :key="empleado.id" :value="empleado.id">{{ empleado.nombre }} {{ empleado.apellido }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="salario" class="form-label">Salario</label>
          <input type="number" id="salario" v-model="form.salario" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="fecha_inicio" class="form-label">Fecha de Inicio</label>
          <input type="date" id="fecha_inicio" v-model="form.fecha_inicio" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="fecha_fin" class="form-label">Fecha de Fin</label>
          <input type="date" id="fecha_fin" v-model="form.fecha_fin" class="form-control">
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
          salario: '',
          fecha_inicio: '',
          fecha_fin: ''
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
        axios.post('/historial_salarios', this.form)
          .then(() => {
            this.$router.push({ name: 'historial_salarios.index' });
          })
          .catch(error => {
            console.error("There was an error creating the historial de salario!", error);
          });
      },
      cancel() {
        this.$router.push({ name: 'historial_salarios.index' });
      }
    }
  }
  </script>
  