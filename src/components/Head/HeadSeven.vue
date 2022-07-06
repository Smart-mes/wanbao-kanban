<template>
  <header class="head">
    <h1 class="logo">{{title}}</h1>
  </header>
</template>
<script>
export default {
  name: 'HeadSeven',
  props: {
    title: {
      type: String,
      default: '生产任务看板',
    },
  },
}
</script>
<style lang="scss" scoped>
.head{
    height: 80px;
    line-height: 80px;
   .logo{font-size: 40px;text-align: center; color: #00ffff;}
  //  background: green;
   background: url(@/assets/images/head_bj.jpg) no-repeat center center;
}
</style>
