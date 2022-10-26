<script>
  import CardMovie from "../components/CardMovie.vue";
  import MoviesAPI from "../api/movies.js"
  import CardSerie from "../components/CardSerie.vue"
  const moviesAPI = new MoviesAPI

  export default {
    components: { CardMovie },
    data() {
        return {
            filmes:[]
        }
    },
    async created() {
        this.filmes =  await moviesAPI.getPopular()
    }
  };
</script>

<template>
  <main>

    <CardMovie v-for="filme of filmes.slice(0, 8)" :key="filme.id" :movie="filme" />

  </main>
</template>

<style>
  body {
    background-color: #000;
  }
  header {
    height: 15%;
    width: 100%;
  }
  main {
    height: 70%;
    display: flex;
    padding: 50px;
  }
</style>