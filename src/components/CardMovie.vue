<script>
  export default {
    props: {
      movie: {
        type: Object,
        default: {
          title: 'TETETTETETE',
          poster_path: '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
          overview: 's'
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
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-cyan-700 mx-4 my-4">
  <img class="w-full" :src="getImageUrl(movie.poster_path)" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{movie.title}}</div>
    <p class="text-gray-700 text-base">
      {{movie.overview}}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</template>