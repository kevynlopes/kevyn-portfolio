<template>
  <div
    class="flex-none backdrop-blur-md bg-[#020D1D]/30 w-[290px] h-60 rounded-md border-solid border border-sky-500"
  >
    <img class="p-2" src="../../assets/icons.png" width="55" alt="icons page" />
    <hr class="opacity-20" />
    <div class="flex flex-col place-items-center p-2">
      <img src="../../assets/kevyn.jpeg" width="150" alt="kevyn" />
      <p>
        <span>{{ arrow }}</span>
        <span class="text-[#095CE0]">{{ image }}</span>
        <span>{{ arrowR }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrow: "<",
      arrowR: ">",
      image: "image",
    };
  },
};
</script>

<style></style>
