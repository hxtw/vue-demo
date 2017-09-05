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
          <form @submit.prevent="getSub">
            <input type="text" v-model="sub.name" placeholder="请输入用户名/手机号">
            <input type="password" v-model="sub.password" placeholder="请输入密码">
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
        <div class="another">
          <h1><span></span>使用第三方账号登录<span></span></h1>
          <ul>
            <li><img src="../../../static/img/QQ.png"></li>
            <li><img src="../../../static/img/weixin.png"></li>
            <li><img src="../../../static/img/weibo.png"></li>
          </ul>
        </div>
    </div>
    </div>
</template>
<script>
    import {required,minLength} from 'vuelidate/lib/validators'
    import validate from '../../tools/validate'
    export default {
      name: '',
      data () {
        return {
          sub:{
            name:'',
            password:''
          }
        }
      },
      validations:{
        sub:{
          name:{
            required,
            minLength:minLength(10)
          }
        }
      },
      methods:{
        getSub:function(){
            let that = this;

          if(!validate.name(that.sub.name)){
            console.log("用户名不能为空");
            return false;
          }
          if(!validate.password(that.sub.password)){
            console.log("密码不能为空");
            return false;
          }
          window.location.href = "#/parent/login"
        }
      }
    }
</script>
