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
    const res = await axios.get(`https://api.theseriedb.org/3/tv/${this.id}?api_key=81c14ff45faa24817f29db18e13bf3b0&language=pt-BR`)
    this.serie = res.data
  }

}
</script>

<template>
  <div class="bg-yellow-500">
    <img class="object-cover w-full md:h-auto md:w-48 " :src="getImageUrl(serie.poster_path)" alt="">
    <div class="justify-between p-4 leading-normal align-content-left"> 
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ serie.title }}</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ serie.overview }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Gêneros: {{ serie.genres }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Titulo Original: {{ serie.original_title }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Data de Lançamento: {{ serie.release_date }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Duração: {{ serie.runtime }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nota: {{ serie.vote_average }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Produtora: {{ serie.production_companies }}</p>
    </div>
</div>
</template>