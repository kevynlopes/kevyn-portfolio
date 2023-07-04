import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SobreView from "../views/SobreView.vue";
import HabilidadesView from "../views/HabilidadesView.vue";
import ProjetosView from "../views/ProjetosView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sobre",
      name: "sobre",
      component: SobreView,
    },
    {
      path: "/habilidades",
      name: "habilidades",
      component: HabilidadesView,
    },
    {
      path: "/projetos",
      name: "projetos",
      component: ProjetosView,
    },
  ],
});

export default router;
