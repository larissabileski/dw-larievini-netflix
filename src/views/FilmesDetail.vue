<script>
import axios from 'axios'
export default {
  props: ['id'],
  data() {
    return {
      movie: {}
    }
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
  async created() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=4fdcb83a70141996aa81c40fd83651b9&language=pt-BR`)
    this.movie = res.data
  }

}
</script>

<template>
  <div class="bg-yellow-500">
    <img class="object-cover w-full md:h-auto md:w-48 " :src="getImageUrl(movie.poster_path)" alt="">
    <div class="justify-between p-4 leading-normal align-content-left"> 
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ movie.title }}</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ movie.overview }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Gêneros: {{ movie.genres }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Titulo Original: {{ movie.original_title }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Data de Lançamento: {{ movie.release_date }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Duração: {{ movie.runtime }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nota: {{ movie.vote_average }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Produtora: {{ movie.production_companies }}</p>
    </div>
</div>
</template>