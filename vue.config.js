const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    // 端口号
    port:8088,
    // url地址
    host:'localhost',
    // 项目启动浏览器自动打开
    open:true
  },
  transpileDependencies: true
})

// 项目进度：130
