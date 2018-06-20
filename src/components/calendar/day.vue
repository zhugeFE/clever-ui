<template>
  <td :class="dayClass" @click="onClickDay">
    <div class="zg-cld-day-container">
      <div class="zg-cld-label">
        <span class="zg-day-num">{{dateFormat(day)}}</span>日
      </div>
      <div class="zg-cld-task-list">

      </div>
    </div>
  </td>
</template>

<script>
import {util} from '../../utils'
export default {
  name: 'zgDay',
  props: {
    day: {
      type: Date
    },
    currentDay: {
      type: Date
    },
    currentMonth: null
  },
  data () {
    return {
      msg: 'day'
    }
  },
  computed: {
    dayClass () {
      let week = this.day.getDay()
      let isOtherMonth = this.currentMonth.value !== this.day.getMonth()
      let isToday = util.dateFormat(new Date()) === util.dateFormat(this.day)
      let isCurrent = util.dateFormat(this.currentDay) === util.dateFormat(this.day)
      return {
        'zg-cld-day': true,
        'zg-cld-secondary': !week || week === 6 || isOtherMonth,
        'zg-cld-today': isToday,
        'zg-cld-active': isCurrent
      }
    }
  },
  methods: {
    dateFormat (date) {
      return util.dateFormat(date, 'dd')
    },
    onClickDay () {
      this.$emit('click', this.day)
    }
  }
}
</script>

<style lang="sass">

</style>
