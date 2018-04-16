<template lang="pug">

  .section__container(
    :class="[sectionData.container.classes, `section-${sectionData.id}`]"
    :id="sectionData.name"
  )

    .section__label(
      v-if="sectionData.label.text"
      v-html="sectionData.label.text"
      :class="sectionData.label.classes"
    )

    slot(name="sectionContent")

</template>

<script>
  export default {
    name: 'boilerplate',
    mixins: [],
    props: {
      sectionData: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {};
    },
    components: {},
    watch: {},
    methods: {},
    fetch() {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    activated() {},
    deactivated() {},
    beforeDestroy() {},
    destroyed() {},
    errorCaptured() {},
  };
</script>

<style lang="sass" scoped>
  // @import "./uiSection.sass";
</style>
