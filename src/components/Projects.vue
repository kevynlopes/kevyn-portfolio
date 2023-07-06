<template>
  <div class="flex items-center flex-col gap-12 px-[10vw]">
    <h3 class="text-3xl font-bold">PROJETOS</h3>
    <div class="grid grid-cols-1 gap-24">
      <div class="flex flex-col gap-6 items-center">
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
          :titulo="'Site Advanzzze'"
          :desc="'A home page da Avanzzze, minha marca especializada em Desenvolvimento Web e de Aplicativos freelance, apresenta projetos diversificados desenvolvidos com maestria, utilizando minhas linguagens e frameworks favoritas.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Next.js'" />
          <frameworks :framework="'Tailwind'" />
          <frameworks :framework="'TypeScript'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126328628003733535/techno.png'"
          alt="Imagem"
          :titulo="'Projeto Techno'"
          :desc="'O Techno é um projeto pessoal de desenvolvimento web que eu criei utilizando o poderoso framework Vue.js 2. Com o objetivo de construir uma aplicação moderna e interativa, o Techno oferece recursos avançados e uma experiência de usuário envolvente.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Vue.js'" />
          <frameworks :framework="'CSS'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126357498065064057/image.png'"
          alt="Imagem"
          :titulo="'PvP Academy'"
          :desc="'O PvP Academy é um projeto que desenvolvi com o objetivo de oferecer uma plataforma de aprendizado online que capacita indivíduos a adquirirem novas habilidades e impulsionarem suas carreiras. Como um site de cursos em constante evolução, o PvP Academy é construído em React, um dos frameworks JavaScript mais populares e eficientes da atualidade.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'React'" />
          <frameworks :framework="'CSS'" />
          <frameworks :framework="'SQL'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126357714126241882/image.png'"
          alt="Imagem"
          :titulo="'BikCraft'"
          :desc="'Bikcraft é um projeto que desenvolvi com paixão, criatividade e foco em design responsivo e funcionalidade para bicicletas personalizadas. Utilizando HTML e CSS como principais tecnologias, criei uma experiência única que combina estilo e usabilidade.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'HTML'" />
          <frameworks :framework="'CSS'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126326708774129694/todo.png'"
          alt="Imagem"
          :titulo="'Site TodoList'"
          :desc="'Meu site TodoList é um projeto que desenvolvi com o objetivo de oferecer uma aplicação de To-Do List eficiente e intuitiva. Utilizando as tecnologias Vue.js e Tailwind CSS, criei uma plataforma onde os usuários podem organizar suas tarefas diárias de forma simples e eficaz.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Vue.js'" />
          <frameworks :framework="'Tailwind'" />
        </div>
        <LinkGit :link="'https://github.com/kevynlopes'" />
      </div>
      <div class="flex flex-col gap-4 items-center">
        <Project
          :imagem="'https://cdn.discordapp.com/attachments/1075914289967284255/1126326708111425566/clima.png'"
          alt="Imagem"
          :titulo="'Site Clima'"
          :desc="'Clima é um projeto que desenvolvi com o objetivo de oferecer uma maneira fácil e intuitiva de verificar as condições climáticas de sua cidade ou país. Utilizando as tecnologias Vue.js e Tailwind CSS, criei uma aplicação web moderna e responsiva.'"
        />
        <div class="flex gap-8">
          <frameworks :framework="'Vue.js'" />
          <frameworks :framework="'Tailwind'" />
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
  LinkGit,
  data() {
    return {};
  },
};
</script>

<style></style>
