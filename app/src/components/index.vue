<template>
  <div>
    <header>
      <i class="h-icon"></i>
      <p>读秒</p>
    </header>
    <main>
      <section class="b-cont">
        <div class="b-sent">
          <div class="b-head">
            <img src="../../static/img/a1.png"/>
            <h3>1000元～5万元</h3>
          </div>
          <ul>
            <li>额度范围<br/><span>1万～2万</span></li>
            <li>借款期限<br/><span>3～24个月</span></li>
            <li>年利率<br/><span>36%</span></li>
          </ul>
        </div>
      </section>
      <section class="g-explain">
        <div class="m-impower">
          <h4>所需授权</h4>
          <img src="../../static/img/a1.png"/>
          <img src="../../static/img/a2.png"/>
          <img src="../../static/img/a3.png"/>
          <img src="../../static/img/a4.png"/>
        </div>
        <div class="m-impower-two">
          <h4>申请条件</h4>
          <ul>
            <li>22-55周岁</li>
            <li>手机号实名</li>
          </ul>
        </div>
        <div class="m-impower-two">
          <h4>还款方式</h4>
          <ul>
            <li>在线还款</li>
          </ul>
        </div>
      </section>
      <article class="m-cont">
        <ul>
          <li>借款问答</li>
          <li>用户评价</li>
          <li class="checked">机构介绍</li>
        </ul>
        <aside class="u-institution">
          <img src="../../static/img/struc-introd.jpg" />
          <p>· 读秒，是智能金融集团PINTEC旗下的智能信贷技术服务商，我们从极速智能信贷决策引擎开始，已成就全流程智能金融服务体系。</p>
          <p>当市场上充斥各种大数据幻像，我们已把基于海量数据的模型，演化成拥有奇妙能量的“智能金融化”技术产品。当众多能力强大的合作伙伴，渴望进入它们以往未知的消费金融领域，我们已凭技术解决方案助力他们实现更多、收获更多。</p>
        </aside>
      </article>

      <ul class="test">
        <li>123</li>
        <li>456</li>
        <li>789</li>
      </ul>
      <div class="button">马上拿钱</div>
    </main>
  </div>
</template>
<script>
  import unit from '../tools/units'
  import VeeValidate, {Validator} from 'vee-validate'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created: function () {
      this.getList();
    },
    methods: {
      getList() {
        this.$axios.get(unit.host('cityJson.json')).then(res => {
          console.log(res)
        });
      },
      applyCoupon() {
        this.$axios.post(unit.host(''),qs.stringify({data:'123'}),{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{});
      },
    }
  }
</script>
<style scoped>
  header {
    background-color: #3a4a5a;
    height: 1rem;
    line-height: 1rem;
    position: relative;
  }

  header .h-icon {
    width: .22rem;
    height: .38rem;
    background: url('../../static/img/back-icon-white.png') no-repeat;
    background-size: 100% 100%;
    display: block;
    position: absolute;
    top: .32rem;
    left: .3rem;
  }

  header p {
    color: #ffffff;
    font-size: .34rem;
    text-align: center;
  }
  .b-cont{
    background: linear-gradient(to bottom,#3a4a5a 50%, #eaeaea 50%);
    height:4.25rem;
  }
  .b-sent{
    width:7rem;
    height:4rem;
    background-color:#ffffff;
    border-radius: .1rem;
    margin-left:.25rem;
    margin-bottom:.25rem;
    box-shadow:1px 8px 10px #e2e2e2;
  }
  .b-sent ul li{
    font-size:.24rem;
    color:#999999;
    font-weight: bold;
    width:1.8rem;
    display:-webkit-box;
    -webkit-box-pack: baseline;
    -webkit-box-align: baseline;
  }
  .b-cont ul li:nth-child(2){
    margin-left:.55rem;
  }
  .b-cont ul li:nth-child(3){
    padding-left:1rem;
  }
  .b-sent ul li span{
    font-size: .36rem;
    color:#01cf99;
  }
  .b-head{
    padding-top:.38rem;
  }
  .b-head img{
    width:.9rem;
    height:.9rem;
    /*border-radius: 50%;*/
    float:left;
    margin-top:.38rem;
    margin-left:.5rem;
  }
  .b-head h3{
    font-size:.66rem;
    padding-top:.4rem;
    padding-left:.1rem;
    display:inline-block;
  }
  .b-cont ul{
    margin-top:.52rem;
    margin-left:.5rem;
  }
  .b-cont ul li{
    float: left;
  }

  .g-explain{
    background-color:#ffffff;
    padding-bottom:.5rem;
  }
  .g-explain .m-impower, .m-impower-two{
    margin-left:.25rem;
  }

  .g-explain .m-impower h4, .m-impower-two h4{
    font-size:.36rem;
    padding-top:.7rem;
    color:#333333;
    font-weight: bold;
    clear: both;
  }
  .m-impower img{
    float:left;
    margin-top:.35rem;
    margin-left:.3rem;
  }
  .m-impower-two ul{
    margin-top:.3rem;
  }
  .m-impower-two ul li{
    font-size:.28rem;
    color:#999999;
    list-style: inside;
  }
  .m-cont{
    background-color:#ffffff;
    margin-top:.3rem;
    padding-bottom:1.2rem;
  }
  .m-cont ul{
    margin-left:.25rem;
    padding-top:.4rem;
  }
  .m-cont ul li{
    font-size:.28rem;
    float:left;
    color:#999999;
    font-weight: bold;
    margin-left:.4rem;
  }
  .m-cont ul li:nth-child(n+2){
    margin-left:1.5rem;
  }

  .u-institution img{
    margin-top:.3rem;
    margin-left:.25rem;
    width:92%;
  }
  .u-institution p{
    font-size:.28rem;
    color:#999999;
    width:6.5rem;
    margin-left:.45rem;
    text-align:justify;
    text-align-last:justify;
  }
  .m-cont ul li.checked{
    color:#01cf99;
  }

  .button{
    background-color:#3a4a5a;
    border-radius: .1rem;
    width:95%;
    height:.9rem;
    line-height:.9rem;
    font-size:.32rem;
    color:#ffffff;
    text-align: center;
    margin-left:.25rem;
    position:fixed;
    bottom:0;
  }
  .test{
    display: -webkit-box;
    -webkit-box-orient: horizontal;/*横排*/
    /*-webkit-box-pack: justify;*/
    padding-bottom:1rem;

  }
  .test li{
    border:1px solid red;
    -webkit-box-flex:1;
  }
  .test li:nth-child(2){
    -webkit-box-flex: 2;
  }
</style>
