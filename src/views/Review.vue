<template>
  <div class="root">
    <div v-for="error in errors">
      {{error}}
    </div>

    <form v-on:submit.prevent="makeReview()">
      Rating: <p><input type="text" v-model="newRating"></p>
      <label for="comment">Comment:</label>
      <p><textarea class="form-control" rows="5" id="comment" type="text" v-model="newComment"></textarea></p>
      <p><input type="submit" value="Make a new review"></p>
    </form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        newRating: "",
        newComment: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      makeReview: function() {
        var params = {
          rating: this.newRating,
          comment: this.newComment,
          movie_id: this.$route.params.movie_id
        }

        axios.post("/api/movies", params).then(response => {
          console.log(response);
          this.$router.push("/users")
        }).catch(error => {
          console.log(error.response.data.errors)
          this.errors = error.response.data.errors;
        });
      }
    }
  };
</script>

<style>
  .root {
    text-align: center;
  }
</style>