<template>
  <div class="box">
    <span class="top-left-border"/>
    <span class="top-right-border"/>
    <span class="bottom-left-border"/>
    <span class="bottom-right-border"/>
    <slot/>
  </div>
</template>

<style>
.box {
  position: relative;
  margin: 10px;
  padding: 10px;
  /* background: rgba(13, 20, 48, 0.8); */
  border: 1px solid #0b4776;
  /* box-shadow: 0 0 5px #086678 inset; */
}

.top-left-border,
.top-right-border,
.bottom-left-border,
.bottom-right-border {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid #0f598f;
}
.top-left-border {
  top: -1px;
  left: -1px;
  border-width: 1px 0 0 1px;
}
.top-right-border {
  top: -1px;
  right: -1px;
  border-width: 1px 1px 0 0;
}
.bottom-left-border {
  bottom: -1px;
  left: -1px;
  border-width: 0px 0 1px 1px;
}
.bottom-right-border {
  bottom: -1px;
  right: -1px;
  border-width: 0 1px 1px 0;
}
</style>
