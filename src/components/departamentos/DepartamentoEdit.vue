<template>
    <div class="container mt-4">
      <h1 class="mb-4">Editar Departamento</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" id="nombre" v-model="form.nombre" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="ubicacion" class="form-label">Ubicación</label>
          <input type="text" id="ubicacion" v-model="form.ubicacion" class="form-control" required>
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
          ubicacion: ''
        }
      }
    },
    created() {
      this.fetchDepartamento();
    },
    methods: {
      fetchDepartamento() {
        axios.get(`/departamentos/${this.$route.params.id}`)
          .then(response => {
            this.form = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the departamento!", error);
          });
      },
      submitForm() {
        axios.put(`/departamentos/${this.$route.params.id}`, this.form)
          .then(() => {
            this.$router.push({ name: 'departamentos.index' });
          })
          .catch(error => {
            console.error("There was an error updating the departamento!", error);
          });
      },
      cancel() {
        this.$router.push({ name: 'departamentos.index' });
      }
    }
  }
  </script>
  