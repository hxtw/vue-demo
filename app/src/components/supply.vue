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
          <span><i>1000</i>元</span>
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
          <label>职业</label>
          <input type="text" name="" placeholder="请选择"/>
          <i class="u-icon"></i>
        </div>
      </section>
      <div class="m-button">立即提交</div>
    </main>
  </div>
</template>

<script>
  import jrangess from '../../static/jRange/jquery.range'
  export default {
      name: "supply",
      data(){return{}},
      created:function(){},
      mounted:function(){
        this.rangeSliding();
      },
      methods:{
        rangeSliding(){
          let that = this;
          $('.single-slider').jRange({
            from: 1000,//最小值
            to: 100,//最大值
            step: 10,//增量
            scale: [],//刻度条
            format: '%s',
            width: 300,
            showLabels: true,
            showScale: true,
            ondragend: function (e) {
            },
          });
        },
      },
    }
</script>

<style scoped>
  @import "../../static/jRange/jquery.range.css";
  main{
    position:relative;
  }
  .m-top{
    background-color:#ffffff;
    padding-top:.8rem;
    padding-bottom:1rem;

  }
  .m-top label{
    font-size:.28rem;
    color:#999999;
    padding-left:.8rem;
  }
  .money span, .month span{
    font-size:.34rem;
    font-weight: bold;
    margin-left:1.8rem;
  }
  .money i, .month i{
    font-size:.9rem;
    color:#465e6b;
    font-style:normal;
    padding-right:.3rem;
  }
  .month span{
    margin-left:2.3rem;
    position:relative;
  }
  .month .u-icon{
    width:.12rem;
    height:.22rem;
    background:url('../../static/img/select-icon.png') no-repeat;
    background-size:100% 100%;
    position:absolute;
    top:2.9rem;
    left:6.4rem;
  }
  .month{
    border-bottom:0.01rem solid #e5e5e5;
  }
  .m-form{
    background-color:#ffffff;
    margin-top:.3rem;
    margin-left:.3rem;
  }
  .m-input {
    height: 1rem;
    line-height:1rem;
    border-bottom: 0.01rem solid #e9e9e9;
    margin-top:.3rem;
    display:-webkit-flex;
  }

  .m-input label{
    font-size: .3rem;
    color: #333333;
    width:2rem;
  }
  .m-input input{
    font-size:.3rem;
    width:2.5rem;
    height:.36rem;
    outline: none;
    text-align: right;
    margin-left:1.8rem;
    margin-top:.5rem;
    color:#999999;
  }
  .m-input input::-webkit-input-placeholder{
    font-size:.28rem;
    color:#cccccc;
  }
  .m-input .u-icon{
    width:.12rem;
    height:.22rem;
    background:url('../../static/img/select-icon.png') no-repeat;
    background-size:100% 100%;
    margin-top:.6rem;
    margin-left:.3rem;
  }
  .m-button{
    font-size:.32rem;
    width:94%;
    color:#ffffff;
    background-color: #3a4a5a;
    height:.9rem;
    line-height:.9rem;
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    border-radius: .1rem;
    margin-top:.6rem;
    margin-left:.25rem;
    text-align: center;
    position:fixed;
    bottom:0;
  }
</style>
