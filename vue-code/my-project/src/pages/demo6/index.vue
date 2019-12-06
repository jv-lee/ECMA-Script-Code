<template>
  <div>
    <div>条件渲染</div>
    <div>------------------------------</div>
    <div v-if="ok">Yes</div>
    <div>------------------------------</div>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A B C</div>
    <div>------------------------------</div>
    <div v-show="isShow">isShow ?</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ok: false,
      type: 'D',
      isShow: true
    }
  }
}
</script>
