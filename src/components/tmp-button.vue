<template>
  <div class="tmp-button">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  .tmp-button{
    height: 50px;
    background-color: red;
    color: #fff;
    font-size: 20px;
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
    margin: 40px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,.5);
  }

</style>