<template>
  <div>
    <main class="m-back">
      <section class="u-inform">
        <img src="../../static/img/lab.png"/>
        <p>截止目前已有<i>993232</i>人注册信贷圈</p>
      </section>
      <section class="m-form">
        <div class="m-input">
          <input type="text" @click="toShow" :value="checkCity" readonly placeholder="请选择所在城市" />
          <input type="text" placeholder="请输入手机号码" />
          <input class="verify" type="text" placeholder="请输入验证码" />
          <p class="code">获取验证码</p>
        </div>
        <div class="button">立即注册</div>
      </section>
      <div class="agreement">
        <input type="checkbox"/>同意《<a href="">信贷圈用户协议</a>》
      </div>
      <vue-pickers
        :show="show"
        :link="link"
        :columns="columns"
        :selectData="pickData"
        @cancel="close"
        @confirm="confirmFn"></vue-pickers>
    </main>
  </div>
</template>

<script>
  import unit from '../tools/units'
  import vuePickers from 'vue-pickers'
  import {provs_data, citys_data, dists_data} from 'vue-pickers/lib/areaData'
    export default {
        name: "regist",
      components: {
        vuePickers
      },
      data(){
          return{
            isCopy: '',
            res: null,
            show: false,
            columns: 3,
            link: true,
            pickData: {
              data1: provs_data,
              data2: citys_data,
              data3: dists_data
            },
            checkCity:''
          }
      },
      created:function(){
          this.getCity();
      },
      methods:{
        getCity(){
          this.$axios.get(unit.host('cityJson.json')).then(res=>{
            console.log(res)
          });
        },
        close() {
          this.show = false
        },
        confirmFn(val) {
          this.show = false;
          console.log(val);
          this.res = val;
          this.checkCity = val.select1.text + ' ' + val.select2.text + ' ' + val.select3.text;
          this.pickData.default = [val.select1, val.select2, val.select3];
        },
        toShow() {
          this.show = true
        }
      },
    }
</script>

<style scoped>
.m-back{
  background: url("../../static/img/background.png") no-repeat;
  background-size:7.5rem 100%;
  height:13rem;
  font-size:.3rem;
}
  .u-inform{
    background-color:rgba(255,255,255,0.2);
    border-radius: 1rem;
    display:inline-block;
    margin-top:6rem;
    margin-left:.75rem;
    width:6rem;
    height:.5rem;
  }
  .u-inform img{
    width:.4rem;
    height:.35rem;
    float:left;
    margin:.06rem 0 0 .3rem;
  }
  .u-inform p{
    font-size:.25rem;
    line-height:.5rem;
    margin-left:.8rem;
    color:#ffffff;
    letter-spacing: .02rem;
  }
  .u-inform p i{
    color:#ffba14;
    font-style: normal;
  }
  .m-input input {
    display: block;
    width:6.5rem;
    height:1rem;
    margin-top:.3rem;
    margin-left:.55rem;
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    border-radius: .1rem;
    border:none;
    outline: none;
    font-size:.3rem;
    color: #6f6f6f;
    padding-left:.4rem;
  }
  .m-input input::-webkit-input-placeholder{
    font-size:.3rem;
    color:#cccccc;
  }
  .verify{
    position:relative;
  }
  .code{
    color:#678cf8;
    position:absolute;
    top:72.5%;
    left:58%;
    border-left:.01rem solid #cccccc;
    font-weight: bold;
    width:2.1rem;
    text-align: right;
  }
  .button{
    width:6.5rem;
    height:1rem;
    line-height:1rem;
    text-align:center;
    background:linear-gradient(to bottom,#ffc914 30%,#ffa014 70%);
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    border-radius: .1rem;
    color:#ffffff;
    margin:.3rem 0 0 .55rem;
    font-size:.32rem;
    font-weight: bold;
  }
  .agreement{
    text-align: center;
    margin-top:.2rem;
    color:#ffffff;
    opacity: .8;
  }
  .agreement a{
    color:#ffffff;
  }
  .agreement input[type=checkbox]{
    width:.25rem;
    height:.25rem;
    border:.01rem solid #ffffff;
    -webkit-appearance: none;
    outline: none;
    margin-right:.1rem;
  }
.agreement input[type=checkbox]:checked{
  background-color:#01d69e;
}
</style>
