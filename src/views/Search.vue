<template>
  <div class="container">
    <h1>Welcome to iReview!</h1>
    <div class="movie-list">
      <div class="movie" v-for="movie in movies">
        <figure class="movie-poster"><img v-bind:src='movie["poster"]' alt="#"></figure>
        <div class="movie-title"><router-link v-bind:to="'/movies/' + movie.id">{{movie["title"]}}</a></router-link></div>
        <p>{{movie["release_date"]}}</p>
      </div>
    </div>
    <!-- <div v-for= "movie in movies">
      <img v-bind:src='movie["poster"]'>
      <p>ID: {{movie["id"]}}</p>
      <p>Title: {{movie["title"]}}</p>
      <router-link v-bind:to="'/movies/' + movie.id">See more info</router-link>
      <p>Release date: {{movie["release_date"]}}</p>
      <p>Ratings: {{movie["rating_count"]}}</p>
      <p>Rating average: {{movie["rating_average"]}}</p>
      <p>Summary: {{movie["summary"]}}</p>
      <hr>
    </div> -->
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
    axios.get('/api/search_movies/' + this.$route.params.query).then(response => {
      this.movies = response.data;
    });
  },
  methods: {}
};
</script>