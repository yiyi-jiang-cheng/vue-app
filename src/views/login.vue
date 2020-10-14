<template>
  <div>
    <tmp-header>登录</tmp-header>
    <tmp-logo></tmp-logo>
    <van-field
      v-model="username"
      required
      label="用户名"
      placeholder="请输入用户名"
      :error-message="usererrormsg"
      clearable
      @input="getusername"
      @clear='clearusererrormsg'
    />
    <van-field
      v-model="password"
      required
      label="密码"
      placeholder="请输入密码"
      :error-message="pswerrormsg"
      clearable
      @input="getpassword"
      @clear='clearpswerrormsg'
    />
    <tmp-button @click.native="login">登录</tmp-button>
  </div>
</template>

<script>
// import Axios from 'axios'
export default {
  created(){
    const info = JSON.parse(localStorage.getItem('info')) 
    if(info){
        this.username = info.username
        this.password = info.password
        localStorage.removeItem('info')
    }
  },
  data() {
    return {
      username: "",
      password: "",
      usererrormsg: "",
      pswerrormsg: "",
      timeout:null
    };
  },
  methods: {
    getusername() {
      // console.log('第一次'+this.timeout)  null  8  9
      clearTimeout(this.timeout)
      this.timeout= setTimeout(this.test,1000)
      // console.log('第二次'+this.timeout)    8   9  10
      // 始终只执行最后一个定时器函数
    },
    test(){
      const reg = /^1\d{3,5}$/
      if(this.username===''){
        this.usererrormsg=''
      }else if(reg.test(this.username)){
        this.usererrormsg=''
      }else{
        this.usererrormsg='错误'
      }
    },
    getpassword() {
      let reg = /^\d{3,12}$/;
      if (this.password==='') {
        this.pswerrormsg=''
      } else if(reg.test(this.password)){
        this.pswerrormsg = ""
      }else{
        this.pswerrormsg = "密码格式不正确"
      }
    },
    clearusererrormsg(){
      this.usererrormsg=''
    },
    clearpswerrormsg(){
      this.pswerrormsg=''
    },
    login(){
      this.$axios.post('http://localhost:3000/login',{
        username:this.username,
        password:this.password
      }).then(res=>{
        console.log(res)
        const {data}=res
        if(data.statusCode===200){
          localStorage.setItem('token',data.data.token)
          localStorage.setItem('userId',data.data.user.id)
         //提示关闭后跳转路由
          this.$toast.success({
            message:data.message,
            onClose:()=>{
               this.$router.push({path:'index'})
            }
          }
          )
        }else{
          //失败的提示
          this.$toast.fail(data.message)
        }
      })
    }
  },
  
};
</script>

<style>
</style>