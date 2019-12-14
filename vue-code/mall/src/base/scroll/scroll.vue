<template>
  <div class="scroll-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CustomScroll'
}
</script>
<style lang="scss" scoped>
.scroll-container {
  width: 100%;
  overflow: auto;
}
</style>
