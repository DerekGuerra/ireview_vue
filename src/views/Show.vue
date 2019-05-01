<template>
  <div class="container">
    <h1>Movie Details</h1>
     <p><b>ID:</b> {{movie.movie_id}}</p>
     <p><b>Title:</b> {{movie.title}}</p>
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