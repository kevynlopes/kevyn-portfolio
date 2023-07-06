<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="blur-2xl opacity-70 inset-0 absolute -z-50">
      <div
        class="fundo w-1/3 aspect-square absolute -bottom-1/2 -translate-x-1/2 left-1/2"
      ></div>
      <div
        class="fundo2 w-1/3 aspect-square absolute -bottom-1/3 -translate-x-1/2 left-1/3"
      ></div>
      <div
        class="fundo3 w-1/3 aspect-square absolute bottom-0 translate-y-40 -translate-x-1/2 left-1/2"
      ></div>
      <div class="fundo w-1/3 aspect-square absolute -top-40 right-0"></div>
      <div
        class="fundo w-1/3 aspect-square absolute -bottom-[1000px] left-[300px]"
      ></div>

      <div
        class="fundo2 w-1/3 aspect-square absolute -bottom-[1800px] -translate-x-1/2 left-1/3"
      ></div>
      <div
        class="fundo3 w-1/3 aspect-square absolute -bottom-[1900px] translate-y-40 -translate-x-1/2 left-1/2"
      ></div>
      <div
        class="fundo w-1/3 aspect-square absolute -bottom-[1800px] right-[500px]"
      ></div>
      <div
        class="fundo2 w-1/3 aspect-square absolute -bottom-[4800px] -translate-x-1/2 left-1/3"
      ></div>
      <div
        class="fundo3 w-1/3 aspect-square absolute -bottom-[3900px] right-40"
      ></div>
      <div
        class="fundo2 w-1/3 aspect-square absolute -bottom-[3900px] right-96"
      ></div>
      <div
        class="fundo w-1/3 aspect-square absolute -bottom-[4800px] right-[100px]"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
