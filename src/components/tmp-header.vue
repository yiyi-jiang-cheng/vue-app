<template>
  <div class="tmp-header">
    <div class="right">
      <i class="iconfont iconjiantou2"></i>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="left"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.tmp-header{
  display: flex;
  height: 40px;
  text-align: center;
  align-items: center;
  background-color: #ddd;
  border-bottom: 1px solid #666;
  .left,
  .right{
    width: 30px;
    font-size: 20px;
  }
  .center{
    flex: 1;
    font-size: 20px;
    font-weight: 700;
  }
}

</style>