<template>
  <Container id="KanbanFour">
    <div class="head"><Head></Head></div>
    <div class="main">
      <div class="row fb-1-2">
        <Box class="col"  style="margin-top: 0;padding: 0">
          <div class="row" style="flex-direction:column;flex-grow: 0;flex-basis: 30%;">
            <div class="col" style="margin-top: 3%; flex-grow: 0;flex-basis:30px;">
              <h6 class=" circleDotTitle">工程不良周报</h6>
            </div>
            <div class="col">
              <Chart v-if="opt1" :option="opt1" />
              </div>
          </div>
          <div class="row" style="flex-direction:column;">
            <div class="row" style="flex-grow: 0;flex-basis:30px;">
              <h6 class=" circleDotTitle">不良统计</h6>
            </div>
            <div class="row" style="flex-grow: 0;flex-basis:45%;">
              <div class="col fb-1-2"><Chart v-if="opt2" :option="opt2" /></div>
              <div class="col fb-1-2"><Chart v-if="opt3" :option="opt3" /></div>
            </div>
            <div class="row">
               <div class="col fb-1-2"><Chart v-if="opt4" :option="opt4" /></div>
              <div class="col fb-1-2"><Chart v-if="opt5" :option="opt5" /></div>
            </div>
          </div>
        </Box>
      </div>
      <div class="row fb-1-2">
         <Box class="col"  style="margin-top: 0;padding: 0">
          <div class="row" style="flex-direction:column;flex-grow: 0;flex-basis: 30%;">
            <div class="col" style="margin-top: 3%; flex-grow: 0;flex-basis:30px;">
              <h6 class=" circleDotTitle">工程不良周报</h6>
            </div>
            <div class="col">
              <Chart v-if="opt1" :option="opt6" />
              </div>
          </div>
          <div class="row" style="flex-direction:column;">
            <div class="row" style="flex-grow: 0;flex-basis:30px;">
              <h6 class=" circleDotTitle">不良统计</h6>
            </div>
            <div class="row" style="flex-grow: 0;flex-basis:45%;">
              <div class="col fb-1-2"><Chart v-if="opt7" :option="opt2" /></div>
              <div class="col fb-1-2"><Chart v-if="opt8" :option="opt3" /></div>
            </div>
            <div class="row">
               <div class="col fb-1-2"><Chart v-if="opt9" :option="opt4" /></div>
              <div class="col fb-1-2"><Chart v-if="opt10" :option="opt5" /></div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  </Container>
</template>
<script>
const opt1 = {
  backgroundColor: '',
  legend: {
    left: 'center',
    top: 'bottom',
    icon: 'circle',
    textStyle: { color: '#fff' },
    // show: false,
  },
  tooltip: {
    trigger: 'item',
  },
  grid: {
    top: '25%',
    left: '10%',
    right: '10%',
    bottom: '25%',
  },
  dataset: {
    source: [
      ['product', '#1', '#2', '#3', '#5'],
      ['2019-06-26', 43.3, 85.8, 93.7, 93.7],
      ['2019-06-27', 83.1, 73.4, 55.1, 90.7],
      ['2019-06-28', 86.4, 65.2, 82.5, 96.7],
      ['2019-06-30', 72.4, 53.9, 39.1, 95.7],
      ['2019-07-01', 72.4, 53.9, 39.1, 95.7],
      ['2019-07-02', 72.4, 53.9, 39.1, 98.7],
    ],
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#253553',
      },
    },
    axisLabel: {
      color: '#fff',
    },
  },
  yAxis: [
    {
      type: 'value',
      name: '工程不良',
      nameLocation: 'middle',
      nameGap: 40,
      nameTextStyle: {
        fontSize: 16,
        color: '#407dc8',
      },
      position: 'left',
      axisLabel: {
        color: '#fff',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#253553',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#253553',
        },
      },
    },
    {
      name: '（PPM）',
      nameLocation: 'middle',
      nameRotate: -90,
      nameGap: 20,
      nameTextStyle: {
        fontSize: 16,
        color: '#407dc8',
      },
      position: 'right',
      axisLine: {
        show: true,
        lineStyle: { color: '253553' },
      },
    },
  ],
  series: [{
    type: 'bar',
    color: '#fc8364',
    barWidth: '15%',
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: 'top',
          fontSize: 10,
          textStyle: {
            color: '#fff',
          },
        },
      },
    },
  },
  {
    type: 'bar',
    color: '#63c3df',
    barWidth: '15%',
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: 'top',
          fontSize: 10,
          textStyle: {
            color: '#fff',
          },
        },
      },
    },
  },
  {
    type: 'bar',
    color: '#79f4e5',
    barWidth: '15%',
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: 'top',
          fontSize: 10,
          textStyle: {
            color: '#fff',
          },
        },
      },
    },
  },
  {
    type: 'bar',
    color: '#3e97fc',
    barWidth: '10%',
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: 'top',
          fontSize: 10,
          textStyle: {
            color: '#fff',
          },
        },
      },
    },
  },
  ],
}
const opt2 = {
  backgroundColor: '',
  title: {
    text: '1#不良统计',
    left: 'center',
    top: '10%',
    textStyle: {
      fontSize: 16,
      color: '#3a7e9f',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      center: ['50%', '55%'],
      data: [
        {
          value: 1048,
          name: '闪缝',
          itemStyle: {
            normal: {
              color: '#3e97fd',
            },
          },
        },
        {
          value: 735,
          name: '少条码',
          itemStyle: {
            normal: {
              color: '#3ee9fd',
            },
          },
        },
        {
          value: 580,
          name: '螺丝不到位',
          itemStyle: {
            normal: {
              color: '#57a0e5',
            },
          },
        },
        {
          value: 484,
          name: '变形',
          itemStyle: {
            normal: {
              color: '#7cb5ec',
            },
          },
        },
      ],
      label: {
        color: '#ffffff',
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}
const opt3 = {
  backgroundColor: '',
  title: {
    text: '2#不良统计',
    left: 'center',
    top: '10%',
    textStyle: {
      fontSize: 16,
      color: '#3a7e9f',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      center: ['50%', '55%'],
      data: [
        {
          value: 1048,
          name: '未固定',
          itemStyle: {
            normal: {
              color: '#3e97fd',
            },
          },
        },
        {
          value: 735,
          name: '少横梁',
          itemStyle: {
            normal: {
              color: '#3ee9fd',
            },
          },
        },
        {
          value: 580,
          name: '螺丝不到位',
          itemStyle: {
            normal: {
              color: '#57a0e5',
            },
          },
        },
        {
          value: 484,
          name: '少螺丝',
          itemStyle: {
            normal: {
              color: '#7cb5ec',
            },
          },
        },
      ],
      label: {
        color: '#ffffff',
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}
const opt4 = {
  backgroundColor: '',
  title: {
    text: '3#不良统计',
    left: 'center',
    top: '10%',
    textStyle: {
      fontSize: 16,
      color: '#3a7e9f',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    // orient: 'vertical',
    // left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      center: ['50%', '55%'],
      data: [
        {
          value: 1048,
          name: '错',
          itemStyle: {
            normal: {
              color: '#f25c5a',
            },
          },
        },
        {
          value: 735,
          name: '凹陷',
          itemStyle: {
            normal: {
              color: '#8085e9',
            },
          },
        },
        {
          value: 580,
          name: '安检不合格自动返修',
          itemStyle: {
            normal: {
              color: '#3ee9fd',
            },
          },
        },
        {
          value: 484,
          name: '变形',
          itemStyle: {
            normal: {
              color: '#57a0e5',
            },
          },
        },
        {
          value: 300,
          name: '测试不合格自动返修',
          itemStyle: {
            normal: {
              color: '#7cb5ec',
            },
          },
        },
      ],
      label: {
        color: '#ffffff',
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}
const opt5 = {
  backgroundColor: '',
  title: {
    text: '5#不良统计',
    left: 'center',
    top: '10%',
    textStyle: {
      fontSize: 16,
      color: '#3a7e9f',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    // orient: 'vertical',
    // left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      center: ['50%', '55%'],
      data: [
        {
          value: 1048,
          name: '毛刺',
          itemStyle: {
            normal: {
              color: '#7af4e5',
            },
          },
        },
        {
          value: 735,
          name: '安装不到位',
          itemStyle: {
            normal: {
              color: '#8085e9',
            },
          },
        },
        {
          value: 580,
          name: '凹陷',
          itemStyle: {
            normal: {
              color: '#3e97fd',
            },
          },
        },
        {
          value: 484,
          name: '出风棚变形',
          itemStyle: {
            normal: {
              color: '#3ee9fd',
            },
          },
        },
        {
          value: 300,
          name: '卡棉被',
          itemStyle: {
            normal: {
              color: '#57a0e5',
            },
          },
        },
        {
          value: 300,
          name: '测试不合格自动返修',
          itemStyle: {
            normal: {
              color: '#95ceff',
            },
          },
        },
      ],
      label: {
        color: '#ffffff',
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

export default {
  name: 'KanbanFour',
  data() {
    return {
      // 左
      opt1: null,
      opt2: null,
      opt3: null,
      opt4: null,
      opt5: null,
      // 右
      opt6: null,
      opt7: null,
      opt8: null,
      opt9: null,
      opt10: null,
    }
  },
  created() {
    // 左
    this.opt1 = opt1
    this.opt2 = opt2
    this.opt3 = opt3
    this.opt4 = opt4
    this.opt5 = opt5
    // 右
    this.opt6 = opt1
    this.opt7 = opt2
    this.opt8 = opt3
    this.opt9 = opt4
    this.opt10 = opt5
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
#KanbanFour {
      // background-color: #00142e;
  .head {
    flex-basis: 70px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
.circleDotTitle{
  margin-left:3.5%;
  &::before {
  background-color: #4fdd00;
}
}
}
</style>
