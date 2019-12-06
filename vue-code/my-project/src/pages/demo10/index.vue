<template>
  <div>
    <div>自定义组件</div>
    <div>--------------------------</div>
    <!-- 使用组件标签 col 通过该键名传入数据 通过end事件被触发时调用事件-->
    <count-down col="red" @end="ending"></count-down>
  </div>
</template>
<script>
// 引入组件
import countdown from '@/components/countdown.vue'
export default {
  data () {
    return {

    }
  },
  methods: {
    ending () {
      alert('end')
    }
  },
  // 添加组件到配置
  components: {
    'count-down': countdown
  }
}
</script>
