<template lang="pug">
  form.mb-2
    .form-group
      input(type="text" :placeholder="data.placeholder.name").custom-control

    .form-group
      input(type="email" :placeholder="data.placeholder.email").custom-control

    .form-group.mb-4
      textarea(:placeholder="data.placeholder.msg" row="5").custom-control

    .text-center
      ui-btn(type="primary" text="Send")

</template>

<script>
  import uiBtn from '../uiBtn/uiBtn.vue'
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
    components: {
      uiBtn,
    },
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

</style>
