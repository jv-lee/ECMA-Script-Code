<template>
  <div class="slider-wrapper">
    <me-loading v-if="!sliders.length"></me-loading>
    <!-- :data="sliders" 更新内部数据 通过更新keyId更新整个组件 重新加载生命周期和创建 解决更新了数据后 view显示异常问题 -->
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-else
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt class="slider-img" />
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>
<script>
import MeSlider from 'base/slider'
import { swiperSlide } from 'vue-awesome-swiper'
import { sliderOptions } from './config'
import { getHomeSlider } from '../../api/home'
import MeLoading from 'base/loading'
export default {
  name: 'HomeSlider',
  components: {
    MeSlider,
    swiperSlide,
    MeLoading
  },
  data () {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: [
        // {
        //   'linkUrl': 'https://www.imooc.com',
        //   'picUrl': require('./img/1.jpg')
        // },
        // {
        //   'linkUrl': 'https://www.imooc.com',
        //   'picUrl': require('./img/2.jpg')
        // },
        // {
        //   'linkUrl': 'https://www.imooc.com',
        //   'picUrl': require('./img/3.jpg')
        // },
        // {
        //   'linkUrl': 'https://www.imooc.com',
        //   'picUrl': require('./img/4.jpg')
        // }
      ]
    }
  },
  created () {
    this.getSlider()
  },
  methods: {
    update () {
      return this.getSlider()
    },
    getSlider () {
      return getHomeSlider().then(data => {
        this.sliders = data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.slider-wrapper {
  height: 183px;
}
.slider-link {
  display: block;
}
.slider-link,
.slider-img {
  width: 100%;
  height: 100%;
}
</style>
