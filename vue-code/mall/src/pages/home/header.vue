<template>
  <me-toolbar class="header" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center" class="center-text">搜索框</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-toolbar>
</template>
<script>
import MeToolbar from 'base/toolbar'
export default {
  name: 'HomeHeader',
  data () {
    return {
      visible: true
    }
  },
  components: {
    MeToolbar
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/mixins';
.header {
  &.mine-toolbar {
    background-color: transparent;
    transition: background-color 0.5s;
  }

  &.header-transition {
    background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
  .center-text {
    color: white;
  }
}
</style>
