<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'MeScroll',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
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
</style>
