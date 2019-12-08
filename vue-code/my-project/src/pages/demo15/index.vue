<template>
  <div>
    <div>Slot插槽</div>
    <div>---------------------------</div>
    <slots>
      <div>123</div>
      <div>456</div>
      <div>789</div>
      <div slot="bottom">bottom</div>
    </slots>
  </div>
</template>
<script>
import slots from '@/components/slot.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    slots
  }
}
</script>
