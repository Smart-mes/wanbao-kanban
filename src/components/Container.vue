<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  /* overflow: hidden;
  background: url(~@/assets/images/kb-bg.png) no-repeat center; */
  background-color: #001c44;
  color: #fff;
  background-size: cover;
}
</style>
