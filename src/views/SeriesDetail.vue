<script>
import axios from 'axios'
export default {
  props: ['id'],
  data() {
    return {
      serie: {}
    }
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
  async created() {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${this.id}?api_key=81c14ff45faa24817f29db18e13bf3b0&language=pt-BR`)
    this.serie = res.data
  }

}
</script>

<template>
<div class="place-self-center">
  <div class="flex flex-col place-self-center bg-green-300 shadow-md md:flex-row w-3/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full h-96 md:h-full md:w-96" :src="getImageUrl(serie.poster_path)" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{serie.name}}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-600">{{serie.overview}}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">Título Original: {{ serie.original_name }}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">Data de Lançamento: {{serie.first_air_date}}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">Episódios: {{serie.number_of_episodes}}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">Avaliação:{{serie.vote_average}}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">Produtoras: {{serie.production_companies}}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">Gêneros: {{serie.genres}}</p>

      </div>
  </div>
</div>
</template>