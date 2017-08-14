<template>  
   <div class="template">
      <header>
          <p>代理系统</p>
          <p>3000</p>
          <p>今日总效果预估（元）</p>
          <p>今日订单数 <span>60</span> 笔</p>
      </header>
      <div class="nav">
          <div class="nav_left">
             <span>上月总可结算收入(元)</span><span>60000</span>
          </div>
          <div class="nav_left nav_right">
             <span>上月总效果预估(元)</span><span>60000</span>
          </div>
      </div>

      <div class="message">
         <div class="message_title">我的信息 </div>
         <div class="message_left">
            <p> 我的提现</p>
            <p>5000</p>
            <p>待提现（元）</p>
         </div>
         <div class="message_left message_right">
            <p> 我的订单</p>
            <p>5000</p>
            <p>付款（笔）</p>
         </div>
      </div>

      <div class="data">
         <div class="data_title">代理人数据</div>

         <div class="mui-slider ">
		        <div class="mui-slider-group mui-slider-loop">
		            <div class="mui-slider-item mui-slider-item-duplicate">
		                <ul class="mui-table-view mui-grid-view data_ul data_ul01">
		                    <li class="mui-table-view-cell mui-media mui-col-xs-6 active">
                        <router-link to="/myAgentAll/myAgent">
                              <p>120</p>
                              <p>我的代理人</p>
                        </router-link>
                            
                        </li>
		                     <li class="mui-table-view-cell mui-media mui-col-xs-6">
                               <p>20</p>
                              <p>待审核</p>
                        </li>
                          <li class="mui-table-view-cell mui-media mui-col-xs-6">
                               <p>5</p>
                               <p>今日审核</p>
                        </li>
		                </ul>
		            </div>
		       </div>
		    </div>

         <div class="add" style="line-height:0.5rem">添加代理人</div>
      </div>
      

      <div class="data buy">
         <div class="data_title">购买代理人</div>



  <div class="mui-slider ">
		        <div class="mui-slider-group mui-slider-loop">
		            <div class="mui-slider-item mui-slider-item-duplicate">
		                <ul class="mui-table-view mui-grid-view data_ul data_ul02">
		                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                              <p><span>20</span>元</p>
                              <p><span>1</span>个代理人权限</p>
                        </li>
		                     <li class="mui-table-view-cell mui-media mui-col-xs-6">
                               <p><span>200</span>元</p>
                                <p><span>10</span>个代理人权限</p>
                        </li>
                          <li class="mui-table-view-cell mui-media mui-col-xs-6">
                               <p><span>400</span>元</p>
                              <p><span>20</span>个代理人权限</p>
                        </li>
		                </ul>
		            </div>
		       </div>
		    </div>
        
         <div class="add">已经拥有10个代理人权限</div>
      </div>
   </div>
</template>  
<script type=es6>
import $ from "jquery";
  export default{
    data(){
      return{
       
      }
    },
     created() {

          
        },
    methods:{
      toggle:function(){
         $(".data_ul01 li").click(function(){
           console.log
           $(this).addClass('active').siblings("li").removeClass('active')
         })
      }
    },
    
     mounted(){
         this.toggle();

      mui('.mui-slider').scroll({
	      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
       });
    }
    
  }
</script>
<style scope>
    @import '../assets/css/base.css';
    .template{
      max-width:750px;
      min-width:300px;
      width:100%;
      margin:0 auto;
      padding-bottom:50px;
      
    }
    header{
      width:100%;
      height:4.3rem;
      background-image: radial-gradient(50% 93%, #2E6CCE 0%, #3D8CEE 93%);
     padding-top:0.5rem;
    }
    header p{
      color:#FFFFFF;
      text-align:center;
    }
    header p:nth-child(1){
      font-size:0.34rem;
      margin-bottom:0.2rem;
    }
    header p:nth-child(2){
      font-size: 1.4rem;
    }
     header p:nth-child(3){
      font-size: 0.3rem;
      opacity: 0.6;
      margin-bottom:0.2rem;
    }
    header p:nth-child(4){
      font-size:0.26rem;
    }
     header p:nth-child(4) span{
       font-size:0.4rem
     }

    .nav_left{
      width:50%;
      height:1.26rem;
     padding-top:0.32rem;
         padding-left:0.2rem;
      float:left;
      border-right:1px solid #ddd;
      border-bottom:1px solid #ddd;
      background:#FFFFFF;
    }
    .nav_right{
      border:none;
       border-bottom:1px solid #ddd;
    }
    .nav_left span:nth-child(1){
      width:1.7rem;
      height:0.64rem;
      display:block;
      float:left;
      text-align:right;
      margin-right:0.12rem;
    }
      .nav_right span:nth-child(1){
      width:1.5rem;
      text-align:right;
    }
    .nav_left span:nth-child(2){
      font-size: 0.48rem;
      color: #3C82DC;
       float:left;
       
    }
    .message{
      height:2.62rem;
      background: #FFFFFF;
      width:100%;
      border: 1px solid #ECECEC;
      padding-left:0.2rem;
      padding-top:0.1rem;
      margin-top:0.2rem;
    }
    .message_title {
      opacity: 0.5;
      text-align:left;
      font-size: 0.24rem;
      color: #404040;
    }

  .message .message_left{
    width:3.32rem;
    height:1.74rem;
    background-image: linear-gradient(-46deg, #C1B581 0%, #F6EA96 100%);
    box-shadow: 0 0 6px 0 rgba(202,202,202,0.52);
    float:left;
    margin-right:0.3rem;
    border-radius: 4px;
  }

  .message .message_left p:nth-child(1){
    font-size:0.22rem;
    color: #FFFFFF;
    text-align:left;
    margin-top:0.1rem;
    margin-left:0.16rem;
  }
  .message .message_left p:nth-child(2){
    font-size: 0.6rem;
      color: #FFFFFF;
  }
  .message .message_left p:nth-child(3){
   font-size: 0.22rem;
   color: #FFFFFF;
   text-align:right;
  }

 .message  .message_right{
   background-image: linear-gradient(0deg, #FDFDFD 0%, #FFFFFF 100%);
 }
  .message  .message_right p:nth-child(1), .message  .message_right p:nth-child(2), .message  .message_right p:nth-child(3){
   color: #404040;
  }

.data{
   width:100%;
   height:3.54rem;
   background:#FFFFFF;
   
   padding-top:0.1rem;
   margin-top:0.2rem;
   overflow:hidden;
   border:1px solid #ECECEC;
}

.data .data_title{
   opacity: 0.5;
   text-align:left;
   font-size: 0.24rem;
   color: #404040;
   padding-left:0.2rem;
}
.data  .data_ul{
  overflow:hidden;
  width:12.86rem;
  margin-bottom:0.3rem;
  margin-top:0.12rem;
  padding-left:0.2rem;


}


.mui-table-view.mui-grid-view .mui-table-view-cell {
    font-size: 17px;
    display: inline-block;
    margin-right: 0.4rem;
    padding: 10px 0 0 0px;
    text-align: center;
    vertical-align: middle;
    
   
}
.data .data_ul02 .mui-table-view-cell{
   background-image: linear-gradient(135deg, #B3B3B3 6%, #D2D1D1 100%);
}
.data .data_ul02 .mui-table-view-cell p:nth-child(2){
   
       background-image: linear-gradient(135deg, #BEBEBE 6%, #c8c8c8 100%);
       line-height: 0.6rem;
       font-size:0.2rem;
}
.data .data_ul02 .mui-table-view-cell p:nth-child(2) span{
    font-size:0.32rem;
}


.data  .data_ul li{
    float:left;
    width:2.72rem;
    height:1.74rem;
    margin-right:0.4rem;
    background-image: linear-gradient(0deg, #FDFDFD 0%, #FFFFFF 100%);
    box-shadow: 0 0 6px 0 rgba(202,202,202,0.52);
    border-radius: 4px;  
    cursor: pointer;
}
.data .data_ul li p:nth-child(1){
  font-size:0.6rem;
  color: #404040;
  margin-top:0.15rem;
  margin-bottom:0.3rem;
}
.data .data_ul li.active{
  background-image: linear-gradient(-135deg, #2694FF 0%, #1970E5 100%);
  
}
.data .data_ul li.active p {
  color:#FFFFFF;
}

.data .add{
  height:0.9rem;
  line-height:0.5rem;
  border-top:1px solid #ECECEC;
  opacity: 0.7;
  font-size: 0.28rem;
  color: #404040;
}

.buy  .data_ul li{
  background-image: linear-gradient(-135deg, #B2B2B2 6%, #D2D1D1 100%);
}

.buy .data_ul li p:nth-child(1){
  font-size:0.36rem;
 
}
.buy .data_ul li p:nth-child(1) span {
  font-size:0.6rem;
}

.buy .data_ul li p:nth-child(1){
  color: #ffffff;
}

.buy .data_ul li p:nth-child(2){
  color: #ffffff;
}
</style>