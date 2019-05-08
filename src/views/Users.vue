<template>
  <div class="user">
   <h1> Welcome, {{users.user}}! </h1>
   <h2>Here are your reviews:</h2>
    <div v-for="review in users.reviews">
      <p><b>{{review.id}}</b></p>
      <p><b>Movie: </b>{{review.movie_id}}</p> 
      <p><router-link v-bind:to="'/users/' + review.id">See details</router-link></p>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        users: []
      };
    },
    created: function() {
      axios.get("/api/users").then(response => {
        this.users = response.data;
      });
    }
  }
</script>