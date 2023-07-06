<template>
  <div>
    <a class="flex flex-col items-center" :href="link" target="_blank"
      ><img
        src="https://cdn.discordapp.com/attachments/1078397559434903563/1126343837095317534/github.png"
        width="30"
        alt="gitImg"
      />Link do projeto</a
    >
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
