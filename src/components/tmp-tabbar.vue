<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item name="index" icon="home-o" @click.native='fn(active)'>首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">发现</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">好友</van-tabbar-item>
      <van-tabbar-item
        name="setting"
        icon="setting-o"
        @click.native="fn(active)"
        >设置</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "index"
    };
  },
  methods: {
    fn(routes) {
      // console.log(111);
      const r = "/"+routes
  
      this.$router.push({
        path: r,
    
      });
    },
  },
};
</script>

<style>
</style>