<template>
  <div>
    <tmp-header>注册</tmp-header>
    <tmp-logo></tmp-logo>
    <van-field
      v-model="username"
      required
      label="用户名"
      placeholder="请输入用户名"
      :error-message="usererrormsg"
      clearable
      @input="getusername"
      @clear="clearusererrormsg"
    />
    <van-field
      v-model="nickname"
      required
      label="昵称"
      placeholder="请输入昵称"
      :error-message="nickerrormsg"
      clearable
      @input="getnickname"
      @clear="clearnickerrormsg"
    />
    <van-field
      v-model="password"
      required
      label="密码"
      placeholder="请输入密码"
      :error-message="pswerrormsg"
      clearable
      @input="getpassword"
      @clear="clearpswerrormsg"
    />
    <tmp-button @click.native="register">注册</tmp-button>
  </div>
</template>

<script>
// import Axios from "axios";
export default {
  data() {
    return {
      username: "",
      nickname: "",
      password: "",
      usererrormsg: "",
      nickerrormsg: "",
      pswerrormsg: "",
      timeout: null,
    };
  },
  methods: {
    getusername() {
      // console.log('第一次'+this.timeout)  null  8  9
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.test, 1000);
      // console.log('第二次'+this.timeout)    8   9  10
      // 始终只执行最后一个定时器函数
    },
    test() {
      const reg = /^1\d{3,5}$/;
      if (this.username === "") {
        this.usererrormsg = "";
      } else if (reg.test(this.username)) {
        this.usererrormsg = "";
      } else {
        this.usererrormsg = "错误";
      }
    },
    getnickname() {
      let reg = /^1\d{3,5}$/;
      if (this.nickname === "") {
        this.nickerrormsg = "";
      } else if (reg.test(this.nickname)) {
        this.nickerrormsg = "";
      } else {
        this.nickerrormsg = "昵称格式不正确";
      }
    },
    getpassword() {
      let reg = /^\d{6,12}$/;
      if (this.password === "") {
        this.pswerrormsg = "";
      } else if (reg.test(this.password)) {
        this.pswerrormsg = "";
      } else {
        this.pswerrormsg = "密码格式不正确";
      }
    },
    clearusererrormsg() {
      this.usererrormsg = "";
    },
    clearpswerrormsg() {
      this.pswerrormsg = "";
    },
    clearnickerrormsg() {
      this.nickerrormsg = "";
    },
    register() {
      // console.log(111)
      if (
        this.username !==''&&
        this.password !==''&&
        this.nickname !==''&&
        this.usererrormsg === "" &&
        this.nickerrormsg === "" &&
        this.pswerrormsg === ""
      ) {
        //axios.post('url',params,config)params(对象)路由携带的参数，config(对象)配置如token
        this.$axios.post("http://localhost:3000/register", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        }).then((res) => {
          const { statusCode } = res.data;
          if (statusCode === 200) {
            this.$toast.success({
              message: "注册成功",
              // 弹窗关闭再跳转
              onClose:()=>{
                console.log(this)
                this.$router.push("login");
                let data = {
                  username: this.username,
                  password: this.password,
                };
                console.log(JSON.stringify(data));
                localStorage.setItem("info", JSON.stringify(data));
                //this.push({path:'login'})
                //this.push({path:'login',query:{username:username}})
              },
            });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
</style>>