<script>
import CardSerie from "../components/CardSerie.vue";
import SeriesAPI from "../api/series.js";
const seriesAPI = new SeriesAPI();

export default {
  components: { CardSerie },
  data() {
    return {
      series: [],
      dramas: [],
      comedias: [],
      acoes: [],
      ficcoes: [],
    };
  },
  async created() {
    this.series = await seriesAPI.getPopular();
    this.dramas = await seriesAPI.getDrama();
    this.comedias = await seriesAPI.getComedia();
    this.acoes = await seriesAPI.getAcao();
    this.ficcoes = await seriesAPI.getFiccao();
  },
};
</script>

<template>
  <main class="flex flex-column p-50">
    <div>
      <h1 class="text-green-300 font-bold pb-4">Drama</h1>
      <div class="flex flex-wrap">
        <CardSerie
          v-for="serie of dramas.slice(0, 4)"
          :key="serie.id"
          :serie="serie"
        />
      </div>
    </div>
    <div>
      <h1 class="text-green-300 font-bold pb-4">Comédia</h1>
      <div class="flex flex-wrap">
        <CardSerie
          v-for="serie of comedias.slice(0, 4)"
          :key="serie.id"
          :serie="serie"
        />
      </div>
    </div>
    <div>
      <h1 class="text-green-300 font-bold pb-4">Ações</h1>
      <div class="flex flex-wrap">
        <CardSerie
          v-for="serie of acoes.slice(0, 4)"
          :key="serie.id"
          :serie="serie"
        />
      </div>
    </div>
    <div>
      <h1 class="text-green-300 font-bold pb-4">Ficção Científica</h1>
      <div class="flex flex-wrap">
        <CardSerie
          v-for="serie of ficcoes.slice(0, 4)"
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