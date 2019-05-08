<template>
  <div class="home">
    <h1>Welcome to iReview!</h1>
    <main class="main-content">
        <div class="container">
          <div class="page">
            <div class="breadcrumbs">
              <a href="movies">Home</a>
              <span>Movie Review</span>
            </div>

            <div class="filters">
              <select name="#" id="#" placeholder="Choose Category">
                <option value="#">Action</option>
                <option value="#">Drama</option>
                <option value="#">Fantasy</option>
                <option value="#">Horror</option>
                <option value="#">Adventure</option>
              </select>
              <select name="#" id="#">
                <option value="#">2012</option>
                <option value="#">2013</option>
                <option value="#">2014</option>
              </select>
            </div>
            <div class="movie-list">
              <div class="movie" v-for="movie in movies">
                <figure class="movie-poster"><img v-bind:src='movie["poster"]' alt="#"></figure>
                <div class="movie-title"><router-link v-bind:to="'/movies/' + movie.id">{{movie["title"]}}</a></router-link></div>
                <p>{{movie["release_date"]}}</p>
              </div>
            </div> <!-- .movie-list -->

            <div class="pagination">
              <a href="#" class="page-number prev"><i class="fa fa-angle-left"></i></a>
              <span class="page-number current">1</span>
              <a href="#" class="page-number">2</a>
              <a href="#" class="page-number">3</a>
              <a href="#" class="page-number">4</a>
              <a href="#" class="page-number">5</a>
              <a href="#" class="page-number next"><i class="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div> <!-- .container -->
      </main>
    <!-- <div v-for= "movie in movies">
      <img v-bind:src='movie["poster"]'>
      <p>ID: {{movie["id"]}}</p>
      <p>Title: {{movie["title"]}}</p>
      <p>Release date: {{movie["release_date"]}}</p>
      <p>Ratings: {{movie["rating_count"]}}</p>
      <p>Rating average: {{movie["rating_average"]}}</p>
     <router-link v-bind:to="'/movies/' + movie.id">See more info</router-link>
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
    axios.get("/api/movies/").then(response => {
      this.movies = response.data;
    });
  },
  methods: {}
};
</script>