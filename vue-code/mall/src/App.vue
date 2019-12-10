<template>
  <!-- 最外层全屏容器 -->
  <div id="app" class="g-container">
    <!-- 内部视图 -->
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <!-- 底部导航栏 -->
    <div class="g-footer-container">
      <tabbar />
    </div>
  </div>
</template>

<script>
import Tabbar from 'components/tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>
