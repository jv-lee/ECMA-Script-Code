<template>
  <div>
    <div>vue-router</div>
    <div>----------------------------------------</div>
    <router-link to="/demo9">demo9</router-link>
    <div>----------------------------------------</div>
    <!-- http://www.baidu.com/123 -->
    <router-link :to="{name:'demo9',params:{userId:123}}">demo9-params</router-link>
    <div>----------------------------------------</div>
    <!-- http://www.baidu.com/123?type=1 -->
    <router-link :to="{name:'demo9',params:{userId:123},query:{type:1}}">demo9-query</router-link>
    <div>----------------------------------------</div>
    <button @click="startPath">页面跳转 - demo8</button>
    <div>----------------------------------------</div>
    <button @click="startParams">页面跳转 - demo9</button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    startPath () {
      this.$router.push({ path: '/demo8' })
    },
    startParams () {
      this.$router.push({ name: 'demo9', params: { userId: 123 }, query: { type: 1 } })
    }
  }
}
</script>
