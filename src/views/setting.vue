<template>
  <div class="setting">
    <div class="info">
      <div class="left">
        <img :src="$axios.defaults.baseURL+info.head_img" alt="" />
      </div>
      <div class="center">
        <div class="nickname">
          <i :class="{iconfont:true,iconxingbienan:info.gender===1,iconxingbienv:info.gender===0}"></i>
          {{info.nickname}}
        </div>
        <div class="date">{{info.create_date | date}}</div>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="我的关注" is-link value="关注的用户" />
      <van-cell title="我的跟帖" is-link value="跟帖回复" />
      <van-cell title="我的收藏" is-link value="文档/视频" />
      <van-cell title="设置" is-link @click="$router.push({path:'/Edit'})"/>
      <van-cell title="退出" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:'',
      token:'',
      userId:''
    };
  },
  created() {
    if (localStorage.getItem("token") && localStorage.getItem("userId")) {
     this.token = localStorage.getItem("token");
     this.userId = localStorage.getItem("userId");
     console.log(this.token)
      this.$axios.get('/user/'+this.userId).then(res=>{
        console.log(res)
        const {data,statusCode} = res.data
        // console.log(data)
        if(statusCode === 200){
          this.info = data
        }
      })
    }
  },
};
</script>

<style scoped lang='less'>
.info {
  height: 100px;
  border-bottom: 2px solid #cccccc;

  display: flex;
  padding: 0 20px;
  align-items: center;

  .left {
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .center {
    flex: 1;
    padding-left: 20px;
    height: 50px;
    line-height: 25px;
    font-size: 14px;
    .name {
      color: #000;
    }
  }
}
</style>