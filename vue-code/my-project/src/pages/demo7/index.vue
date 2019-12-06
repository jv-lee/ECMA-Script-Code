<template>
  <div>
    <div>列表渲染</div>
    <div>------------------------------------</div>
    <ul id="example-1">
      <li v-for="(item,index) in items" :key="index">{{`${item.message} - ${index}`}}</li>
    </ul>
    <div>------------------------------------</div>
    <ul id="example-2">
      <li v-for="(value,key) in object" :key="key">{{`${key} - ${value}`}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      object: {
        firstName: 'John',
        lastName: 'jack',
        age: 15
      }
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
