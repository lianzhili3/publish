<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" :active-name="ceshi">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1"  >
              <div @click="cc('1')">
                <Icon type="ios-navigate"></Icon>
                打通前后端
              </div>
            </MenuItem>
            <MenuItem name="2"  >
              <div @click="cc('2')">
                <Icon type="ios-keypad" ></Icon>
                Item 2
              </div>
            </MenuItem>
            <MenuItem name="3"  >
              <div @click="cc('3')">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </div>
            </MenuItem>
            <MenuItem name="4"  >
              <div @click="cc('4')">
                <Icon type="ios-paper"></Icon>
                Item 4
              </div>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
        <MyTeat v-if="ceshi=='1'" />
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; View Design</Footer>
    </Layout>
  </div>
</template>

<script>
import MyTeat from '../../views/MyTest'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    MyTeat,
  },
  data(){
    return {
      ceshi:'1',
      hah:'yuyu'
    }

  },
  methods:{
    cc(name){
      console.log('===', name)
      this.ceshi = name;

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center{
  text-align: center;
}
.dev-run-preview .dev-run-preview-edit{ display: none }

</style>
