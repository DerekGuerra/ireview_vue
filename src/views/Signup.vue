<template>
  <div class="signnup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{errors}}</li>
        </ul>
        <div class="form-group">
          <p><label>First Name:</label></p>
          <input type="text" class ="form-control" v-model="first_name">
        </div>
        <p><div class="form-group"></p>
          <p><label>Last Name:</label></p>
          <input type="text" class ="form-control" v-model="last_name">
        </div>
        <p><div class="form-group"></p>
          <p><label>Email:</label></p>
          <input type="email" class ="form-control" v-model="email">
        </div>
        <p><div class="form-group"></p>
          <p><label>Password:</label></p>
          <input type="password" class ="form-control" v-model="password">
        </div>
        <p><div class="form-group"></p>
          <p><label>Password Confirmation:</label></p>
          <input type="password" class ="form-control" v-model="passwordConfirmation">
        </div>
        <p></p>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
      <hr>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
      };
    },
    methods: {
      submit: function() {
        var params = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
        };
        axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
      }
    }
  };
</script>

<style>
  .signnup {
    text-align: center;
  }
</style>