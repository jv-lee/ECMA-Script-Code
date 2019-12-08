<template>
  <div>
    <div>vue-resource请求</div>
    <div>---------------------------------</div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    // 使用 web服务端
    this.$http.get('https://restapi.amap.com/v3/ip?key=5be80400c33d4359ec265304457ff96f').then(response => {
      console.log('response ->', response)
    }, error => {
      console.log('error ->', error)
    })

    this.$http.post('/url', { foo: 'bar' }).then(response => {
      console.log('response -> ', response)
    }, error => {
      console.log('error ->', error)
    })

    this.$http.get('/url', { params: { foo: 'bar', headers: { 'X-Custom': '...' } } })
      .then(response => {
        console.log(response)
      }, error => {
        console.log(error)
      })
  }
}
</script>
