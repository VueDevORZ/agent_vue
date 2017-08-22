<template>
    <div class="template">
        <mt-header title="登录">
            <router-link to="/" slot="left">
                <mt-button>x</mt-button>
            </router-link>
        </mt-header>
        <div class="login_form">
            <div class="form_top clearfix">
                <div class="top_left active">
                    手机号登录
                </div>
                <div class="top_left top_right">
                    短信快捷登录
                </div>
            </div>
            <p class="phone"><input type="text" placeholder="手机号"></p>
            <p class="password"><input type="text" placeholder="登录密码"></p>
            <p class="verify" style="display:none"><input type="text" placeholder="验证码"></p>
        </div>
    </div>
</template>
<script type=es6>
    export default {
        data() {
            return {
            }
        },
        mounted(){
 this.toggle();
        },
        created() {
           
        },
        methods: {
            toggle: function() {
                $(".top_left").click(function() {
                    $(this).addClass('active').siblings("div").removeClass('active')
                })
            }
        }
    }
</script>
<style lang="" scoped>
    @import '../assets/css/base.css';
    .template {
        background: #ffffff;
    }
    header {
        background: #FAFAFA;
        color: #333;
        font-size: 17px;
        color: #333333;
        letter-spacing: 0;
    }
    .top_left {
        width: 50%;
        height: 1rem;
        line-height: 1rem;
        float: left;
        text-align: center;
        border-bottom: 1px solid #EDEDED;
        margin-top: 1.48rem;
        font-size: 15px;
          font-weight: 700;
    }
    .top_left.active {
        border-bottom: 2px solid #E53E42;
        color: #E53E42;
      
    }
    .phone,
    .password,
    .verify {
        border-bottom: 1px solid #EDEDED;
    }
    .phone input,
    .password input,
    .verify input {
        height: 56px;
        padding-left: 12px;
        border: none;
        margin-bottom: 0px;
        line-height: 56px;
    }
</style>