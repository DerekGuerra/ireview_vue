<template>
  <div class="genres">
    <h1>inside the genres list</h1>
    <div v-for="genre in genres">
      <p><router-link v-bind:to="'/genres/movies/' + genre.id">{{genre.name}}</router-link></p>
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
      axios.get("/api/movies/genres").then(response => {
        this.genres = response.data;
      });
    },
  }
</script>

<style>
  .genres{
    text-align: center;
  }
</style>
