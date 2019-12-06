<template>
  <div>
    <div>事件处理器</div>
    <div>--------------------------</div>

    <div id="example-1">
      <button v-on:click="counter += 1">增加 1</button>
      <p>整个按钮被点击了 {{counter}} 次</p>
    </div>

    <div>--------------------------</div>
    <div>
      <button @click="show2">
        <!-- 阻止事件冒泡 -->
        <button @click.stop="show1">show1</button>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    show1 () {
      alert('show1')
    },
    show2 () {
      alert('show2')
    }
  }
}
</script>
<style>
button {
  width: 60px;
  height: 36px;
}
</style>
