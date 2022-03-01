<template>
  <div class="select-lable-box">
    <c-button
    type="normal"
    class="select-table"
    :class="{'checked-table': checkedTable == 'all'}"
    @click="onclick"
    >
      全部属性
    </c-button><c-button
    type="normal"
    class="select-table"
    :class="{'checked-table': checkedTable == item[groupField || labelField]}"
    @click="onclick(item)"
    v-for="item in store"
    :key="item.id"
    >
    {{item[groupField || labelField]}}
  </c-button>
  </div>
</template>
<script>
export default {
  props: {
    store: {
      type: Array,
      default: []
    },
    groupData: {
      type: Object
    },
    groupField: {
      type: String
    },
    labelField: {
      type: String,
      required: true
    },
    index: {
      type: Number
    }
  },
  created () {

  },
  data () {
    return {
      checkedTable: 'all'
    }
  },
  methods: {
    onclick(item) {
      console.log(item)
      let name = item ? item[this.groupField || this.labelField] : 'all'
      this.checkedTable = name
      this.$emit('click', name)
    }
  }
}
</script>
<style lang="sass">
@import "styles/table.sass"
</style>
