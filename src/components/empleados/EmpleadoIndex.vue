<template>
    <div>
      <h1>Lista de Empleados</h1>
      <button @click="createEmpleado">Agregar Empleado</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Fecha de Contratación</th>
            <th>Departamento</th>
            <th>Posición</th>
            <th>Salario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="empleado in empleados" :key="empleado.id">
            <td>{{ empleado.id }}</td>
            <td>{{ empleado.nombre }}</td>
            <td>{{ empleado.apellido }}</td>
            <td>{{ empleado.email }}</td>
            <td>{{ empleado.fecha_contratacion }}</td>
            <td>{{ empleado.departamento.nombre }}</td>
            <td>{{ empleado.posicion.nombre }}</td>
            <td>{{ empleado.salario }}</td>
            <td>
              <button @click="editEmpleado(empleado.id)">Editar</button>
              <button @click="deleteEmpleado(empleado.id)">Eliminar</button>
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
      createEmpleado() {
        this.$router.push({ name: 'empleados.create' });
      },
      editEmpleado(id) {
        this.$router.push({ name: 'empleados.edit', params: { id } });
      },
      deleteEmpleado(id) {
        axios.delete(`/empleados/${id}`)
          .then(() => {
            this.fetchEmpleados();
          })
          .catch(error => {
            console.error("There was an error deleting the empleado!", error);
          });
      }
    }
  }
  </script>
  