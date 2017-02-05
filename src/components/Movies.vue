<template>
    <div class="card">
      <section id="movie-showing">
        <header>
          <h2>影院热映</h2>
          <router-link to="/movie/in_theaters">更多</router-link>
        </header>
        <div class="section-content">
          <List :items="showing"></List>
        </div>
      </section>

      <section id="movie-coming-soon">
        <header>
          <h2>即将上映</h2>
          <router-link to="/movie/coming_soon">更多</router-link>
        </header>
        <div class="section-content">
          <List :items="comming"></List>
        </div>
      </section>

      <section id="movie-latest">
        <header>
          <h2>Top250</h2>
          <router-link to="/movie/top250">更多</router-link>
        </header>
        <div class="section-content">
          <List :items="top"></List>
        </div>
      </section>

    </div>
</template>

<script>
  /* eslint-disable */
  import List from './List.vue';

  export default {
    name: 'movies',
    components: { List },
    data() {
      return {
        showing: [],
        comming: [],
        top: [],
      };
    },
    created() {
      this.getAllMovies();
    },
    methods: {
      getAllMovies() {
        this.getShowingMovies();
        this.getComingSoonMovies();
        this.getTopMovies();
      },
      getShowingMovies() {
        this.$axios.get('/v2/movie/in_theaters')
            .then(response => this.showing = this.sliceMoviesFromResponse(response));
      },
      getComingSoonMovies() {
        this.$axios.get('/v2/movie/coming_soon')
            .then(response => this.comming = this.sliceMoviesFromResponse(response));
      },
      getTopMovies() {
        this.$axios.get('/v2/movie/top250')
            .then(response => this.top = this.sliceMoviesFromResponse(response));
      },
      sliceMoviesFromResponse(response, offset = 8) {
          return response.data.subjects.slice(0, offset);
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/styles/_common.scss';
</style>
