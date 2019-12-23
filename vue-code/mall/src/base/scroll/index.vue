<template>
  <swiper :options="swiperOption" ref="swiper">
    <!-- 下拉 -->
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline ref="pullDownLoading" />
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <!-- 上拉 -->
    <div class="mine-scroll-pull-up" v-if="pullUp">
      <me-loading :text="pullUpText" inline ref="pullUpLoading" />
    </div>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MeLoading from 'base/loading'
// 下拉刷新状态text常量值
import { PULL_DOWN_HEIGHT, PULL_DOWN_TEXT_INIT, PULL_DOWN_TEXT_START, PULL_DOWN_TEXT_ING, PULL_DOWN_TEXT_END, PULL_UP_TEXT_INIT, PULL_UP_HEIGHT, PULL_UP_TEXT_START, PULL_UP_TEXT_ING, PULL_UP_TEXT_END } from './config'
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
    },
    pullUp: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // pulling: false, // 是否正在下拉或者上拉
      // pullDownText: PULL_DOWN_TEXT_INIT,
      // pullUpText: PULL_UP_TEXT_INIT,
      // swiperOption: {
      //   direction: 'vertical',
      //   // 自适应显示模式
      //   slidesPerView: 'auto',
      //   // 无限滚动模式
      //   freeMode: true,
      //   // 计算滚动高度
      //   setWrapperSize: true,
      //   // 是否显示滚动条
      //   scrollbar: {
      //     el: this.scrollbar ? '.swiper-scrollbar' : null,
      //     // 是否自动隐藏
      //     hide: true
      //   },
      //   on: {
      //     // 都是swiper自身提供的事件
      //     sliderMove: this.scroll,
      //     touchEnd: this.touchEnd
      //   }
      // }
    }
  },
  watch: {
    data () {
      this.update()
    }
  },
  created () {
    this.init()
  },
  methods: {
    update () {
      console.log('update swiper scroll height')
      this.$refs.swiper && this.$refs.swiper.update()
    },
    scrollToTop (speed, runCallbacks) {
      this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks)
    },
    init () {
      this.pulling = false
      this.pullDownText = PULL_DOWN_TEXT_INIT
      this.pullUpText = PULL_UP_TEXT_INIT
      this.swiperOption = {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          // 是否自动隐藏
          hide: true
        },
        on: {
          slidermove: this.scroll,
          touchEnd: this.touchEnd,
          transitionEnd: this.scrollEnd
        }
      }
    },

    // 下拉刷新更新文字
    scroll () {
      const swiper = this.$refs.swiper.swiper

      this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper)

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
        // 上拉
      } else if (swiper.isEnd) {
        if (!this.pullUp) {
          return
        }
        const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'))
        if (isPullUp) {
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START)
        } else {
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT)
        }
      }
    },
    scrollEnd () {
      this.$emit('scroll-end', this.$refs.swiper.swiper.translate, this.$refs.swiper.swiper)
    },
    touchEnd () {
      if (this.pulling) {
        return
      }

      const swiper = this.$refs.swiper.swiper

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

        // 到底部 上拉加载
      } else if (swiper.isEnd) {
        const totalHeight = parseInt(swiper.$wrapperEl.css('height'))
        const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > totalHeight

        if (isPullUp) { // 上拉
          if (!this.pullUp) {
            return
          }
          this.pulling = true
          swiper.allowTouchMove = false // 禁止触摸
          swiper.setTransition(swiper.params.speed)
          swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height))
          swiper.params.virtualTranslate = true // 定住不给回弹
          this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING)
          this.$emit('pull-up', this.pullUpEnd)
        }
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
        setTimeout(() => {
          this.$emit('pull-down-transition-end')
        }, swiper.params.speed)
      }, 500)
    },
    pullUpEnd () {
      const swiper = this.$refs.swiper.swiper

      this.pulling = false
      this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END)
      swiper.params.virtualTranslate = false
      swiper.allowTouchMove = true
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

.mine-scroll-pull-down,
.min-scroll-pull-up {
  position: absolute;
  left: 0;
  // top: -80px;
  bottom: 100%;
  width: 100%;
  height: 80px;
}

.mine-scroll-pull-down {
  bottom: 100%;
  height: 80px;
}

.mine-scroll-pull-up {
  top: 100%;
  height: 30px;
}
</style>
