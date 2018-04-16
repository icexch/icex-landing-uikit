<template lang="pug">
  svg(width="100%" height="100%").icon
    use(v-bind="{'xlink:href':`#${name}`}")
</template>

<script>
  export default {
    name: 'ui-icon',
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="sass" scoped>
  // @import "./uiIcon.sass";
</style>