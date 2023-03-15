<template>
  <div>
      <Button  @click="getpostValue">Default</Button>
      <div>
        post接口获取到的值是：{{value}}
      </div>
  </div>

</template>

<script>
export default {
  name: "TestPost",
  data() {
    return {
      value: ''

    }
  },
  methods: {
    getpostValue() {
      this.$axios({
        method: "post",
        url: "/post/test", // 接口地址
        data: {
          // keyword: "1"   // 传接口参数
          name:'lianzhili',
          age:15
        }
      }).then(response => {
        console.log(response.data, "success");   // 成功的返回
        this.value = response.data
      })
          .catch(error => console.log(error, "error")); // 失败的返回


    }

  }
}
</script>

<style scoped>

</style>