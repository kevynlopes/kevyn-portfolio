<template>
  <div
    class="flex-none bg-[#020D1D] p-5 rounded-lg hover:scale-110 transition cursor-pointer"
  >
    <img :src="imagemUrl" alt="imagem" width="30" />
  </div>
</template>

<script>
export default {
  props: {
    imagemUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
