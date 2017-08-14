<template>
  <div id="app">
    
    <router-view></router-view>
		<nav class="mui-bar mui-bar-tab">
			<router-link to='/' class="mui-tab-item mui-active" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to='/' class="mui-tab-item" >
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">商品库</span>
			</router-link>
			<router-link to="/" class="mui-tab-item">
				<span class="mui-icon mui-icon-spinner mui-spin"></span>
				<span class="mui-tab-label">报表</span>
			</router-link>
			<router-link to="/" class="mui-tab-item">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">聊天室</span>
			</router-link>
				<router-link to="/" class="mui-tab-item">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    
  </div>
</template>

<script>
export default {
  name: 'app'
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
