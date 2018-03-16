<template lang="pug">

  button(
    :class="['btn', `btn-${type}`]"
    @click="clickBtn($event)"
  )
    slot(name="before")
    span(v-html="text")
    slot(name="after")

</template>

<script>
  export default {
    name: 'uiBtn',
    mixins: [],

    props: {
      type: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
    },

    data() {
      return {};
    },

    components: {},
    watch: {},
    methods: {
      clickBtn($emit) {
        return this.$emit('clickbtn');
      },
    },
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
  @import "./uiBtn.sass";
</style>
