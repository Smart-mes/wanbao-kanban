<template>
  <span class="icon iconfont" :class="`icon-${iconName}`" :style="{ fontSize, color }"/>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    fontSize: {
      type: String,
      default: '1em',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import "./iconfont/iconfont.css";
.el-button {
  .icon.iconfont {
    vertical-align: bottom;
    & + span {
      margin-left: 5px;
      vertical-align: bottom;
    }
  }
}
</style>
