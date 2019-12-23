<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition':isHeaderTransition}" ref="header" />
    </header>
    <!-- 带滚动条的容器 -->
    <me-scroll
      :data="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @pull-down-transition-end="pullDownTransitionEnd"
      @scroll="scroll"
      ref="scroll"
    >
      <!-- banner图 -->
      <home-slider ref="slider" />
      <!-- grid导航按钮 -->
      <home-nav />
      <!-- 商品列表 -->
      <home-recommend @loaded="getRecommends" ref="recommend" />
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backtop" />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import MeScroll from 'base/scroll'
import HomeNav from './nav'
import HomeRecommend from './recommend'
import meBacktop from 'base/backtop'
import { HEADER_TRANSITION_HEIGHT } from './config'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend,
    meBacktop
  },
  data () {
    return {
      recommends: [],
      isBacktopVisible: false,
      isHeaderTransition: false
    }
  },
  created () {

  },
  methods: {
    updateScroll () {

    },
    getRecommends (recommends) {
      this.recommends = recommends
    },
    pullToRefresh (end) {
      this.$refs.slider.update().then(end)
    },
    pullToLoadMore (end) {
      this.$refs.recommend.update().then(end).catch(err => {
        if (err) {
          console.log(err)
        }
        end()
        // 处理没有更多数据的情况
        // 禁止加载更多数据
        // 替换上拉时的loading，改为没有更多数据
      })
    },
    scroll (translate) {
      this.changeHeaderStatus(translate)
    },
    scrollEnd (translate, scroll, pulling) {
      if (!pulling) {
        this.changeHeaderStatus(translate)
      }
      this.isBacktopVisible = translate < 0 && -translate > scroll.height
    },
    pullDownTransitionEnd () {
      this.$refs.header.show()
    },
    backtop () {
      this.$refs.scroll && this.$refs.scroll.scrollToTop()
    },
    changeHeaderStatus (translate) {
      if (translate > 0) {
        this.$refs.header.hide()
        return
      }

      this.$refs.header.show()

      this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT
    }
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
