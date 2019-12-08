<template>
  <div>
    <div>状态管理vuex</div>
    <div>-------------------------</div>
    <div>{{data.age}}</div>
    <button @click="change">change</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: { age: 1 }
    }
  },
  methods: {
    change () {
      // 修改公共数据
      this.data.age = 12
      this.$store.dispatch('increment', this.data)

      // 获取数据
      this.data = this.$store.state.data
    }
  }
}
</script>
