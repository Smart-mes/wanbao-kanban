<template>
  <div id="Home">
    <router-link v-for="v in views" :key="v.name" :to="v.path">{{ v.name }}</router-link>
  </div>
</template>

<script>
const pages = import.meta.glob('./*.vue')
const nameMap = {
  Equipment: '区域看板-设备',
}

export default {
  name: 'Home',
  data() {
    return {
      views: Object.keys(pages).map((k) => {
        const key = k.replace(/^\.\/|\.vue$/g, '')
        return {
          name: nameMap[key] || key,
          path: key.replace(/^\.|\.vue$/g, ''),
        }
      }),
    }
  },
}
</script>

<style lang="scss" scoped>
#Home {
  a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #000;
    margin: 5px;
  }
}
</style>
