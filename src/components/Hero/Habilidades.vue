<template>
  <div
    class="backdrop-blur-md bg-[#020D1D]/30 h-80 rounded-md border-solid border border-sky-500 max-md:items-center"
  >
    <img class="p-2" src="../../assets/icons.png" width="55" alt="icons page" />
    <hr class="opacity-20" />
    <div class="p-4">
      <p class="text-pink-600">{{ dados }}</p>
      <p class="flex ml-3">
        <span class="text-pink-600">{{ titulo.tag }}</span>
        <span class="text-red-500 ml-1">{{ titulo.classKey }}</span>
        <span>{{ titulo.classValue }}</span>
        <span>{{ titulo.value }}</span>
        <span class="text-pink-600">{{ titulo.tagClose }}</span>
      </p>
      <span class="ml-3 text-pink-600">{{ ulOpen }}</span>
      <p
        class="flex ml-8"
        v-for="habilidade in habilidades"
        :key="habilidade.value"
      >
        <span class="text-pink-600">{{ habilidade.tag }}</span>
        <span class="text-green-600 ml-1">{{ habilidade.classKey }}</span>
        <span class="text-yellow-200">{{ habilidade.classValue }}</span>
        <span>{{ habilidade.value }}</span>
        <span class="text-pink-600">{{ habilidade.tagClose }}</span>
      </p>
      <span class="ml-3 text-pink-600">{{ ulClose }}</span>
      <p class="text-pink-600">{{ dados }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ulOpen: "<ul>",
      ulClose: "</ul>",
      dados: "<body>",
      titulo: {
        tag: "<h1>",

        value: "Habilidades",
        tagClose: "</h1>",
      },
      habilidades: [
        {
          tag: "<li ",
          classKey: "class=",
          classValue: "'Intermediario'>",
          value: "HTML5",
          tagClose: "</li>",
        },
        {
          tag: "<li ",
          classKey: "class=",
          classValue: "'Intermediario'>",
          value: "CSS",
          tagClose: "</li>",
        },
        {
          tag: "<li ",
          classKey: "class=",
          classValue: "'Intermediario'>",
          value: "JavaScript",
          tagClose: "</li>",
        },
        {
          tag: "<li ",
          classKey: "class=",
          classValue: "'Intermediario'>",
          value: "Next.Js",
          tagClose: "</li>",
        },
        {
          tag: "<li ",
          classKey: "class=",
          classValue: "'Intermediario'>",
          value: "Vue.Js",
          tagClose: "</li>",
        },
        {
          tag: "<li ",
          classKey: "class=",
          classValue: "'Basico'>",
          value: "C#",
          tagClose: "</li>",
        },
      ],
    };
  },
};
</script>

<style></style>
