<script>
export default {
  props: {
    serie: {
      type: Object,
      default: {
        name: "",
        poster_path: "",
        overview: "",
      },
    },
  },
  methods: {
    mostrarserie() {
      alert(this.serie.name);
    },
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <RouterLink :to="`/serie/${serie.id}`">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg bg-green-300 mx-4 my-4"
    >
      <img
        class="w-full h-full"
        :src="getImageUrl(serie.poster_path)"
        alt="Sunset in the mountains"
      />
    </div>
  </RouterLink>
</template>