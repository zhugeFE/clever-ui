<template>
  <li class="zg-header" v-show="show">
    <slot :data="groupData">
      {{groupData[labelField]}}
    </slot>
  </li>
</template>

<script>
  export default {
    name: 'zgGroupHeader',
    props: {
      labelField: {
        type: String,
        required: true
      },
      groupData: {
        type: Object,
        required: true
      },
      show: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="sass">

</style>
