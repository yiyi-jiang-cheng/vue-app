<template>
  <div>
    <div></div>
    <van-cell-group>
      <van-cell title="昵称" :value="info.nickname" />
      <van-cell title="密码" value="*****" />
      <van-cell title="性别" :value="info.gender === 0 ? '女' : '男'" />
      <van-cell title="修改" is-link @click="showedit"></van-cell>
    </van-cell-group>
    <van-dialog v-model="show" title="标题" show-cancel-button @confirm='editing'>
       <van-field v-model="nickname" label="昵称" :placeholder="info.nickname" />
       <van-field v-model="password" label="密码" :placeholder="info.password" />
      <van-radio-group v-model='radio'>
        <van-cell-group>
          <van-cell title="男" clickable @click="radio = 1">
            <template #right-icon>
              <van-radio :name="1" />
            </template>
          </van-cell>
          <van-cell title="女" clickable @click="radio = 0">
            <template #right-icon>
              <van-radio :name="0" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
      show: false,
      radio:0,
      nickname:'',
      password:''
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      if (localStorage.getItem("token") && localStorage.getItem("userId")) {
        this.token = localStorage.getItem("token");
        this.userId = localStorage.getItem("userId");
        console.log(this.token);
        this.$axios.get("/user/" + this.userId).then((res) => {
          console.log(res);
          const { data, statusCode } = res.data;
          // console.log(data)
          if (statusCode === 200) {
            this.info = data;
          }
        });
      }
    },
    showedit() {
      this.show = true;
    },
    editing(){
      console.log(this.nickname,this.password)
    }
  },
};
</script>

<style>
</style>