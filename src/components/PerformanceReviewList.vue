<template>
    <div>
      <h1>Performance Review List</h1>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          {{ review.employee }} - {{ review.comments }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PerformanceReviewList',
    data() {
      return {
        reviews: []
      };
    },
    methods: {
      fetchReviews() {
        axios.get('/api/performance-reviews')
          .then(response => {
            this.reviews = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    mounted() {
      this.fetchReviews();
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del componente */
  </style>
  