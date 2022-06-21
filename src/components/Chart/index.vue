<template>
  <div ref="chart" class="chart"/>
</template>

<script>
import * as echarts from 'echarts/dist/echarts.esm'

export default {
  name: 'Chart',
  props: {
    option: {
      type: Object,
      required: true,
    },
    updateFn: {
      type: Function,
      default: null,
    },
    interval: {
      type: Number,
      default: 0,
    },
    notMerge: {
      type: Boolean,
    },
    theme: {
      type: String,
      default: 'dark',
    },
  },
  data() {
    return {
      chart: null,
      updateTimer: null,
      resizeTimer: null,
      resizeHandler: null,
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart, this.theme)
    this.setOption(this.option)
    if (this.interval && this.updateFn) {
      this.updateTimer = setInterval(() => {
        this.update()
      }, this.interval)
    }
    // resize
    this.resizeHandler = () => {
      if (this.resizeTimer) {
        clearTimeout(this.resizeTimer)
      }
      this.resizeTimer = setTimeout(() => {
        this.chart.resize()
      }, 500)
    }

    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
    this.chart.dispose()
    clearInterval(this.updateTimer)
    this.chart = null
  },
  methods: {
    update() {
      this.chart.setOption(this.updateFn(this.chart.getOption()), this.notMerge)
    },
    setOption(option) {
      this.chart.setOption(option, this.notMerge)
    },
  },
}
</script>

<style scoped>
.chart {
  height: 100%;
}
</style>
