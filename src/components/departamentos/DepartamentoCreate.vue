<template>
    <div class="container mt-4">
      <h1 class="mb-4">Agregar Nuevo Departamento</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" id="nombre" v-model="form.nombre" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="ubicacion" class="form-label">Ubicación</label>
          <input type="text" id="ubicacion" v-model="form.ubicacion" class="form-control" required>
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
          nombre: '',
          ubicacion: ''
        }
      }
    },
    methods: {
      submitForm() {
        axios.post('/departamentos', this.form)
          .then(() => {
            this.$router.push({ name: 'departamentos.index' });
          })
          .catch(error => {
            console.error("There was an error creating the departamento!", error);
          });
      },
      cancel() {
        this.$router.push({ name: 'departamentos.index' });
      }
    }
  }
  </script>
  