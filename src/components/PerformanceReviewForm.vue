<template>
    <div>
      <h1>Add New Performance Review</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="employee">Employee:</label>
          <input type="text" v-model="review.employee" id="employee" required>
        </div>
        <div>
          <label for="comments">Comments:</label>
          <textarea v-model="review.comments" id="comments" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PerformanceReviewForm',
    data() {
      return {
        review: {
          employee: '',
          comments: ''
        }
      };
    },
    methods: {
      submitForm() {
        axios.post('/api/performance-reviews', this.review)
          .then(response => {
            alert('Performance review added successfully');
            this.review.employee = '';
            this.review.comments = '';
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del componente */
  </style>
  