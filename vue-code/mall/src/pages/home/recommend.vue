<template>
  <div class="recommend">
    <h3 class="recommend-title">热卖推荐</h3>
    <ul class="recommend-list">
      <li class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <!-- 跳转到自己的页面 使用router-link -->
        <router-link
          class="recommend-link"
          :to="{name:'home-product',params:{id:item.baseinfo.itemId}}"
        ></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { getHomeRecommend } from 'api/home'
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommends: [],
      curPage: 1,
      totalPage: 1
    }
  },
  created () {
    this.getRecommend()
  },
  methods: {
    getRecommend () {
      if (this.curPage > this.totalPage) {
        return
      }
      getHomeRecommend(this.curPage).then(data => {
        if (data) {
          this.curPage++
          this.totalPage = data.tatalPage
          // concat数据填充 等于list的 addAll 方法
          this.recommends = this.recommends.concat(data.itemList)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
