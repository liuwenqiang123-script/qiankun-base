import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import {registerMicroApps,start} from 'qiankun';
const apps = [
  {
    name:'vueApp',//应用的名字
    entry:'//localhost:10000',//默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域）fetch
    container:'.vue',//容器名
    activeRule:'/vue',//激活的路径
    props:{a:1}
  },
  {
    name:'reactApp',//应用的名字
    entry:'//localhost:20000',//默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域）fetch
    container:'.react',//容器名
    activeRule:'/react'//激活的路径
  },
  {
    name:'saas',//应用的名字
    entry:'//localhost:8081',//默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域）fetch
    container:'.saas',//容器名
    activeRule:'/saas'//激活的路径
  },
]
registerMicroApps(apps);//注册应用
start();//开启
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
