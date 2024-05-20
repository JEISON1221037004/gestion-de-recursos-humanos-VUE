<template>
    <div>
      <h1>Editar Empleado</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="form.nombre" required>
        </div>
        <div>
          <label for="apellido">Apellido</label>
          <input type="text" id="apellido" v-model="form.apellido" required>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div>
          <label for="fecha_contratacion">Fecha de Contratación</label>
          <input type="date" id="fecha_contratacion" v-model="form.fecha_contratacion" required>
        </div>
        <div>
          <label for="departamento_id">Departamento</label>
          <select id="departamento_id" v-model="form.departamento_id" required>
            <option v-for="departamento in departamentos" :key="departamento.id" :value="departamento.id">{{ departamento.nombre }}</option>
          </select>
        </div>
        <div>
          <label for="posicion_id">Posición</label>
          <select id="posicion_id" v-model="form.posicion_id" required>
            <option v-for="posicion in posiciones" :key="posicion.id" :value="posicion.id">{{ posicion.nombre }}</option>
          </select>
        </div>
        <div>
          <label for="salario">Salario</label>
          <input type="number" id="salario" v-model="form.salario" required>
        </div>
        <button type="submit">Actualizar</button>
        <button @click="cancel">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from '../../axios';
  
  export default {
    data() {
      return {
        form: {
          nombre: '',
          apellido: '',
          email: '',
          fecha_contratacion: '',
          departamento_id: '',
          posicion_id: '',
          salario: ''
        },
        departamentos: [],
        posiciones: []
      }
    },
    created() {
      this.fetchDepartamentos();
      this.fetchPosiciones();
      this.fetchEmpleado();
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
      fetchPosiciones() {
        axios.get('/posiciones')
          .then(response => {
            this.posiciones = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the posiciones!", error);
          });
      },
      fetchEmpleado() {
        axios.get(`/empleados/${this.$route.params.id}`)
          .then(response => {
            this.form = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the empleado!", error);
          });
      },
      submitForm() {
        axios.put(`/empleados/${this.$route.params.id}`, this.form)
          .then(() => {
            this.$router.push({ name: 'empleados.index' });
          })
          .catch(error => {
            console.error("There was an error updating the empleado!", error);
          });
      },
      cancel() {
        this.$router.push({ name: 'empleados.index' });
      }
    }
  }
  </script>
  