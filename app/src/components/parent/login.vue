<style scoped>
  @import "../../../static/css/login.css";
</style>
<template>
    <div>
      <h1>登录表单</h1>
      <div class="container w3layouts agileits" v-model="sub">
        <div class="login w3layouts agileits">
          <h2>登 录</h2>
          <form @submit.prevent="getSub">
            <input type="text" name="" v-model="sub.name"  placeholder="用户名" />
            <!--<input type="text" placeholder="用户名"/>-->
            <input type="password"v-model="sub.password"  placeholder="密码"/>
          <ul class="tick w3layouts agileits">
            <li>
              <input type="checkbox" id="brand1" value=""/>
              <label for="brand1"><span></span>记住我</label>
            </li>
          </ul>
          <div class="send-button w3layouts agileits">
              <input type="submit" value="登 录"/>
          </div>
          </form>
          <a href="#">忘记密码</a>
          <div class="social-icons w3layouts agileits">
            <p>-其他登录方式-</p>
            <ul>
              <li class="qq"><a href="#">
                <span class="icons w3layouts agileits"></span>
                <span class="text w3layouts agileits">QQ</span></a></li>
              <li class="weixin w3ls"><a href="#">
                <span class="icons w3layouts"></span>
                <span class="text w3layouts agileits">微信</span></a></li>
              <li class="weibo aits"><a href="#">
                <span class="icons agileits"></span>
                <span class="text w3layouts agileits">微博</span></a></li>
              <div class="clear"> </div>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
        <div class="copyrights">Collect from <a href="http://www.cssmoban.com/" >企业网站模板</a></div>
        <div class="register w3layouts agileits">
          <h2>注 册</h2>
          <form>
            <input type="text" name="username" placeholder="用户名"/>
            <input type="password" name="password" placeholder="密码"/>
            <input type="text" name="email" placeholder="邮箱"/>
            <input type="text" name="mobile" placeholder="手机号"/>
            <div class="send-button w3layouts agileits">
                <input type="submit" value="免费注册">
            </div>
            <div class="clear"></div>
          </form>
        </div>
        <div class="clear"></div>
      </div>
      <div class="footer w3layouts agileits">
        <p>Copyright &copy; More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
      </div>
    </div>
</template>
<script>

    export default {
        name: 'login',
        props:{

        },
        data () {
            return {
              sub:{
                name:'',
                password:''
              }
            }
        },
      created:function(){
      },
      methods:{
          getSub:function(){
              let that = this;
            console.log(that.sub)
          }
      }
    }
</script>

