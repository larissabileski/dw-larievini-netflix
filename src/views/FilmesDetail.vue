<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      movie: {},
    };
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
  async created() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.id}?api_key=4fdcb83a70141996aa81c40fd83651b9&language=pt-BR`
    );
    this.movie = res.data;
  },
};
</script>

<template>
  <div class="place-self-center">
    <div
      class="flex flex-col place-self-center bg-green-300 shadow-md md:flex-row w-3/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full h-96 md:h-full md:w-96"
        :src="getImageUrl(movie.poster_path)"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ movie.title }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-600">
          {{ movie.overview }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">
          Título Original: {{ movie.original_title }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">
          Data de Lançamento: {{ movie.release_date }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">
          Duração: {{ movie.runtime }} minutos
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">
          Avaliação:{{ movie.vote_average }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">
          Produtoras:
          <span
            v-for="production_companies of movie.production_companies"
            :key="production_companies.id"
          >
            {{ production_companies.name }} |
          </span>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-600 self-start">
          Gêneros:
          <span v-for="genre of movie.genres" :key="genre.id">
            {{ genre.name }} |
          </span>
        </p>
      </div>
    </div>
  </div>
</template>