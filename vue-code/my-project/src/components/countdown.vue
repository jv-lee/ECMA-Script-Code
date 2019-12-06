<template>
  <!-- 定义一个组件自定义属性 使用属性值 -->
  <p :style="{color:col}">{{time}}</p>
</template>
<script>
export default {
  data () {
    return {
      time: 10
    }
  },
  mounted () {
    let interval = setInterval(() => {
      this.time--
      if (this.time === 0) {
        clearInterval(interval)
        // 触发end事件 自定义组件事件
        this.$emit('end')
      }
    }, 1000)
  },
  // 组件间通信 其他组件传入的数据
  props: {
    col: {
      type: String,
      default: '#000'
    }
  }
}
</script>
