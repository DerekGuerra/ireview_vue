<template>
  <div class="home">
    <h1>Welcome to iReview!</h1>
    <div v-for= "movie in movies">
      <img v-bind:src='movie["poster"]'>
      <p>ID: {{movie["id"]}}</p>
      <p>Title: {{movie["title"]}}</p>
      <p>Release date: {{movie["release_date"]}}</p>
      <p>Ratings: {{movie["rating_count"]}}</p>
      <p>Rating average: {{movie["rating_average"]}}</p>
      <p>Summary: {{movie["summary"]}}</p>
      <hr>
    </div>
  </div>
</template>

<style>
  img {
    width: 250px;
    height: 250px;
  }

</style>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      movies: []
    };
  },
  created: function() {
    axios.get("/api/movies/").then(response => {
      this.movies = response.data;
    });
  },
  methods: {}
};
</script>