<template>
  <div>
    <div>计算属性</div>
    <div>-------------------------------------</div>
    <!-- 反转函数 -->
    <div>{{reversedMessage}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'helloworld'
    }
  },
  // 计算属性
  computed: {
    reversedMessage () {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>
