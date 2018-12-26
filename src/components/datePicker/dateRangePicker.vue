<template>
  <div class="c-date-range-picker">
    <c-date-picker :show-today="false"
                   v-model="startDate"
                   :max="endDate"
                   :min="min"
                   :highlight-start="startDate"
                   :highlight-end="endDate"></c-date-picker>

    <span class="c-range-separator">{{separator}}</span>

    <c-date-picker :show-today="false"
                   v-model="endDate"
                   :min="startDate"
                   :max="max"
                   :highlight-end="endDate"
                   :highlight-start="startDate"></c-date-picker>
  </div>
</template>

<script>
import CDatePicker from './datePicker'
export default {
  name: 'cDateRangePicker',
  components: {CDatePicker},
  props: {
    value: null,
    separator: {
      type: String,
      default: '~'
    },
    /**
     * 最小时间
     */
    min: {
      type: Date
    },
    /**
     * 最大时间
     */
    max: {
      type: Date
    }
  },
  data () {
    let data = {
      startDate: new Date(),
      endDate: new Date()
    }
    if (this.value) {
      data.startDate = this.value[0]
      data.endDate = this.value[1]
    }
    return data
  },
  computed: {
    output () {
      return [
        this.startDate,
        this.endDate
      ]
    }
  },
  watch: {
    output () {
      this.$emit('input', this.output)
    }
  }
}
</script>

<style lang="sass">
@import "styles/dateRange"
</style>
