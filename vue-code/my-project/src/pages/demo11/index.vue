<template>
  <div>
    <div>Vue中DOM操作</div>
    <div>---------------------------</div>
    <div ref="head"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    // DOM已经生成
    this.$refs.head.innerHTML = '12333'
    this.$refs.head.innerText = '1232'
  }
}
</script>
