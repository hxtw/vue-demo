<template>
  <div class="main">
    <header class="header">
      <p>补充信息填写</p>
      <i class="h-icon"></i>
    </header>
    <div class="f-content">
      <form @submit.prevent="applyCoupon" class="">
        <div class="f-block">
          <label class="f-title">公司名称</label>
          <p class="f-input">
            <input v-model="subData.company" v-validate="'required|company'" name="company" :class="" type="text"
                   placeholder="请输入公司名称"><i class="f-icon"></i>
            <span v-show="errors.has('company')" class="error">{{ errors.first('company') }}</span>
          </p>
        </div>
        <div class="f-block">
          <label class="f-title">常用邮箱</label>
          <p class="f-input">
            <input v-model="subData.email" v-validate="'required|email'" name="email"  :class="" type="text"
                   placeholder="请输入邮箱"><i class="f-icon"></i><br>
            <span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span>
          </p>
        </div>
        <div class="f-block">
          <label class="f-title">手机号</label>
          <p class="f-input">
            <input v-model="subData.phone" v-validate="'required|phone'" name="phone" :class="" type="text"
                   placeholder="请输入手机号"><i class="f-icon"></i><br>
            <span v-show="errors.has('phone')" class="error">{{ errors.first('phone') }}</span>
          </p>
        </div>
        <p class="">
          <button type="submit" class="" name="button">确定</button>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
  import unit from '../tools/units'
  import VeeValidate, {Validator} from 'vee-validate'
  import cn from 'vee-validate/dist/locale/zh_CN'

  Validator.localize('cn', cn);

  const dict = {
    cn: {message: {require: (name) => `${name}不能为空！`}}
  }
  Validator.localize(dict);

  export default {
    name: 'app',
    validator:null,
    data() {
      return {
        subData: {
          company:'',
          email:'',
          phone:''
        },
      }
    },
    created: function () {
      console.log()
      this.getList();
      this.formRule();
    },
    methods: {
      getList() {
        this.$axios.get(unit.host('cityJson.json')).then(res => {
          console.log(res)
        });
      },
      applyCoupon() { console.log(12)
      },
      formRule() {
        this.validator = new Validator({});
        Validator.extend('phone',{
          getMessage: field=>'请输入正确的手机号码',
          validate: value => value.length === 11 && /^((13|14|15|16|17|18)[0-9]{1}\d{8})s/.test(value)
        });
        Validator.extend('email',{
          getMessage: field=>'请输入正确的邮箱',
          validate: value=> value === /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value)
        });
        Validator.extend('company',{
          getMessage: field=>'请输入公司名称',
          validate: value=> value === /^[\u4E00-\u9FA5]{2}/.test(value)
        });
        this.validator.attach({name:'company',rules:'require|company',alias:'公司名称'});
        this.validator.attach({name:'email',rules:'require|email',alias:'邮箱'});
        this.validator.attach({name:'phone',rules:'require|phone',alias:'手机号码'});
      },
    }
  }
</script>
<style>
  .f-block {
    background-color:#ffffff;
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom: 0.01rem solid #ebebeb;
    padding-left: .3rem;
    position:relative;
  }

  .f-block .f-title {
    float: left;
    font-size: .3rem;
  }
  .f-block .f-input{
    height:1.5rem;
    line-height:1.5rem;
    margin-left:3.6rem;
  }
  .f-input input{
    vertical-align: middle;
    height:.8rem;
    direction:rtl;
    border:none;
  }
  .f-input input::-webkit-input-placeholder{
    font-size:.3rem;
  }
  .f-input .error{
    font-size:.3rem;
    color:red;
    position:absolute;
    top:.5rem;
    left:4.5rem;
  }
  .f-icon{
    background:url("../../static/img/select-icon.png") no-repeat;
    background-size:100% 100%;
    width:.12rem;
    height:.22rem;
    display:block;
    position:absolute;
    top:.7rem;
    right:.3rem;
  }
  .f-content button{
    color: #fafafa;
    font-size:.32rem;
    background-color:#3a4a5a;
    width:6.6rem;
    height:.7rem;
    border-radius:0.1rem;
    margin-left:.4rem;
  }
</style>
