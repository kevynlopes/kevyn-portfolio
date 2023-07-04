<template>
  <div>
    <transition name="fade" appear>
      <div class="flex flex-col gap-36">
        <hero />
        <about />
        <skills />
      </div>
    </transition>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
export default {
  Hero,
  About,
  Skills,
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
