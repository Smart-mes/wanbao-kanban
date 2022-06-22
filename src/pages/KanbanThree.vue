<template>
  <Container id="KanbanThree">
    <div class="head"><Head></Head></div>
    <div class="main">
      <div class="row fb-1-2" style="flex-direction: column">
        <Box
          class="col"
          style="flex-grow: 0; flex-basis: 13%; margin-top: 0; padding: 0"
        >
          <div class="row info">
            <div class="col">
              <span class="num">1 5451</span>
              <span class="txt">当班计划</span>
            </div>
            <div class="col">
              <span class="num">6034</span>
              <span class="txt">当班实际</span>
            </div>
            <div class="col">
              <span class="num">39%</span>
              <span class="txt">完成率(%)</span>
            </div>
            <div class="col">
              <span class="num">38%</span>
              <span class="txt">时间进度(%)</span>
            </div>
          </div>
        </Box>
        <Box class="col" style="padding: 0">
          <div
            class="row"
            style="flex-grow: 0; flex-basis: 35%;"
          >
            <div class="col fb-1-2">
              <Chart v-if="opt1" :option="opt1" />
            </div>
            <div class="col fb-1-2" style="align-items:center;justify-content: center;">
              <div style="width: 90%">
                <Table :option="tableOpt1" :stripe='true' :border="true"></Table>
              </div>
            </div>
          </div>
          <div class="row line"></div>
          <div class="row" style="flex-direction: column; position: relative">
            <h6 class="title" style="position: absolute; top: 10px; left: 35px">
              小时节拍
            </h6>
            <div class="row fb-1-2">
              <div class="col fb-1-2">
                <Chart v-if="opt2" :option="opt2" />
              </div>
              <div class="col fb-1-2">
                <Chart v-if="opt3" :option="opt3" />
              </div>
            </div>
            <div class="row fb-1-2">
              <div class="col fb-1-2">
                <Chart v-if="opt4" :option="opt4" />
              </div>
              <div class="col fb-1-2">
                <Chart v-if="opt5" :option="opt5" />
              </div>
            </div>
          </div>
        </Box>
      </div>
      <div class="row fb-1-2" style="flex-direction: column">
        <Box
          class="col fb-1-2"
          style="flex-grow: 0; flex-basis: 33.3%; margin-top: 0; padding: 0"
        >
          <div class="row">
            <div class="col fb-1-2">
              <Chart v-if="opt6" :option="opt6" />
            </div>
            <div class="col fb-1-2" style="align-items:center;justify-content: center;">
              <div style="width: 90%">
                <Table :option="tableOpt2" :stripe='true' :border="true"></Table>
              </div>
            </div>
          </div>
        </Box>
        <Box class="col">
          <div class="row" style="flex-direction: column; position: relative">
            <h6 class="title" style="position: absolute; top: 10px; left: 35px">
              小时节拍
            </h6>
            <div class="row fb-1-2">
              <div class="col fb-1-2">
                <Chart v-if="opt7" :option="opt7" />
              </div>
              <div class="col fb-1-2">
                <Chart v-if="opt8" :option="opt8" />
              </div>
            </div>
            <div class="row fb-1-2">
              <div class="col fb-1-2">
                <Chart v-if="opt9" :option="opt9" />
              </div>
              <div class="col fb-1-2">
                <Chart v-if="opt10" :option="opt10" />
              </div>
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
    // orient: 'vertical',
    selected: false,
    icon: 'circle',
    left: '10px',
    top: '10px',
    textStyle: { color: '#fff' },
    data: [
      {
        name: '剩余',
        itemStyle: {
          color: '#026fee',
        },
      },
      {
        name: '实际',
        itemStyle: {
          color: '#1ad2aa',
        },
      },
    ],
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  series: [
    {
      name: '剩余',
      type: 'pie',
      radius: [0, '50%'],
      label: {
        normal: {
          position: 'inside',
          align: 'right',
          fontSize: 14,
          fontFamily: 'Microsoft YaHei',
          color: '#FFEFE0',
        },
      },
      data: [
        {
          value: 335,
          name: '#1',
          itemStyle: {
            normal: {
              color: '#48c5fd',
            },
          },
        },
        {
          value: 679,
          name: '#2',
          itemStyle: {
            normal: {
              color: '#ed826e',
            },
          },
        },
        {
          value: 335,
          name: '#3',
          itemStyle: {
            normal: {
              color: '#18d5d9',
            },
          },
        },
        {
          value: 679,
          name: '#4',
          itemStyle: {
            normal: {
              color: '#72aaf5',
            },
          },
        },
        {
          value: 679,
          name: '#5',
          itemStyle: {
            normal: {
              color: '#4892f5',
            },
          },
        },
      ],
    },
    {
      name: '实际',
      type: 'pie',
      radius: ['65%', '80%'],
      label: {
        show: false,
      },
      data: [
        {
          value: 100,
          name: '#1',
          type: '1',
          itemStyle: {
            normal: {
              color: '#026fee',
            },
          },
        },
        {
          value: 235,
          name: '#1',
          type: '1',
          itemStyle: {
            normal: {
              color: '#0a95fc',
            },
          },
        },
        {
          value: 100,
          name: '#2',
          type: '2',
          itemStyle: {
            normal: {
              color: '#026fee',
            },
          },
        },
        {
          value: 579,
          name: '#2',
          type: '2',
          itemStyle: {
            normal: {
              color: '#0a95fc',
            },
          },
        },
        {
          value: 100,
          name: '#3',
          type: '3',
          itemStyle: {
            normal: {
              color: '#026fee',
            },
          },
        },
        {
          value: 235,
          name: '#3',
          type: '3',
          itemStyle: {
            normal: {
              color: '#0a95fc',
            },
          },
        },
        {
          value: 100,
          name: '#4',
          type: '4',
          itemStyle: {
            normal: {
              color: '#026fee',
            },
          },
        },
        {
          value: 579,
          name: '#4',
          type: '4',
          itemStyle: {
            normal: {
              color: '#0a95fc',
            },
          },
        },
        {
          value: 100,
          name: '#5',
          type: '5',
          itemStyle: {
            normal: {
              color: '#026fee',
            },
          },
        },
        {
          value: 579,
          name: '#5',
          type: '5',
          itemStyle: {
            normal: {
              color: '#0a95fc',
            },
          },
        },
      ],
    },
  ],
}

const opt2 = {
  backgroundColor: '',
  title: {
    text: '1#小时节拍',
    left: 'center',
    top: '15%',
    textStyle: {
      fontSize: 16,
      color: '#3a7e9f',
      fontWeight: 'normal',
    },
  },
  grid: {
    top: '35%',
    left: '15%',
    right: '10%',
    bottom: '20%',
  },
  tooltip: {
    trigger: 'item',
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: { color: '#253553' },
    },
    axisLabel: {
      color: '#fff',
      rotate: 60,
    },
    data: [
      '00:00', '01:00', '02:00', '03:00', '04:00',
      '05:00', '06:00', '07:00', '08:00', '09:00',
      '10:00', '11:00', '12:00', '13:00', '14:00',
      '15:00', '16:00', '17:00', '18:00', '19:00',
      '20:00', '21:00', '22:00', '23:00',
    ],
  },
  yAxis: {
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
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      color: '#249dfa',
      barWidth: '40%',
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            fontSize: 10,
            textStyle: { color: '#fff' },
          },
        },
      },
    },
  ],
}

export default {
  name: 'KanbanThree',
  data() {
    return {
      // 左边
      opt1: null,
      opt2: null,
      opt3: null,
      opt4: null,
      opt5: null,
      tableOpt1: {
        cols: [
          { prop: 'lineBody', name: '线体' },
          { prop: 'plan', name: '计划' },
          { prop: 'actual', name: '实际' },
        ],
        data: [
          { lineBody: '1#', plan: 1000, actual: 589 },
          { lineBody: '2#', plan: 1000, actual: 589 },
          { lineBody: '3#', plan: 1000, actual: 589 },
          { lineBody: '4#', plan: 1000, actual: 589 },
          { lineBody: '5#', plan: 1000, actual: 589 },
        ],
      },
      // 右边
      opt6: null,
      opt7: null,
      opt8: null,
      opt9: null,
      opt10: null,
      tableOpt2: {
        cols: [
          { prop: 'lineBody', name: '线体' },
          { prop: 'plan', name: '计划' },
          { prop: 'actual', name: '实际' },
        ],
        data: [
          { lineBody: '1#', plan: 1000, actual: 589 },
          { lineBody: '2#', plan: 1000, actual: 589 },
          { lineBody: '3#', plan: 1000, actual: 589 },
          { lineBody: '4#', plan: 1000, actual: 589 },
          { lineBody: '5#', plan: 1000, actual: 589 },
        ],
      },
    }
  },
  created() {
    // 左边
    this.opt1 = opt1
    this.opt2 = opt2
    this.opt3 = opt2
    this.opt4 = opt2
    this.opt5 = opt2
    // 右边
    this.opt6 = opt1
    this.opt7 = opt2
    this.opt8 = opt2
    this.opt9 = opt2
    this.opt10 = opt2
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
#KanbanThree {
  .head {
    flex-basis: 70px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }

  .info {
    // display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      to right,
      rgba(15, 104, 175, 1),
      rgba(2, 37, 79, 1)
    );
    .col {
      flex: 1;
      // text-align: center;
      &:nth-child(1) {
        .num {
          color: #fc8364;
        }
      }
      &:nth-child(2) {
        .num {
          color: #63c3df;
        }
      }
      &:nth-child(3) {
        .num {
          color: #79f4e5;
        }
      }
      &:nth-child(4) {
        .num {
          color: #3e97fc;
        }
      }
      // 3e97fc
      &:not(:last-child) {
        .num {
          &::before {
            content: "";
            position: absolute;
            right: 0;
            height: 100%;
            border-right: 1px solid #3f81b4;
          }
        }
      }
      span {
        display: block;
        text-align: center;
      }
      .num {
        position: relative;
        margin-bottom: 10px;
        font-size: 35px;
        font-weight: bold;
      }
    }
  }
  .line {
    flex-grow: 0;
    flex-basis: 1px;
    background-color: #0b4776;
  }
  .title {
    position: relative;
    font-weight: normal;
    color: #fff;
    font-size: 18px;
    &::before {
      content: "";
      position: absolute;
      top: 6px;
      left: -16px;
      width: 10px;
      height: 10px;
      background-color: #17a5ff;
      border-radius: 50%;
    }
  }
}
</style>
