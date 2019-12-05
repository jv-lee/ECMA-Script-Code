<template>
  <div>
    <div>模版语法</div>
    <div>-------------------------------</div>
    <!-- 数据绑定 -->
    <div>data:{{msg}}</div>
    <div>-------------------------------</div>
    <!-- 表达式 直接运算 -->
    <div>{{num + 1}}</div>
    <div>-------------------------------</div>
    <!-- html代码直接使用 -->
    <div v-html="rawHtml"></div>
    <div>-------------------------------</div>
    <div v-bind:class="className" @click="change">v-bind指令 点击改变颜色</div>
    <div>-------------------------------</div>
    <!-- 点击事件 @click -> 简写 -->
    <div v-on:click="say('hi')">点击我</div>
    <div>-------------------------------</div>
    <!-- 使用过滤器方法过滤数据 -->
    <div>{{message|capitalize}}</div>
  </div>
</template>
<script>
export default {
  // 数据区
  data () {
    return {
      msg: 'helloworld',
      num: 1,
      rawHtml: '<span>123</span>',
      className: 'red active',
      message: 'message'
    }
  },
  // 方法区
  methods: {
    // 动态修改className
    change () {
      this.className = this.className.replace(/red/, 'blue')
    },
    say (msg) {
      alert(msg)
    }
  },
  // 过滤器方法区
  filters: {
    capitalize () {
      return '123'
    }
  }
}
</script>
<style>
.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
