<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline ref="pullDownLoading" />
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
// 下拉刷新状态text常量值
import { PULL_DOWN_HEIGHT, PULL_DOWN_TEXT_INIT, PULL_DOWN_TEXT_START, PULL_DOWN_TEXT_ING, PULL_DOWN_TEXT_END } from './config'
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
      pulling: false, // 是否正在下拉或者上拉
      pullDownText: PULL_DOWN_TEXT_INIT,
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
        },
        on: {
          // 都是swiper自身提供的事件
          sliderMove: this.scroll,
          touchEnd: this.touchEnd
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
    },

    // 下拉刷新更新文字
    scroll () {
      const swiper = this.$refs.swiper.swiper

      if (this.pulling) {
        return
      }

      // 下拉
      if (swiper.translate > 0) {
        if (!this.pullDown) {
          return
        }
        if (swiper.translate > PULL_DOWN_HEIGHT) {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
        } else {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
        }
      }
    },
    touchEnd () {
      const swiper = this.$refs.swiper.swiper

      if (this.pulling) {
        return
      }

      // 松开 开始进行刷新
      if (swiper.translate > PULL_DOWN_HEIGHT) {
        if (!this.pullDown) {
          return
        }
        this.pulling = true // 设置状态为正在刷新
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING)
        swiper.allowTouchMove = false // 禁止触摸
        swiper.setTransition(swiper.params.speed)// 设置初始速度
        swiper.setTranslate(PULL_DOWN_HEIGHT)// 设置当前刷新控件高度
        swiper.params.virtualTranslate = true // 定住当前刷新高度 不回弹 必须最后调用回弹开关
        // 通知开始刷新事件 ， 提供刷新view 更新回初始隐藏状态的方法给外部调用
        this.$emit('pull-down', this.pullDownEnd)
      }
    },
    pullDownEnd () {
      const swiper = this.$refs.swiper.swiper

      this.pulling = false // 设置状态为不在刷新
      // 更新刷新结束字符
      this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END)
      setTimeout(() => {
        // 调整回刷新控件隐藏初始状态 必须先打开回弹开关
        swiper.params.virtualTranslate = false
        swiper.allowTouchMove = true
        swiper.setTransition(swiper.params.speed)
        swiper.setTranslate(0)
      }, 500)
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
