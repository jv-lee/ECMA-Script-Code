<template>
  <div>
    <div>选项数据</div>
    <div>--------------------------------------------</div>
    <div>{{msg}}</div>
    <div>--------------------------------------------</div>
    <div>computed: {{aDouble}}</div>
    <div>--------------------------------------------</div>
    <div @click="say('hi')">点击我</div>
  </div>
</template>
<script>
export default {
  // 默认数据
  data () {
    return {
      msg: 'helloworld',
      num: 10
    }
  },
  // 对象函数
  computed: {
    aDouble () {
      return this.num * 2
    }
  },
  // 事件函数
  methods: {
    say (msg) {
      alert(msg)
    }
  }
}
</script>
