<template>
  <div>
    <header class="header">
      <i class="h-icon"></i>
      <p>基本信息</p>
    </header>
    <main>
      <section class="m-top">
        <div class="money">
          <label>借款金额</label>
          <span><i>{{val2}}</i>元</span>
          <vue-range :min="rmin" :max="rmax" :step="10" v-model="val2" style="width:95%;">
          </vue-range>
        </div>
        <div class="month">
          <label>借款期限</label>
          <span><i>14</i>天</span>
          <i class="u-icon"></i>
        </div>
      </section>
      <section class="m-form">
        <div class="m-input">
          <label>姓名</label>
          <input type="text" name="" placeholder="请输入"/>
          <i class="u-icon"></i>
        </div>
        <div class="m-input">
          <label>身份证</label>
          <input type="text" name="" placeholder="请输入"/>
          <i class="u-icon"></i>
        </div>
        <div class="m-input">
          <label>职业</label>
          <input type="text" name="" placeholder="请选择"/>
          <i class="u-icon"></i>
        </div>
        <div class="m-input">
          <label>职业</label>
          <input type="text" name="" placeholder="请选择"/>
          <i class="u-icon"></i>
        </div>
        <div class="m-input">
          <label>城市</label>
          <input type="text" name="" @click="goCtiy()" readonly placeholder="请选择"/>
          <i class="u-icon"></i>
        </div>
        <div class="m-input">
          <label>城市</label>
          <input type="text" name="" @click="goCtiy()" readonly placeholder="请选择"/>
          <i class="u-icon"></i>
        </div>
      </section>
      <div class="m-button">立即提交</div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
  import VueRange from "vue-range/src/index";

  export default {
    name: "supply",
    components: {VueRange},
    data() {
      return {
        val2:200,
        rmax:1000,
        rmin:100
      }
    },
    created: function () {
    },
    mounted: function () {
    },
    methods: {
      goCtiy() {
        this.$router.push('/loanRepay');
      },
    },
  }
</script>

<style scoped>
  @import "../../static/jRange/jquery.range.css";

  main {
    position: relative;
    width:6.8rem;
    margin:0 auto;
  }

  .m-top {
    background-color: #ffffff;
    padding-top: .8rem;
    padding-bottom: 1rem;
    width:6.15rem;
    margin:0 auto;
    /*margin-left:.7rem;*/
  }

  .m-top label {
    font-size: .28rem;
    color: #999999;
  }

  .money span, .month span {
    font-size: .34rem;
    font-weight: bold;
    margin-left: 2.6rem;
  }

  .money i, .month i {
    font-family: 'DIN Condensed';
    font-size: .9rem;
    color: #465e6b;
    font-style: normal;
    padding-right:.3rem;
  }
  .month {
    margin-top:.25rem;
    border-bottom: 0.01rem solid #e5e5e5;
  }

  .month span {
    /*margin-left: 2.3rem;*/
    display: inline-block;
    width:1.4rem;
    background:url("../../static/img/select-icon.png")no-repeat 1.3rem .4rem;
    background-size:.16rem .26rem;
  }


  .m-form {
    background-color: #ffffff;
    margin-top: .3rem;
    margin-bottom: 1.3rem;
    /*margin-left: .3rem;*/
  }

  .m-input {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 0.01rem solid #e9e9e9;
    margin-top: .3rem;
    display: -webkit-flex;
  }

  .m-input label {
    font-size: .3rem;
    color: #333333;
    width: 2rem;
  }

  .m-input input {
    font-size: .3rem;
    width: 2.5rem;
    height: .36rem;
    outline: none;
    text-align: right;
    margin-left: 1.8rem;
    margin-top: .5rem;
    color: #999999;
  }

  .m-input input::-webkit-input-placeholder {
    font-size: .28rem;
    color: #cccccc;
  }

  .m-input .u-icon {
    width: .12rem;
    height: .22rem;
    background: url('../../static/img/select-icon.png') no-repeat;
    background-size: 100% 100%;
    margin-top: .6rem;
    margin-left: .3rem;
  }
  .m-button {
    font-size: .32rem;
    width: 94%;
    color: #ffffff;
    background-color: #3a4a5a;
    height: .9rem;
    line-height: .9rem;
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    border-radius: .1rem;
    margin-top: .6rem;
    /*margin-left: .25rem;*/
    text-align: center;
    position: fixed;
    bottom: 0rem;
  }
</style>
