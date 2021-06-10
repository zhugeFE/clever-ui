<template>
  <div>
    <demo-panel subtitle="普通日历">
      <div style="margin-bottom: 10px">
        选中日期：{{currentDay.toLocaleDateString()}}
      </div>
      <c-calendar v-model="currentDay" :task-list="taskList"></c-calendar>
    </demo-panel>
  </div>
</template>

<script>
import CCalendar from '../../../../src/components/calendar/calendar'
import {util} from '../../../../src/utils'
export default {
  name: 'normalCalendar',
  components: {CCalendar},
  data () {
    return {
      currentDay: new Date(),
      taskList: (() => {
        let list = []
        let today = new Date()
        for (let i = 0; i < 5; i++) {
          let beginDate = new Date(today.getTime() + util.random(-3, 3) * util.dayTime)
          let endDate = new Date(beginDate.getTime() + util.random(0, 3) * util.dayTime)
          list.push({
            beginDate,
            endDate,
            name: `任务${i}`,
            desc: beginDate.toLocaleDateString() + '-' + endDate.toLocaleDateString(),
            color: util.colors[util.random(0, 10)],
            mark: true
          })
        }
        return list
      })()
    }
  }
}
</script>

<style lang="less">

</style>
