<template>
  <div class="flex items-center flex-col gap-12 px-[10vw]">
    <h3 class="text-3xl font-bold">PROJETOS</h3>
    <div class="grid grid-cols-1 gap-12">
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126324994457227334/imobiliaria.png'"
          alt="Imagem"
          :titulo="'Site Imobiliaria'"
          :desc="'O projeto é uma aplicação web desenvolvida com Next.js, um framework React.js voltado para construção de aplicações server-side rendering (SSR) e static site generation (SSG). A aplicação foi desenvolvida para atender às necessidades de uma imobiliária, permitindo a gestão de imóveis e o acesso restrito aos usuários através de um sistema de login.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Next.js'" />
          <frameworks :framework="'Tailwind'" />
          <frameworks :framework="'SQL'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1078397559434903563/1126354781812834334/image.png'"
          alt="Imagem"
          :titulo="'Site Imobiliaria'"
          :desc="'O projeto é uma aplicação web desenvolvida com Next.js, um framework React.js voltado para construção de aplicações server-side rendering (SSR) e static site generation (SSG). A aplicação foi desenvolvida para atender às necessidades de uma imobiliária, permitindo a gestão de imóveis e o acesso restrito aos usuários através de um sistema de login.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Next.js'" />
          <frameworks :framework="'Tailwind'" />
          <frameworks :framework="'SQL'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126328628003733535/techno.png'"
          alt="Imagem"
          :titulo="'Site Imobiliaria'"
          :desc="'O projeto é uma aplicação web desenvolvida com Next.js, um framework React.js voltado para construção de aplicações server-side rendering (SSR) e static site generation (SSG). A aplicação foi desenvolvida para atender às necessidades de uma imobiliária, permitindo a gestão de imóveis e o acesso restrito aos usuários através de um sistema de login.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Next.js'" />
          <frameworks :framework="'Tailwind'" />
          <frameworks :framework="'SQL'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126326708774129694/todo.png'"
          alt="Imagem"
          :titulo="'Site Imobiliaria'"
          :desc="'O projeto é uma aplicação web desenvolvida com Next.js, um framework React.js voltado para construção de aplicações server-side rendering (SSR) e static site generation (SSG). A aplicação foi desenvolvida para atender às necessidades de uma imobiliária, permitindo a gestão de imóveis e o acesso restrito aos usuários através de um sistema de login.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Next.js'" />
          <frameworks :framework="'Tailwind'" />
          <frameworks :framework="'SQL'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126324994457227334/imobiliaria.png'"
          alt="Imagem"
          :titulo="'Site Imobiliaria'"
          :desc="'O projeto é uma aplicação web desenvolvida com Next.js, um framework React.js voltado para construção de aplicações server-side rendering (SSR) e static site generation (SSG). A aplicação foi desenvolvida para atender às necessidades de uma imobiliária, permitindo a gestão de imóveis e o acesso restrito aos usuários através de um sistema de login.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Next.js'" />
          <frameworks :framework="'Tailwind'" />
          <frameworks :framework="'SQL'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Projeto/Project.vue";
// import Frameworks from "./Projeto/Frameworks.vue";
import LinkGit from "./Projeto/LinkGit.vue";
export default {
  Project,
  data() {
    return {};
  },
};
</script>

<style></style>
