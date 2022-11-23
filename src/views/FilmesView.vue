<script>
  import CardMovie from "../components/CardMovie.vue";
  import MoviesAPI from "../api/movies.js"
  const moviesAPI = new MoviesAPI


  export default {
    components: { CardMovie },
    data() {
      return {
        filmes:[],
        acoes:[],
        comedias: [],
      }
    },
    async created() {
      this.filmes =  await moviesAPI.getAcoes();
      this.acoes =  await moviesAPI.getAcoes();
      this.comedias =  await moviesAPI.getComedias();
    },
  };
</script>

<template>
  <main class="flex flex-column p-50">
  <div>
    <h1 class="text-yellow-500 font-bold pb-4">Ação</h1>
    <div class="flex flex-wrap">
      <CardMovie v-for="filme of acoes.slice(0, 4)" :key="filme.id" :movie="filme" />
    </div>
  </div>
  <div>
    <h1 class="text-yellow-500 font-bold pb-4">Comédia</h1>
    <div class="flex flex-wrap">
      <CardMovie v-for="filme of comedias.slice(0, 4)" :key="filme.id" :movie="filme" />
    </div>
  </div>
  <div>
    <h1 class="text-yellow-500 font-bold pb-4">Romance</h1>
    <div class="flex flex-wrap">
      <CardMovie v-for="filme of filmes.slice(8, 12)" :key="filme.id" :movie="filme" />
    </div>
  </div>
  <div>
    <h1 class="text-yellow-500 font-bold pb-4">Ficção Científica</h1>
    <div class="flex flex-wrap">
      <CardMovie v-for="filme of filmes.slice(12, 16)" :key="filme.id" :movie="filme" />
    </div>
  </div>



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
  }
</style>