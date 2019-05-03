<template>
  <div class="root">
    <div v-for="error in errors">
      {{ error }}
    </div>



    <form v-on:submit.prevent="createReview()">
      <p>Rating: <input type="text" v-model="newRating"></p>
      <input type="submit" value="Create review">
    </form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        newRating: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      createReview: function() {
        console.log("review");

        var params = {
          value: this.newRating
        }
        axios.post("api/movies", params).then(response => {
          console.log(response);
          this.$router.push("/movies")
        }).catch(error => {
          console.log(error.response.data.errors)
          this.errors = error.response.data.errors;
        });
      }  
    }
  };
</script>