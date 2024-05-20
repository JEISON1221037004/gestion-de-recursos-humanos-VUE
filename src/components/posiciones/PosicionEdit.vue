<template>
    <div class="container mt-4">
      <h1 class="mb-4">Editar Posición</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" id="nombre" v-model="form.nombre" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <textarea id="descripcion" v-model="form.descripcion" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Actualizar</button>
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
          nombre: '',
          descripcion: ''
        }
      }
    },
    created() {
      this.fetchPosicion();
    },
    methods: {
      fetchPosicion() {
        axios.get(`/posiciones/${this.$route.params.id}`)
          .then(response => {
            this.form = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the posicion!", error);
          });
      },
      submitForm() {
        axios.put(`/posiciones/${this.$route.params.id}`, this.form)
          .then(() => {
            this.$router.push({ name: 'posiciones.index' });
          })
          .catch(error => {
            console.error("There was an error updating the posicion!", error);
          });
      },
      cancel() {
        this.$router.push({ name: 'posiciones.index' });
      }
    }
  }
  </script>
  