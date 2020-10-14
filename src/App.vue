<template>
  <div id="app">
    <router-view></router-view>
    <tmp-tabbar v-if="path !== '/login' && path !== 'register'"></tmp-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    path(){
        return this.$route.path;
    },
  },

};
</script>
<style lang="less">
.index {
  .van-tab {
    background-color: #ccc;
  }
}
</style>
