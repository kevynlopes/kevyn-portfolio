<template>
  <div class="flex flex-col items-center gap-4">
    <h4 class="text-2xl font-semibold text-center">{{ titulo }}</h4>
    <p class="font-semibold text-[#fffe] w-1/2 max-sm:w-60">{{ desc }}</p>

    <img
      class="rounded-lg w-96 border-2 border-solid border-[#fff] hover:scale-105 transition cursor-pointer"
      :src="imagem"
      alt="Imagem"
    />
    <p>{{ titulo }}</p>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    imagem: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
};
</script>
