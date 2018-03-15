<template lang="pug">

  .section__container(:class="data.container.classes")
    .section__label.h5(v-if="data.label.text" v-html="data.label.text" :class="data.label.classes")

    slot(name="sectionContent")

</template>

<script>
  export default {
    name: 'boilerplate',
    mixins: [],
    props: {
      data: {
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
    computed: {},
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
