<template>
  <div>
    <div>Class与Sytel的动态绑定</div>
    <div>------------------------------</div>
    <!-- 通过全局属性布尔值修改变量 -->
    <div class="static" v-bind:class="{'active':isActive,'text-danger':hasError}">class 第一种绑定方式 -</div>
    <!-- 通过对象属性布尔值修改变量 -->
    <div v-bind:class="classObject">class 第二种绑定方式 -</div>
    <!-- 通过修改全局属性直接修改className -->
    <div :class="[activeClass,textDanger]">class 第三种绑定方式 -</div>
    <div>------------------------------</div>
    <div v-bind:style="{'color':activeColor,'fontSize':fontSize+'px'}">style 第一种绑定方式</div>
    <div v-bind:style="styleObject">style 第二种绑定方式</div>
    <div v-bind:style="[baseStyles,overridingStyles]">style 第三种绑定方式</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        'active': true,
        'text-dange': false
      },
      activeClass: 'active',
      textDanger: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        'color': 'red',
        'fontSize': '43px'
      },
      baseStyles: {
        color: 'red'
      },
      overridingStyles: {
        fontSize: '53px'
      }
    }
  }
}
</script>
