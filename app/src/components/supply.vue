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
        </div>
        <vue-range :min="rmin" :max="rmax" :step="10" :barHeight="13" v-model="val2" style="width:95%;">
        </vue-range>
        <div class="month">
          <label>借款期限</label>
          <span @click="toShow('2')"><i>{{res}}</i>天</span>
          <vue-pickers
            :show="show"
            :columns="columns"
            :defaultData="defaultData"
            :selectData="pickData"
            @cancel="close"
            @confirm="confirmFn"></vue-pickers>
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
          <input type="text" @click="toShow('1')" :value="job" name="" placeholder="请选择"/>
          <i class="u-icon"></i>
        </div>
        <div class="m-input">
          <label>职业</label>
          <input type="text" name="" placeholder="请选择"/>
          <i class="u-icon"></i>
        </div>
        <div class="m-input">
          <label>城市</label>
          <input type="text" name="" readonly placeholder="请选择"/>
          <i class="u-icon"></i>
        </div>
        <div class="m-input">
          <label>城市</label>
          <input type="text" name="" readonly placeholder="请选择"/>
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
  import vuePickers from 'vue-pickers';
  export default {
    name: "supply",
    components: {
      VueRange,
      vuePickers
    },
    data() {
      return {
        val2:3040,
        rmax:150009,
        rmin:1000,
        show: false,
        columns: 1,
        defaultData:[{
          text:14,
          value:14
        }],
        pickData:{},
        res:"14",
        job:'',
        typeIs:''
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
      close() {
        this.show = false
      },
      confirmFn(val) {
        this.show = false;
        if(this.typeIs == '1'){
          this.job = val.select1.text;
        }else {
          this.res = val.select1.text;
        }
        this.defaultData = [val.select1];
        console.log(this.defaultData)
      },
      toShow(type) {
        let that = this;
        this.show = true;
        that.typeIs = type;
        if(type == '1') {
          that.pickData = {
            data1: [
              {
                text: '测试1',
                value: '1-1'
              },
              {
                text: '测试2',
                value: '1-2'
              },
              {
                text: '测试3',
                value: '1-3'
              },
              {
                text: '测试4',
                value: '1-4'
              },
            ]
          }
        }else{
          that.pickData={
            data1: [
              {
                text:14,
                value:14
              },
              {
                text:18,
                value:18
              },
              {
                text:22,
                value:22
              },
              {
                text:30,
                value:30
              },
            ]
          }
        }
        }
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
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .money{
    max-width: 7.5rem;
    display:flex;
  }

  .money span, .month span {
    font-size: .34rem;
    font-weight: bold;
    display: inline-block;
    margin-left:auto;
  }

  .money i, .month i {
    font-family: 'DIN Condensed';
    font-size: .9rem;
    color: #465e6b;
    font-style: normal;
    padding-right:.2rem;
  }
  .month {
    margin-top:.25rem;
    border-bottom: 0.01rem solid #e5e5e5;
    display:flex;
  }

  .month span {
    display: inline-block;
    /*width:1.8rem;*/
    background:url("../../static/img/select-icon.png")no-repeat right center;
    background-size:.16rem .26rem;
    padding-right:.3rem;
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
    display: flex;
    justify-content: space-between;
  }

  .m-input label {
    font-size: .3rem;
    color: #333333;
    width: 2rem;
  }

  .m-input input {
    font-size: .3rem;
    width: 2.5rem;
    height: .56rem;
    outline: none;
    text-align: right;
    margin-left: 1.5rem;
    margin-top: .23rem;
    color: #333333;
  }

  .m-input input::-webkit-input-placeholder {
    font-size: .28rem;
    color: #cccccc;
  }

  .m-input .u-icon {
    width: .12rem;
    height: .22rem;
    background: url('../../static/img/select-icon.png') no-repeat right center;
    /*background-size: 100% 100%;*/
    margin-top: .45rem;
    /*margin-left: .3rem;*/
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
