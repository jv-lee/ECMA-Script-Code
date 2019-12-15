<template>
  <div class="mine-loading" :class="{'mine-loading-inline':inline }">
    <!-- 通过v-if 判断的变量必须是data内部变量 或者可以通过外包传入的 props 原型变量 -->
    <span class="mine-loading-indicator" v-if="indicator === 'on'">
      <slot>
        <img src="./loading.gif" alt />
      </slot>
    </span>
    <span class="mine-loading-text" v-if="loadingText">{{loadingText}}</span>
  </div>
</template>
<script>
export default {
  name: 'loading',
  props: {
    indicator: {
      type: String,
      default: 'on',
      validator (value) {
        return ['on', 'off'].indexOf(value) > -1
      }
    },
    text: {
      type: String,
      default: '加载中...'
    },
    // 是否为一行显示
    inline: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loadingText: this.text
    }
  },
  watch: {
    text (text) {
      this.loadingText = text
    }
  },
  methods: {
    setText (text) {
      this.loadingText = text
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/mixins';

.mine-loading {
  overflow: hidden;
  width: 100%;
  height: 100%;
  @include flex-center(column); //设置垂直居中显示

  &.mine-loading-inline {
    flex-direction: row;

    .mine-loading-indicator ~ .mine-loading-text {
      margin-top: 0;
      margin-left: 6px;
    }
  }
}

// 控制兄弟容器存在则设置 margin值
.mine-loading-indicator ~ .mine-loading-text {
  margin-top: 6px;
}
</style>
