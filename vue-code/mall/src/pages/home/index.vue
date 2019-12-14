<template>
  <div class="home">
    <header class="g-header-container">
      <home-header />
    </header>
    <!-- 带滚动条的容器 -->
    <me-scroll>
      <!-- banner图 -->
      <home-slider></home-slider>
      <!-- grid导航按钮 -->
      <home-nav></home-nav>
      <!-- 商品列表 -->
      <home-recommend></home-recommend>
    </me-scroll>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>
<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import MeScroll from 'base/scroll'
import HomeNav from './nav'
import HomeRecommend from './recommend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend
  }
}
</script>
<style lang="scss" scoped>
// 引入scss函数库 / 及 宽高比常量值
@import '~assets/scss/mixins';
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
</style>
