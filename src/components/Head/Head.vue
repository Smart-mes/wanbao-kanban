<template>
  <header class="head">
    <h1 class="logo">{{title}}</h1>
    <span class="time">2019-07-02 13:03:19</span>
  </header>
</template>
<script>
export default {
  name: 'Head',
  props: {
    title: {
      type: String,
      default: '广州工控万宝压缩机有限公司',
    },
  },
}
</script>
<style lang="scss" scoped>
.head{
    padding: 0 10px;
      height: 70px;
    line-height: 70px;
   .logo{float: left;font-size: 30px;color: $white;}
   .time{float: right;font-size: 16px; }
}
</style>
