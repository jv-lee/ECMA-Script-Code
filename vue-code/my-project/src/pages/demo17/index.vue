<template>
  <div>
    <div>移动组件库Mint UI</div>
    <div>--------------------------------</div>
    <mt-button type="primary">primary</mt-button>
  </div>
</template>
<script>
import Vue from 'vue'
import { Toast, Button } from 'mint-ui'
Vue.component(Button.name, Button)

export default {
  data () {
    return {}
  },
  mounted () {
    Toast('提示信息')
  }
}
</script>
