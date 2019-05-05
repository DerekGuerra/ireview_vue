<template>
  <div class="user">
   <h1> Welcome, {{users.user}}! </h1>
   <h2>Here are your reviews:</h2>
    {{users.reviews}}
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