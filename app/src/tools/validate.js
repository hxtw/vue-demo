/**
 * Created by sks on 2017/8/30.
 */
export default {
  name:function(name){
    if(!name){
      return false;
    }
    if(/[\u4e00-\u9fa5]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]{2,8}/.test(name)){
      return true;
    }
    return false;
  },
  password:function(password){
    if(!password){
      return false;
    }
    if(/^[0-9a-zA-Z_#]{6,16}$/.test(password)){
      return true;
    }
    return false;
  },
  mobile:function(mobile){
    let pattern = /(13\d|14[57]|15[^4,\D]|17[13678]|18\d)\d{8}|170[0589]\d{7}/,
        str = '';
    if(pattern.test(mobile)){
      return true;
    }
    return false;
  },
  email:function(email){
    let pattern = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
        str = "";
        if(pattern.test(email)){
          return true;
        }
        return false;
  }
}
