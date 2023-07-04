<template>
  <div class="flex items-center flex-col gap-12 px-[10vw]">
    <h3 class="text-3xl font-bold">HABILIDADES</h3>
    <div class="sm:flex grid grid-cols-3 gap-8">
      <skill
        :imagemUrl="'https://cdn.discordapp.com/attachments/1095475771771986104/1125621480470880326/html5.png'"
      />
      <skill
        :imagemUrl="'https://cdn.discordapp.com/attachments/1095475771771986104/1125622933381980201/css.png'"
      />
      <skill
        :imagemUrl="'https://cdn.discordapp.com/attachments/1095475771771986104/1125624118503551040/javascript.png'"
      />
      <skill
        :imagemUrl="'https://cdn.discordapp.com/attachments/1095475771771986104/1125623259157774387/vue_js_icon_188136.png'"
      />
      <skill
        :imagemUrl="'https://cdn.discordapp.com/attachments/1095475771771986104/1125621803356798986/react.png'"
      />
      <skill
        :imagemUrl="'https://cdn.discordapp.com/attachments/1095475771771986104/1125626743588397166/c.455x512.png'"
      />
      <skill
        :imagemUrl="'https://cdn.discordapp.com/attachments/1095475771771986104/1125624557106110625/github.png'"
      />
      <skill
        :imagemUrl="'https://cdn.discordapp.com/attachments/1095475771771986104/1125626770436128880/Daco_4535933.png'"
      />
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
