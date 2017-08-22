<template>
  <a class="m-tabbar-item" v-bind:class="{'is-active':isActive}" @click="pushtoPraents">
    <span class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span>
    <span class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
    <span class="m-tabbar-item-text" v-bind:class="{'is-active':isActive}"><slot></slot></span>
  </a>
</template>

<script>
  export default{
    props: ['id'],
    computed: {
      isActive(){

        if(this.$parent.value===this.id){
          return true;
        } else{
          return false;
        }
      }
    },
    methods:{
      pushtoPraents:function(){
        this.$parent.$emit('input',this.id)
          //这里写跳转
        if (this.id === "tab2")
        {
          location.href = "http://www.baidu.com";
        }
        else  if (this.id === "tab3")
        {
          location.href = "http://www.dylancc.com";
        } 
        else  if (this.id === "tab1")
        {
          location.href = "http://localhost:8083/#/";
        }
      }
    }
  }
</script>

<style >
  .m-tabbar-item{
    flex: 1;
    text-align: center;
  }

  .m-tabbar-item-icon{
    display: block;
    padding-top: 2px;
  }

  img{
    width: 28px;
    height: 28px;
  }
  .m-tabbar-item-text{
      display: block;
      font-size: 10px;
      color: #948e7e;
  }
  .is-active{
    color: #940733;
  }
  a:focus ,a:active ,a:visited ,a:hover{
    text-decoration: none;
  }
</style>

