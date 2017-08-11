// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'

import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min'


// 导入Muit Ui
 import MintUi from 'mint-ui'
//  导入样式
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

// 导入MUI
import MUI from './libs/mui-master/dist/js/mui.min.js'
import './libs/mui-master/dist/css/mui.min.css'
import './libs/mui-master/examples/hello-mui/css/icons-extra.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
