<template>
  <div id="app">

    <router-view></router-view>

    <m-tabbar  v-model="select">

		 <m-tabbar-item id='tab1' >
        <img src="./assets/images/tabbar/shou_ye_click@3x.png" alt="" slot="icon-active">
        <img src="./assets/images/tabbar/shou_ye_wei_Not_click@3x.png" alt="" slot="icon-normal">
        首页
      </m-tabbar-item>
     
      <m-tabbar-item id='tab2'>
        <img src="./assets/images/tabbar/gwc-h@3x.png" alt="" slot="icon-normal">
        <img src="./assets/images/tabbar/gwc@3x.png" alt="" slot="icon-active">
        报表
      </m-tabbar-item>

      <m-tabbar-item id='tab3'>
        <img src="./assets/images/tabbar/xx-h@3x.png" alt="" slot="icon-normal">
        <img src="./assets/images/tabbar/xx@3x.png" alt="" slot="icon-active">
        聊天室
      </m-tabbar-item>

      <m-tabbar-item id='tab4'>
        <img src="./assets/images/tabbar/wo_de_icon@3x.png" alt="" slot="icon-normal">
        <img src="./assets/images/tabbar/wo_de_icon_click@3x.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>

</template>

<script>
  import mTabbar from './components/tabbar'
  import mTabbarItem from './components/tabbar-item'
  export default {
  name: 'app',
  components: {
      mTabbar,
      mTabbarItem
    },
    data() {
      return {
        select:"tab1"
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
.m-tabbar{
	z-index:999;
}
</style>
