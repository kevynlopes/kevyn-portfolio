<template>
  <div class="px-[10vw]">
    <div class="flex justify-center max-lg:flex-col items-center">
      <Imagem />
      <AboutMe />
    </div>
  </div>
</template>

<script>
import AboutMe from "./About/AboutMe.vue";
import Imagem from "./About/Imagem.vue";
export default {
  name: "About",
  components: { AboutMe, Imagem },
};
</script>

<style></style>
