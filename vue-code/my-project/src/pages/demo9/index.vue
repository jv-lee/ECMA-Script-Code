<template>
  <div>
    <div>表单控件绑定</div>
    <div>-----------------------</div>
    <input type="text" placeholder="edit me" v-model="message" />
    <p>Message is:{{message}}</p>

    <div>-----------------------</div>
    <input type="checkbox" value="Jack" v-model="checkedNames" />
    <label for="Jack">Jack</label>
    <input type="checkbox" value="Tank" v-model="checkedNames" />
    <label for="Tank">Tank</label>
    <input type="checkbox" value="Yashoo" v-model="checkedNames" />
    <label for="Yashoo">Yashoo</label>
    <br />
    <span>Checked names:{{checkedNames}}</span>

    <div>-----------------------</div>
    <div>
      <select name="select" id="select" v-model="selected">
        <option value disabled>请选择</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <span>Selected:{{selected}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'HelloWorld',
      checkedNames: [],
      selected: ''
    }
  }
}
</script>
