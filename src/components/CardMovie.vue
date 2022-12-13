<script>
export default {
  props: {
    movie: {
      type: Object,
      default: {
        title: '',
        poster_path: '',
        overview: ''
      }
    },
  },
  methods: {
    mostrarmovie() {
      alert(this.movie.title);
    },
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <RouterLink :to="`/movie/${movie.id}`">
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-300 mx-4 my-4">
      <img class="w-full" :src="getImageUrl(movie.poster_path)" alt="Sunset in the mountains">
    </div>
  </RouterLink>
</template>