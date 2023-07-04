<template>
  <div
    class="flex justify-center lg:mb-64 gap-8 items-center max-lg:flex-col px-4"
  >
    <sobre />
    <div class="relative sm:w-[500px] flex flex-col gap-4">
      <habilidades />
      <alert />
    </div>
  </div>
</template>

<script>
import Habilidades from "./Hero/Habilidades.vue";
import Sobre from "./Hero/Sobre.vue";
import Alert from "./Hero/Alert.vue";
export default {
  components: { Sobre, Habilidades, Alert },
  name: "Hero",
};
</script>

<style></style>
