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
    name: 'ui-section',
    props: {
      sectionData: {
        type: Object,
        required: true,
      },
    },
  };
</script>
