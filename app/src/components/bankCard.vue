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
      </section>
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
    /*border-bottom: 0.01rem solid #e9e9e9;*/
    margin-top:.3rem;
    border:1px solid red;
  }

  .m-input label {
    font-size: .3rem;
    font-weight:bold;
    color: #333333;
  }
</style>
