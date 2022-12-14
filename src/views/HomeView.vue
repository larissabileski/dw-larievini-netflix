<script>
import CardMovie from "../components/CardMovie.vue";
import MoviesAPI from "../api/movies.js";
import CardSerie from "../components/CardSerie.vue";
import SeriesAPI from "../api/series.js";
const moviesAPI = new MoviesAPI();
const seriesAPI = new SeriesAPI();

export default {
  components: { CardMovie, CardSerie },
  data() {
    return {
      filmes: [],
      series: [],
    };
  },
  async created() {
    (this.filmes = await moviesAPI.getPopular()),
      (this.series = await seriesAPI.getPopular());
  },
};
</script>

<template>
  <main class="flex flex-column p-50">
    <div>
      <h1 class="text-green-300 font-bold pb-4">Filmes</h1>
      <div class="flex flex-wrap">
        <CardMovie
          v-for="filme of filmes.slice(0, 8)"
          :key="filme.id"
          :movie="filme"
        />
      </div>
    </div>
    <div>
      <h1 class="text-green-300 font-bold py-4">Séries</h1>
      <div class="flex flex-wrap">
        <CardSerie
          v-for="serie of series.slice(0, 8)"
          :key="serie.id"
          :serie="serie"
        />
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