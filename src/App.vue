<template>
  <div id="app">
    <header class="site-header">
        <div class="container">
          <a href="/" id="branding">
            <img src="https://ireview.in.th/wp-content/uploads/2019/01/newLogo_onLight@2x.png" alt="" class="logo">
            <div class="logo-copy">
              <h1 class="site-title">iReview</h1>
              <small class="site-description">Review em' all!</small>
            </div>
          </a> <!-- #branding -->

          <div class="main-navigation">
            <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
            <ul class="menu">
              <li class="menu-item current-menu-item"><a href="movies">Home</a></li>
              <li class="menu-item"><a href="users">Reviews</a></li>
              <li class="menu-item"><a href="signup">Join us!</a></li>
              <li class="menu-item"><a href="login">Log-In</a></li>
              <li class="menu-item"><a href="logout">Log-out</a></li>
            </ul> <!-- .menu -->

            <!-- <form action="#" class="search-form"> -->
              <input type="text" placeholder="Search..." v-model="searchTerm">
              <button v-on:click="searchMovies()"><i class="fa fa-search"></i></button>
            <!-- </form> -->
          </div> <!-- .main-navigation -->

          <div class="mobile-navigation"></div>
        </div>
      </header>
    <router-view/>
    <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <div class="widget">
                <h3 class="widget-title">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempore vitae mollitia nesciunt saepe cupiditate</p>
              </div>
            </div>
            <div class="col-md-2">
              <div class="widget">
                <h3 class="widget-title">Recent Review</h3>
                <ul class="no-bullet">
                  <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Sit amet consecture</a></li>
                  <li><a href="#">Dolorem respequem</a></li>
                  <li><a href="#">Invenore veritae</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <div class="widget">
                <h3 class="widget-title">Help Center</h3>
                <ul class="no-bullet">
                  <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Sit amet consecture</a></li>
                  <li><a href="#">Dolorem respequem</a></li>
                  <li><a href="#">Invenore veritae</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <div class="widget">
                <h3 class="widget-title">Join Us</h3>
                <ul class="no-bullet">
                  <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Sit amet consecture</a></li>
                  <li><a href="#">Dolorem respequem</a></li>
                  <li><a href="#">Invenore veritae</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <div class="widget">
                <h3 class="widget-title">Log-In!</h3>
                <ul class="no-bullet">
                  <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Sit amet consecture</a></li>
                  <li><a href="#">Dolorem respequem</a></li>
                  <li><a href="#">Invenore veritae</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <div class="widget">
                <h3 class="widget-title">Social Media</h3>
                <ul class="no-bullet">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Google+</a></li>
                  <li><a href="#">Pinterest</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <div class="widget">
                <h3 class="widget-title">Newsletter</h3>
                <form action="#" class="subscribe-form">
                  <input type="text" placeholder="Email Address">
                </form>
              </div>
            </div>
          </div> <!-- .row -->

          <div class="colophon">Copyright 2014 Company name, Designed by Themezy. All rights reserved</div>
        </div> <!-- .container -->

      </footer>
  </div>
</template>

<script>
  
  import axios from "axios";

  export default {
    data: function() {
      return {
        searchTerm: ""
      };
    },
    created: function() {
      
    },
    methods: {
      searchMovies: function() {
        this.$router.push("/search_movies/" + this.searchTerm);
      }
    }
  };
</script>
