<!--<template>-->
<!--8989-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "teo"-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'TeoView',
  methods: {
    begin(){
      // let url = 'http://47.101.146.135:8089/hello/hdsja';
      // this.$http.get(url, {}, {emulateJSON: true}).then((res) => {
      //         console.log(123);
      //          console.log(res);
      //     }
      // // ).catch((res) => {
      // // }
      // );




      this.$axios({
        method: "get",
        url: "/hello/hdsja", // 接口地址
        data: {
          // keyword: "1"   // 传接口参数
        }
      })
          .then(response => {
            console.log(response, "success");   // 成功的返回
          })
          .catch(error => console.log(error, "error")); // 失败的返回






    }
  },
  mounted() {
    this.begin();

  },
  components: {
    HelloWorld
  },


}
</script>




