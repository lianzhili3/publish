const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/admin/',
  
  // devServer: {
  //   proxy: {
  //     '/api': {       
  //       // 目标的路径
  //       target: 'http://47.101.146.135:8089/',  //也就是接口地址
  //       // 允许跨域
  //       changeOrigin: true,
  //       // 重写跨域
  //       pathRewrite: {
  //         '^/api': '',
  //          // '': ''
  //       }
  //     }
  //   }
  // },
  
  
  devServer: {
       proxy: 'http://47.101.146.135:8089'
     }, 
     
})
