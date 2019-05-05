import Vue from 'vue';
import Router from 'vue-router';
import Movies from './views/Movies.vue';
import Show from './views/Show.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Search from './views/Search.vue'
import Logout from './views/Logout.vue'
import Users from './views/Users.vue'
import Review from './views/Review.vue'



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/search_movies/:query',
      name: 'search_movies',
      component: Search
    },
    {
      path: '/movies/:movie_id',
      name: 'Show',
      component: Show
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/review/:movie_id',
      name: 'review',
      component: Review
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
