import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FilmesView from "../views/FilmesView.vue";
import DocumentariosView from "../views/DocumentariosView.vue";

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
        path: "/documentarios",
        name: "documentarios",
        component: DocumentariosView,
    },
  ],
});

export default router;