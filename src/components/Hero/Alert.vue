<template>
  <transition name="slide-fade">
    <div
      v-if="show"
      class="flex flex-col max-sm:h-80 p-4 bg-[#020D1D] border border-sky-500 rounded-lg z-50 lg:absolute sm:-right-0 -bottom-4 teste:bottom-10 lg:translate-y-full teste:translate-x-1/3 animate-pulse"
    >
      <button class="flex justify-end font-bold" @click="exit">x</button>
      alert {
      <br />
      <p>
        Seja Bem vindo ao meu site, eu me chamo
        <span class="text-[#095CE0]">Kevyn Lopes</span>, Sou um apaixonado por
        tecnologia e as áreas em que ela se ramifica, sou muito curioso, quando
        descubro algo novo quero destrinchar tudo aquilo e utilizar a minha
        criatividade para usar de diferentes formas.
      </p>

      }
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    exit() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transition: 0.1s;
  opacity: 0;
}
</style>
