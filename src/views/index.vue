<template>
  <div class="index">
    <van-tabs animated>
      <!-- :to='item.path' -->
      <van-tab
        v-for="item in routes"
        :title="item.name"
        :key="item.path"
        :to="item.path"
      >
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: "/index/attention", name: "关注" },
        { path: "/index/headline", name: "头条" },
        { path: "/index/hot", name: "热点" },
        { path: "/index/funny", name: "娱乐" },
        { path: "/index/sport", name: "体育" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>