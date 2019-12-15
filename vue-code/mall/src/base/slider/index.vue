<template>
  <!-- 通过更新keyId更新整个组件 重新加载生命周期和创建 解决更新了数据后 view显示异常问题 -->
  <swiper :options="swiperOptions" :key="keyId">
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
    },
    // 通过更新keyId更新整个组件 重新加载生命周期和创建 解决更新了数据后 view显示异常问题
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      keyId: Math.random()

    }
  },
  // 监听数据变化更新keyId -> 通过更新keyId更新整个组件 重新加载生命周期和创建 解决更新了数据后 view显示异常问题
  watch: {
    data (newData) {
      if (newData.length === 0) {
        return
      }
      this.swiperOptions.loop = newData.length <= 1 ? false : this.swiperOptions.loop
      this.keyId = Math.random()
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.swiperOptions = {
        watchOverflow: true, // 只有1个slider 不轮播loop ，swiper会失效
        direction: this.direction,
        autoplay: this.interval ? {
          delay: this.interval,
          disableOnInteraction: false
        } : false,
        sliderPerView: 1, // 设置slider容器能够同时显示的slider数量
        loop: this.data.length <= 1 ? false : this.loop,
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
