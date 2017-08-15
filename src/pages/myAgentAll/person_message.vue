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
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media">
                <router-link to="/myAgentAll/personAgent" class="mui-navigate-right">
                    <div class="mui-media-body">
                        提现
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a class='mui-navigate-right' href="javascript:;">
                    <div class="mui-media-body">
                       抽成
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right">
                    <div class="mui-media-body">
                       订单
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

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
    header {
        width: 100%;
        height: 4.3rem;
        background-image: radial-gradient(50% 93%, #2E6CCE 0%, #3D8CEE 93%);
        padding-top: 0.5rem;
    }
    header p {
        color: #FFFFFF;
        text-align: center;
    }
    header p:nth-child(1) {
        font-size: 0.34rem;
        margin-bottom: 0.2rem;
    }
    header p:nth-child(2) {
        font-size: 1.2rem;
    }
    header p:nth-child(3) {
        font-size: 0.3rem;
        opacity: 0.6;
        margin-bottom: 0.2rem;
    }
    header p:nth-child(4) {
        font-size: 0.26rem;
    }
    header p:nth-child(4) span {
        font-size: 0.4rem
    }
    .nav_left {
        width: 50%;
        height: 1.26rem;
        padding-top: 0.32rem;
        padding-left: 0.2rem;
        float: left;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        background: #FFFFFF;
    }
    .nav_right {
        border: none;
        border-bottom: 1px solid #ddd;
    }
    .nav_left span:nth-child(1) {
        width: 1.7rem;
        height: 0.64rem;
        display: block;
        float: left;
        text-align: right;
        margin-right: 0.12rem;
    }
    .nav_right span:nth-child(1) {
        width: 1.5rem;
        text-align: right;
    }
    .nav_left span:nth-child(2) {
        font-size: 0.48rem;
        color: #3C82DC;
        float: left;
    }

    .mui-table-view{
        margin-top:10px;
    }
    .mui-media-body{
        text-align:left;
    }
</style>