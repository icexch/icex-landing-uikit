<template lang="pug">

  button(
    v-if="data.type === 'btn'"
    class="btn"
    :style="styles"
    @click="clickBtn($event)"
  )
    slot(name="before")
    span(v-html="data.text")
    slot(name="after")

  a(
    v-else
    class="btn"
    :href="data.href"
    :style="styles"
    @click="clickBtn($event)"
  )
    slot(name="before")
    span(v-html="data.text")
    slot(name="after")

</template>

<script>
  export default {
    name: 'uiBtn',
    mixins: [],

    props: {
      styles: {
        type: Object,
        required: true,
      },
      data: {
        type: Object,
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
