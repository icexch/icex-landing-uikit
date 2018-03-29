<template lang="pug">

  .section__container(
    :class="[sectionData.container.classes, `section-${sectionData.id}`]"
    :id="sectionName"
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
    computed: {
      sectionName() {
        if(!this.sectionData.label.text) {
          return 'section_label_not_found';
        }
        return this.sectionData.label.text.replace(' ', '_').toLowerCase();
      }
    },
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

<style lang="sass">
  // @import "./uiSection.sass";
</style>
