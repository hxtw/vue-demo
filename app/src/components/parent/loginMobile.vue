<style scope>
  @import '../../../static/css/loginMobile.css'
</style>
<template>
    <div class="container">
      <div class="header">
        <img src="../../../static/img/h1.jpg" >
        <ul>
          <li class="on"><a href="#">登录</a></li>
          <li class="off"><a href="#">注册</a></li>
        </ul>
      </div>
      <div class="content">
        <div class="loginform show">
          <form>
            <input type="text" placeholder="请输入用户名/手机号">
            <input type="password" placeholder="请输入密码">
            <ul>
              <li>
                <input type="checkbox" id="bland1">
                <label for="bland1">记住密码</label>
              </li>
              <li>忘记密码？</li>
            </ul>
            <input type="submit" value="安全登录" >
          </form>
        </div>
        <div class="register hide">
        <div class="m-reg">
          <form>
            <input type="text" placeholder="请输入用户名/手机号"/>
            <input type="password" placeholder="请输入密码"/>
            <input type="email" placeholder="请输入邮箱"/>
            <input type="submit" value="注册"/>
          </form>
        </div>
      </div>
    </div>
    </div>
</template>
<script>

    export default {
        name: '',
        data () {
            return {
            }
        },
    }
</script>
