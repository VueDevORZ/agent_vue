// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import $ from 'jquery'

import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'


// 导入Muit Ui
import MintUi from 'mint-ui'
//  导入样式
import 'mint-ui/lib/style.css'
// 导入MUI
import MUI from './libs/mui-master/dist/js/mui.min.js'
import './libs/mui-master/dist/css/mui.min.css'
import './libs/mui-master/examples/hello-mui/css/icons-extra.css'

Vue.use(MintUi)


// 导入vue-resource组件
let VueResource = require('vue-resource');
// 注册vue-resource组件
Vue.use(VueResource);
// Vue.http.options.emulateJSON = true;



// 导入moment处理日期
import moment from 'moment'
// 创建处理日期的过滤器
Vue.filter('fmtData', function (input, pattern) {
    return moment(input).format(pattern);
});
// // Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
