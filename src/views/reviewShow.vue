<template>
  <div class ="container">
    <h1>Review Detail</h1>
    <p><b>ID:</b> {{review.id}}</p>
    <p><b>Movie ID: </b><router-link v-bind:to="'/movies/' + review.movie_id">{{review.movie_id}}</router-link></p>
    <p><b>Comment:</b> {{review.comment}}</p>
    <p><b>Rating:</b> {{review.rating}}</p>
    <p><button v-on:click="deleteReview()">Delete Review</button></p> 
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        review: {}
      };
    },

    created: function() {
      axios.get('api/users/' + this.$route.params.id).then(response => {
        this.review = response.data;
      });
    },
    methods: {
      deleteReview: function() {
        console.log('Deleting the review...')
        axios.delete('/api/users/' + this.$route.params.id).then(response => {
          this.$router.push('/users');
        });
      }
    }
  };
</script>