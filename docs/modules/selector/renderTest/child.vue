<template>
  <div>
    <slot :data="data">
      <p>{{data.label}}</p>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'child',
    props: {
      data: null
    }
  }
</script>

<style lang="sass">

</style>
