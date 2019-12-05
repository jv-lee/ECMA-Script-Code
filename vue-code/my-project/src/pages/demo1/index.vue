<template>
  <div>生命周期</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('cerated')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeDestory () {
    console.log('beforeDestory')
  },
  destoryed () {
    console.log('destoryed')
  }
}
</script>
