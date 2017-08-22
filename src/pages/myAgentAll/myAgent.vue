<template>
  <div class="template">
    <mt-header title="我的代理人">
      <router-link to="/" slot="left">
        <mt-button icon="back" ></mt-button>
      </router-link>
      
    </mt-header>
    <div class="search">
      <input class="search_box" placeholder="代理人">
      <i></i>
    </div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/myAgentAll/personAgent" class="mui-navigate-right">
          <div class="mui-media-body">
            唐永宣
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a class='mui-navigate-right' href="javascript:;">
          <div class="mui-media-body">
            草蜢被
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a class="mui-navigate-right">
          <div class="mui-media-body">
            吕迪
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="" scoped>
  @import '../../assets/css/base.css';
  .template {
    max-width: 750px;
    min-width: 300px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 50px;
  }
  .mint-header {
    background-image: linear-gradient(135deg, #2694FF 0%, #1970E5 100%);
  }
  .search {
    background-image: linear-gradient(135deg, #2694FF 0%, #1970E5 100%);
    height: 1rem;
  }
  .search_box {
    width: 6.86rem;
    height: 0.6rem;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 0 auto;
    padding-left: 3rem;
  }
  .mui-media-body {
    overflow: hidden;
    text-align: left;
  }
  .mint-header-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
</style>
