import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Skill from "./components/Habilidades/Skill.vue";
import Projects from "./components/Projects.vue";
import Project from "./components/Projeto/Project.vue";
import Frameworks from "./components/Projeto/Frameworks.vue";
import LinkGit from "./components/Projeto/LinkGit.vue";

import "./assets/tailwind.css";

Vue.component("Hero", Hero);
Vue.component("About", About);
Vue.component("Skills", Skills);
Vue.component("Skill", Skill);
Vue.component("Projects", Projects);
Vue.component("Project", Project);
Vue.component("Frameworks", Frameworks);
Vue.component("LinkGit", LinkGit);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
