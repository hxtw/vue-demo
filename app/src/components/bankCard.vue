<template>
  <div>
    <header class="header">
      <i class="h-icon"></i>
      <p>绑定银行卡</p>
    </header>
    <main>
      <section class="u-warn">
        <p>为了您能顺利收到借款，请绑定银行卡</p>
      </section>
      <section class="m-form">
        <div class="m-input">
          <label>持卡人</label>
          <input type="text" name="username" placeholder="请输入持卡人"/>
        </div>
        <div class="m-input">
          <label>身份证号</label>
          <input type="text" name="username" placeholder="请输入身份证号"/>
        </div>
        <div class="m-input">
          <label>银行卡号</label>
          <input type="text" name="username" placeholder="请输入银行卡号"/>
        </div>
        <div class="m-input">
          <label>预留手机号</label>
          <input type="text" name="username" placeholder="请输入预留手机号"/>
        </div>
        <div class="m-input">
          <label>验证码</label>
          <input type="text" name="username" placeholder="请输入验证码"/>
          <span class="v-code">获取验证码</span>
        </div>
      </section>
      <div class="m-button">验证账号</div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "bankCard"
  }
</script>

<style scoped>
  .u-warn {
    background-color: #fffce7;
    font-size: .28rem;
    font-weight: bold;
    color: #ff8a32;
    border-top: 0.01rem solid #e9e9e9;
    border-bottom: 0.01rem solid #ffe47e;
    height: .85rem;
    line-height: .85rem;
    text-align: center;
  }
  .m-form{
    background-color:#ffffff;
  }
  .m-input {
    height: 1.3rem;
    line-height:1.3rem;
    border-bottom: 0.01rem solid #e9e9e9;
    margin-top:.3rem;
    padding-left:.3rem;
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
    margin-left:2.3rem;
    margin-top:.5rem;
    color:#999999;
  }
  .m-form .m-input:last-child input{
    margin-left:0;
    margin-top:.45rem;
  }
  .m-input .v-code {
    font-size:.28rem;
    color:#01cf99;
    margin-left:.5rem;
    margin-top:.5rem;
    border-left:0.01rem solid #eeeeee;
    padding-left:.3rem;
    height:.3rem;
    line-height:.3rem;
  }

  .m-input input::-webkit-input-placeholder{
    font-size:.28rem;
    color:#cccccc;
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
  }
</style>
