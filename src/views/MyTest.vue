<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar{
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.dev-run-preview .dev-run-preview-edit{ display: none }
</style>
<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template #title>
            <Icon type="ios-navigate"></Icon>
            基础功能测试
          </template>
          <MenuItem name="1-1" ><div @click="trantest('1-1')"> get获取 </div></MenuItem>
          <MenuItem name="1-2"><div @click="trantest('1-2')"> post操作 </div></MenuItem>
          <MenuItem name="1-3"><div @click="trantest('1-3')"> delete </div></MenuItem>
          <MenuItem name="1-4"><div @click="trantest('1-4')"> put </div></MenuItem>
        </Submenu>
        <Submenu name="2">
          <template #title>
            <Icon type="ios-keypad"></Icon>
            Item 2
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template #title>
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>

        <Card style="height: 600px"  v-if="tabvalue=='1-1'">
            <TestGet />
        </Card>
        <Card style="height: 600px" v-if="tabvalue=='1-2'">
          <TestPost  />
        </Card>
      </Content>
    </Layout>
  </div>
</template>










<script>
import TestGet from './TestGet'
import TestPost from './TestPost'

export default {
  data(){
    return{
      name: "MyTest",
      tabvalue:'',
    }

  },
  components: {
    TestGet,
    TestPost,
  },


  methods:{
     trantest(tabvalue){
       this.tabvalue = tabvalue

}

  }

}
</script>
