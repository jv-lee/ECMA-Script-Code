<template>
  <div>
    <div>过渡效果</div>
    <div>----------------------------------</div>

    <div>
      <button @click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
<style>
/* 设置动画效果全局状态 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
/* 设置动画效果淡入淡出效果 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
