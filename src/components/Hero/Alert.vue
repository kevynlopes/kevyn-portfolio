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
        Eu sou <span class="text-[#095CE0]">Kevyn Lopes</span> um desenvolvedor
        <span class="font-bold">FullStack</span>, com experiência nas principais
        ferramentas como
        <span class="font-bold">React.js, Vue.js e C#.</span>
        Minha paixão é criar soluções inovadoras e escaláveis usando essas
        tecnologias poderosas. Estou sempre em busca de novos desafios para
        aprimorar minhas habilidades e entregar resultados excepcionais.
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
