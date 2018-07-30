<template>
  <div>
    <header class="header">
      <p>借款详情</p>
      <i class="h-icon"></i>
    </header>
    <section class="banner">
      <div class="u-money">
        <label>借款金额</label>
        <span>25000<i>元</i></span>
      </div>
      <div class="u-month">
        <label>借款期限</label>
        <span>14<i>天</i></span>
      </div>
      <div class="u-residue">
        <label>剩余应还</label>
        <span>25000<i>元</i></span>
      </div>
    </section>
    <secction class="u-strip">
      <i></i>
      <ul>
        <li class="checked">提交申请</li>
        <li class="checked">确认收款</li>
        <li class="checked">发放借款</li>
        <li class="green">还款中</li>
        <li>还款结清</li>
      </ul>
    </secction>
    <section class="m-details">
      <div class="u-block">
        <h3>第二期</h3>
        <div class="u-detail">
          <h5>待还款</h5>
          <p>应还金额：500元</p>
          <p>还&nbsp;&nbsp;款&nbsp;&nbsp;日：2017-12-2</p>
          <div class="button">立即还款</div>
        </div>
      </div>
      <div class="u-block">
        <h3>第一期</h3>
        <div class="u-detail">
          <h5>待还款</h5>
          <p>应还金额：500元</p>
          <p>还&nbsp;&nbsp;款&nbsp;&nbsp;日：2017-12-2</p>
          <div class="button grays">立即还款</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "loanRepay"
    }
</script>

<style scoped>
  .banner{
    background-color:#3a4a5a;
    display:-webkit-flex;
    padding:0.8rem 0 0.8rem 0.5rem;
  }
  .banner label{
    font-size:.26rem;
    color:#ffffff;
    font-weight: bold;
    display:block;
  }
  .banner span{
    font-size:.8rem;
    font-family: "DIN Condensed";
    color:#ffffff;
    font-weight: bold;
    display:block;
    padding-top:.3rem;
  }
  .u-money i,.u-month i, .u-residue i{
    font-size:.3rem;
    font-style: normal;
    padding-left:.2rem;
  }
  .u-money{
    -webkit-flex: 2;
    width:2rem;
    opacity: 0.5;
  }
  .u-month{
    -webkit-flex: 1;
    width:2rem;
    opacity: 0.5;
    border-right:0.01rem solid #ffffff;
    padding-right:.4rem;
    height:1.3rem;
  }
  .u-residue{
    -webkit-flex: 2;
    width:2rem;
    margin-left:.5rem;
  }
  .u-residue label, .u-residue span{
    color:#01d79f;
    opacity: 0.8;
  }
  .u-strip i{
    background:url('../../static/img/flow4.png') no-repeat center center;
    background-size:100% 100%;
    display:block;
    height:.2rem;
    margin-top:-.1rem;
    margin-left:.8rem;
    width:80%;
  }
  .u-strip ul{
    display:-webkit-box;
    -webkit-box-orient: horizontal;
    justify-content: space-between;
    margin-top:.2rem;
    margin-left:.2rem;
  }
  .u-strip ul li{
    font-size:.22rem;
    color:#cccccc;
    font-weight: bold;
    -webkit-box-flex: 1;
    line-height:.54rem;
    padding-top:.08rem;
    text-align:center;
  }
  .u-strip ul li.checked{
    color:#3a4a5a;
  }
  .u-strip ul li.green{
    background:url('../../static/img/detailsoftheloan_progressbar_icon@2x.png') no-repeat center 10%;
    width:1.22rem;
    height:.54rem;
    line-height:.54rem;
    color: #ffffff;
    background-size: 1.2rem 100%;
  }
  .u-block{
    font-size:.26rem;
    font-family: '苹方-简';
    width:6rem;
    margin:.8rem .8rem 0 .5rem;
    border-left: 0.01rem solid #e5e5e5;
  }
  .u-block h3{
    font-size:.32rem;
    color:#6c839b;
    padding-left:.5rem;
  }
  .u-detail{
    margin:.7rem 0 0 1rem;
    position: relative;
  }
  .u-detail h5{
    color:#fb603c;
    font-size:.3rem;
    padding-bottom:.3rem;
  }
  .u-detail p{
    color:#666666;
    padding-top:.1rem;
  }
  .u-detail .button{
    background-color:#3a4a5a;
    color:#ffffff;
    font-size:.28rem;
    width:1.62rem;
    height:.65rem;
    line-height:.6rem;
    text-align:center;
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    border-radius: .1rem;
    position: absolute;
    top:.6rem;
    left:3.5rem;
  }
  .u-detail .grays{
    background-color:#dddddd;
    color:#ffffff;
  }
</style>
