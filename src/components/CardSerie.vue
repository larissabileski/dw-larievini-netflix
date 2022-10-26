<script>
  export default {
    props: {
      serie: {
        type: Object,
        default: {
          title: 'TETETTETETE',
          poster_path: '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
          overview: 's'
        }
      },
    },
    methods: {
      mostrarserie() {
        alert(this.serie.title);
      },
      getImageUrl(poster_path) {
        return `https://image.tmdb.org/t/p/w500${poster_path}`;
      },
    },
  };
  </script>
<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-500 mx-4 my-4">
  <img class="w-full" :src="getImageUrl(serie.poster_path)" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{serie.title}}</div>
    <p class="text-gray-700 text-base">
      {{serie.overview}}
    </p>
  </div>
</div>
</template>