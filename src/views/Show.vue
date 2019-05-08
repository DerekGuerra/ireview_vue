<template>
  <div class="container">
    <main class="main-content">
        <div class="container">
          <div class="page">
            <div class="breadcrumbs">
              <a href="/movies">Home</a>
              <span>{{movie["title"]}}</span>
            </div>

            <div class="content"">
              <div class="row">
                <div class="col-md-6">
                  <figure class="movie-poster"><img v-bind:src='movie["poster"]' alt="#"></figure>
                </div>
                <div class="col-md-6">
                  <h2 class="movie-title">{{movie["title"]}}</h2>
                  <p><router-link v-bind:to="'/review/' + movie.movie_id">Make a review</router-link></p>
                  <div class="movie-summary">
                    <p>{{movie["tagline"]}} </p>

                    <p>{{movie["summary"]}}</p>
                  </div>
                  <ul class="movie-meta">
                    <li><strong>Rating:</strong> 
                      {{movie["vote_average"]}}
                    </li>
                    <li><strong>Length:</strong> {{movie["runtime"]}}m</li>
                    <li><strong>Premiere:</strong> {{movie["release_date"]}}</li>
                    <li v-for="genre in movie.genres"><strong>Category:</strong> {{genre.genre}}</li>
                  </ul>
                </div>
              </div> <!-- .row -->
              <h2>Reviews:</h2>
              <div class="entry-content" v-for="review in movie.reviews">
                <p><strong>User: {{review.author}}</strong></p>
                <p>{{review.content}}</p>
              </div>
            </div>
          </div>
        </div> <!-- .container -->
    </main>
   <!--  <h1>Movie Details</h1>
     <p><b>ID:</b> {{movie.movie_id}}</p>
     <p><b>Title:</b> {{movie.title}}</p>
     <p><router-link v-bind:to="'/review/' + movie.movie_id">Make a review</router-link></p>
     <p><img v-bind:src='movie.poster'></p>
     <p><b>Tagline:</b> {{movie.tagline}}</p>
     <p><b>Movie Homepage:</b> {{movie.movie_homepage}}</p>
     <p><b>Summary:</b> {{movie.summary}}</p>
     <p><b>Runtime:</b> {{movie.runtime}}</p>
     <p><b>Status:</b> {{movie.status}}</p>
     <p><b>Vote Count:</b> {{movie.vote_count}}</p>
     <p><b>Vote Average:</b> {{movie.vote_average}}</p>
     <p><b>Popularity:</b> {{movie.popularity}}</p>
     <p><b>Revenue:</b> {{movie.revenue}}</p>
      <h2>Reviews:</h2>
     <div v-for="review in movie.reviews">
        <p>{{review.author}}</p>
        <p>{{review.content}}</p>
     </div> -->

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        movie: {}
      };
    }, 

  created: function () {
    axios.get('api/movies/' + this.$route.params.movie_id).then(response => {
      this.movie = response.data;
    });
  }
}
</script>

<style>
  
  img {
    width: 550px;
    height: 500px;
  }
</style>