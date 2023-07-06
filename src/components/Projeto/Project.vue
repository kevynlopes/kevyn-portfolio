<template>
  <div class="flex-none hover:scale-125 transition cursor-pointer">
    <img :src="imagem" alt="Imagem" width="300px" />
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
  },
};
</script>
