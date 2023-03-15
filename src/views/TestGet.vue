<template>
  <div>
    get接口获取到的值是：{{getvalue}}
  </div>

</template>

<script>
export default {
  name: "TestGet",
  data(){
    return{
      getvalue:''
    }
  },
  mounted() {
    this.$axios({
      method: "get",
      url: "/hello/hdsja", // 接口地址
      data: {
        // keyword: "1"   // 传接口参数
      }
    })
        .then(response => {
          console.log(response.data, "success");   // 成功的返回
          this.getvalue = response.data
        })
        .catch(error => console.log(error, "error")); // 失败的返回
  }
}
</script>

<style scoped>

</style>