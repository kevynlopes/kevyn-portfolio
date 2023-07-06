<template>
  <div class="border border-solid border-white w-auto p-1 text-center">
    {{ framework }}
  </div>
</template>

<script>
export default {
  props: {
    framework: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
