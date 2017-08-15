<template>
  <div id="app">

    <router-view></router-view>

		<nav class="mui-bar mui-bar-tab">
			<router-link to='/' class="mui-tab-item mui-active" >
			  <img src="./assets/images/tabbar/shou_ye_click@3x.png" alt="" slot="icon-active">
        <img src="./assets/images/tabbar/shou_ye_wei_Not_click@3x.png" alt="" slot="icon-normal">
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to='/' class="mui-tab-item" >
				 <img src="./assets/images/tabbar/gwc-h@3x.png" alt="" slot="icon-normal">
        <img src="./assets/images/tabbar/gwc@3x.png" alt="" slot="icon-active">
				<span class="mui-tab-label">商品库</span>
			</router-link>
			<router-link to="/" class="mui-tab-item">
				<span class="mui-icon mui-icon-spinner mui-spin"></span>
				<span class="mui-tab-label">报表</span>
			</router-link>
			<router-link to="/" class="mui-tab-item">
			  <img src="./assets/images/tabbar/xx-h@3x.png" alt="" slot="icon-normal">
        <img src="./assets/images/tabbar/xx@3x.png" alt="" slot="icon-active">
				<span class="mui-tab-label">聊天室</span>
			</router-link>
				<router-link to="/" class="mui-tab-item">
			 <img src="./assets/images/tabbar/wo_de_icon@3x.png" alt="" slot="icon-normal">
        <img src="./assets/images/tabbar/wo_de_icon_click@3x.png" alt="" slot="icon-active">
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script type=es6>
  
  export default {
    data() {
      return {
       
        }
      }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
