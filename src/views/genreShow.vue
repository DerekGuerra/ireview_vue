<template>
  <div class="genres">
    <div v-for="movie in genres.results">
      <p>{{movie.title}}</p>
      <p><img v-bind:src="movie.poster"></p>
    </div>
  </div>
</template>




<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        genres: {}
      };
    },
    created: function() {
      axios.get('/api/movies/genres/' + this.$route.params.id).then(response => {
        this.genres = response.data;
      });
    },
  }
</script>