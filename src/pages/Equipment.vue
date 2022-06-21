<template>
  <div id="Equipment">
    <Chart v-if="opt1" :option="opt1"/>
  </div>
</template>

<script>
const option1 = {
  // title: {
  //  text: 'Stacked Area Chart'
  // },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    left: 'left',
    data: ['不良', '产品'],
    textStyle: { color: '#fff' },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [{
    type: 'category',
    axisLine: {
      show: true,
      lineStyle: { color: '#253553' },
    },
    axisLabel: { color: '#fff' },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  }],
  yAxis: [{
    type: 'value',
    axisLabel: {
      color: '#fff',
    },
    axisLine: {
      show: true,
      lineStyle: { color: '#253553' },
    },
    splitLine: {
      show: true,
      lineStyle: { color: '#253553' },
    },
  }],
  series: [
    {
      name: '不良',
      type: 'line',
      stack: 'Total',
      color: '#fc664d',
      areaStyle: { color: '#fc664d', opacity: 0.9 },
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            // fontSize: 10,
            textStyle: {
              color: '#fff',
            },
          },
        },
      },
      emphasis: { focus: 'series' },
      data: [1, 2, 1, 2, 0, 0, 1],
    },
    {
      name: '产品',
      type: 'line',
      stack: 'Total',
      color: '#7fe1df',
      areaStyle: {
        color: '#7fe1df',
        opacity: 0.9,
      },
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            // fontSize: 10,
            textStyle: {
              color: '#fff',
            },
          },
        },
      },
      emphasis: { focus: 'series' },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
}

export default {
  data() {
    return {
      data: [],
      opt1: null,
    }
  },
  created() {
    this.$api.get('equipment').then((data) => {
      this.data = data
      option1.xAxis[0].data = data.map((item) => `${item.id}号台位`)
      option1.series[0].data = data.map((item) => item.ngQty)
      option1.series[1].data = data.map((item) => item.qty)
      this.opt1 = option1
    })
  },
}
</script>

<style lang="scss" scoped>
#Equipment {
  height: 100%;
}
</style>
