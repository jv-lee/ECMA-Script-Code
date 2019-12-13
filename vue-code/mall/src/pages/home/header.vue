<template>
  <me-toolbar class="header">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">搜索框</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-toolbar>
</template>
<script>
import MeToolbar from 'base/toolbar'
export default {
  name: 'HomeHeader',
  components: {
    MeToolbar
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/mixins';
.header {
  &.mine-toolbar {
    background-color: transparent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
}
</style>
