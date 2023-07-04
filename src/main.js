import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Skill from "./components/Habilidades/Skill.vue";

import "./assets/tailwind.css";

Vue.component("Hero", Hero);
Vue.component("About", About);
Vue.component("Skills", Skills);
Vue.component("Skill", Skill);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
