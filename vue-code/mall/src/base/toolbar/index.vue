<template>
  <div class="mine-toolbar">
    <div class="mine-toolbar-left">
      <slot name="left" />
    </div>
    <div class="mine-toolbar-center" v-if="$slots.center">
      <slot name="center" />
    </div>
    <div class="mine-toolbar-right" v-if="$slots.right">
      <slot name="right" />
    </div>
    <h1 class="mine-toolbar-title" v-if="title">
      <span class="mine-toolbar-text" v-text="title"></span>
    </h1>
  </div>
</template>
<script>
export default {
  name: 'MeToolbar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/mixins';
.mine-toolbar {
  @include flex-between();
  position: relative;
  height: 50px;
  background-color: #fff;
  &-left {
    margin-left: 10px;
  }
  &-center {
    flex: 1;
    margin: 0 10px;
  }
  &-right {
    margin-right: 10px;
  }
  &-title {
    position: absolute;
    top: 0;
    left: 20%;
    bottom: 0;
    right: 20%;
    @include flex-center();
    text-align: center;
  }

  &-text {
    width: 100%;
    font-size: 18px;
    @include ellipsis();
    line-height: 1.5;
  }
}
</style>
