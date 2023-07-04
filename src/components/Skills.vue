<template>
  <div class="flex flex-col gap-12 px-[10vw]">
    <h3 class="text-3xl font-bold">Habilidades</h3>
    <div class="flex gap-8">
      <skill />
      <skill />
      <skill />
      <skill />
    </div>
  </div>
</template>

<script>
import Skill from "./Habilidades/Skill.vue";
export default {
  name: "Skills",
  component: Skill,
};
</script>

<style></style>
