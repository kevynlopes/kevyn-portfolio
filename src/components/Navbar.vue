<template>
  <div>
    <nav
      class="flex justify-between px-48 p-12 text-white font-semibold mb-12 max-md:px-4 max-md:flex-col max-md:gap-4"
    >
      <div class="z-50">
        <h1 class="font-bold text-2xl">
          < Kevyn <span class="text-[#095CE0]">Lopes</span>/>
        </h1>
      </div>
      <ul class="flex gap-8 z-40">
        <router-link class="hover:scale-110 transition" to="/"
          >Home</router-link
        >
        <router-link class="hover:scale-110 transition" to="/sobre"
          >Sobre</router-link
        >
        <router-link class="hover:scale-110 transition" to="/habilidades"
          >Habilidades</router-link
        >
        <router-link class="hover:scale-110 transition" to="/projetos"
          >Projetos</router-link
        >
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
