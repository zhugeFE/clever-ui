<template>
  <li class="c-header c-header-line" v-if="show && styleType == 'line'">
    <span class="border"></span>
    <span>
      <slot :data="groupData">
        {{groupData[labelField]}}
      </slot>
    </span>
    <span class="line"></span>
  </li>
  <li class="c-header" v-else-if="show">
    <slot :data="groupData">
      {{groupData[labelField]}}
    </slot>
  </li>
</template>

<script>
  export default {
    name: 'cGroupHeader',
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
      },
      /**
       * 样式 类型
       */
      styleType: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="sass">

</style>
