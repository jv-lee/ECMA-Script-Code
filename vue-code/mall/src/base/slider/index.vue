<template>
  <swiper :options="swiperOptions">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper } from 'vue-awesome-swiper'
export default {
  name: 'MeSlider',
  components: {
    swiper
  },
  // 原型属性嵌套问题要注意
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator (value) {
        return value >= 0
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      swiperOptions: {
        watchOverflow: true, // 只有1个slider 不轮播loop ，swiper会失效
        direction: this.direction,
        autoplay: this.interval ? {
          delay: this.interval,
          disableOnInteraction: false
        } : false,
        sliderPerView: 1, // 设置slider容器能够同时显示的slider数量
        loop: this.loop,
        pagination: { // 分页器
          el: this.pagination ? '.swiper-pagination' : null
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
