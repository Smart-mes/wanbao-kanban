<template>
  <header class="head">
    <h1 class="logo">{{title}}</h1>
  </header>
</template>
<script>
export default {
  name: 'HeadOne',
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
    height: 70px;
    line-height: 70px;
   .logo{text-align: center; font-size: 30px;color: $white;}
}
</style>
