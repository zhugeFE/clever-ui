<template>
  <div class="doc-panel">
    <h4>{{title}}</h4>
    <table class="table">
      <thead>
        <tr>
          <td>名称</td>
          <td>是否必传</td>
          <td>类型</td>
          <td>描述</td>
          <td>默认值</td>
          <td>tip</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, i) in api" :key="i">
          <td>{{item.name}}</td>
          <td>{{item.required}}</td>
          <td>{{item.type}}</td>
          <td>{{item.description}}</td>
          <td>{{item.default || '-'}}</td>
          <td>{{item.tip || '-'}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'docMarkdown',
  props: {
    api: Array,
    title: String
  }
}
</script>
<style lang="less">
@import "./styles/index.less";
</style>
