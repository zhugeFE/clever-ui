<template>
  <span>
    <slot :data="data">
      {{data.label}}
    </slot>
  </span>
</template>

<script>
  export default {
    name: 'cRadioLabel',
    props: {
      /**
       *
       */
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="sass">

</style>
