<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline />
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MeLoading from 'base/loading'
// import { PULL_DOWN_HEIGHT, } from './config'
export default {
  name: 'MeScroll',
  components: {
    swiper,
    swiperSlide,
    MeLoading
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object]
    },
    pullDown: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pullDownText: '下拉刷新',
      swiperOption: {
        direction: 'vertical',
        // 自适应显示模式
        slidesPerView: 'auto',
        // 无限滚动模式
        freeMode: true,
        // 计算滚动高度
        setWrapperSize: true,
        // 是否显示滚动条
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          // 是否自动隐藏
          hide: true
        }
      }
    }
  },
  watch: {
    data () {
      this.update()
    }
  },
  methods: {
    update () {
      console.log('update swiper scroll height')
      this.$refs.swiper && this.$refs.swiper.update()
    }
  }
}
</script>
<style lang="scss" scoped>
// 解决不可拖动 让高度自动填充 可拖动
.swiper-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: auto;
}

.mine-scroll-pull-down {
  position: absolute;
  left: 0;
  // top: -80px;
  bottom: 100%;
  width: 100%;
  height: 80px;
}
</style>
