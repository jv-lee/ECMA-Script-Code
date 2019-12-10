<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-home"></i>
      <p>首页</p>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont icon-category"></i>
      <p>分类</p>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="iconfont icon-cart"></i>
      <p>购物车</p>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="iconfont icon-personal"></i>
      <p>个人中心</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Tabbar'
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/mixins';

.router-link-active {
  color: $link-active-color;
}
</style>
