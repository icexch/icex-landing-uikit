<template>
  <div :class="containerClasses">
    <slot/>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: true
  }),

  computed: {
    containerClasses () {
      return {
        'test-dom-container': true,
        'test-dom-container--hidden': !this.visible
      }
    },
    buttonText () {
      return this.visible ? '-' : '+'
    }
  },

  methods: {
    toggle () {
      this.visible = !this.visible
    }
  }
}
</script>

<style>

</style>
