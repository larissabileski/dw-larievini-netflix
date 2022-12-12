import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FilmesView from "../views/FilmesView.vue";
import SeriesView from "../views/SeriesView.vue";
import FilmesDetailView from "../views/FilmesDetail.vue";
import SeriesDetailView from "../views/SeriesDetail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movies",
      name: "movies",
      component: FilmesView,
    },
    {
      path: "/series",
      name: "series",
      component: SeriesView,
    },
    {
      path: "/movie/:id",
      name: "MovieDetail",
      component: FilmesDetailView,
      props: true,
    },
    {
      path: "/serie/:id",
      name: "SerieDetail",
      component: SeriesDetailView,
      props: true,
    }
  ],
});
export default router;
