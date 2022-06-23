<template>
  <Container id="KanbanFour">
    <div class="head"><Head></Head></div>
    <div class="main">
      <div
        class="row"
        style="flex-direction: column; flex-grow: 0; flex-basis: 95px"
      >
        <div
          class="col fb-1-2"
          style="flex-direction: column;align-items: center;justify-content: center;">
          <div class="title">
            <h6>抽空</h6>
          </div>
        </div>
        <div
          class="col fb-1-2"
          style="flex-direction: column;align-items: center;justify-content: center;">
          <div class="title">
            <h6>灌注</h6>
          </div>
        </div>
      </div>
      <div class="row" style="flex-direction: column;">
        <div class="col" style="flex-grow: 0; flex-basis: 47.5%;">
          <div class="row">
            <div class="col fb-1-3">
              <div class="row" style="flex-direction: column; padding: 0 20px;">
                <div class="col" style="  flex-grow: 0; flex-basis: 60%;">
                   <Chart v-if="opt1" :option="opt1" />
                </div>
                <div class="col" style="justify-content: center; border-bottom: 2px solid #3b5173;">
                  <table class="table table-info">
                    <tr class="txt">
                      <td>产量</td>
                      <td><span class="green">14</span></td>
                      <td>合格率</td>
                      <td><span class="green">100</span></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="row">
                          <div class="col fb-1-2">状态</div>
                          <div class="col fb-1-2"> <span class="icon-circle qualified"></span></div>
                        </div>
                        <!-- 合格，失败  .qualified .unqualified-->
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="col fb-1-3">
              <div class="row" style="flex-direction: column;padding: 0 20px;">
                <div class="col" style="flex-grow: 0; flex-basis: 60%;">
                   <Chart v-if="opt2" :option="opt2" />
                </div>
                <div class="col" style="justify-content: center; border-bottom: 2px solid #3b5173;">
                  <table class="table table-info">
                    <tr class="txt">
                      <td>产量</td>
                      <td><span class="green">14</span></td>
                      <td>合格率</td>
                      <td><span class="green">100</span></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="row">
                          <div class="col fb-1-2">状态</div>
                          <div class="col fb-1-2"> <span class="icon-circle qualified"></span></div>
                        </div>
                        <!-- 合格，失败  .qualified .unqualified-->
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="col fb-1-3">
              <div class="row" style="flex-direction: column;padding: 0 20px;">
                <div class="col" style="flex-grow: 0; flex-basis: 60%;">
                   <Chart v-if="opt3" :option="opt3" />
                </div>
                <div class="col" style="justify-content: center; border-bottom: 2px solid #3b5173;">
                  <table class="table table-info">
                    <tr class="txt">
                      <td>产量</td>
                      <td><span class="green">14</span></td>
                      <td>合格率</td>
                      <td><span class="green">100</span></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="row">
                          <div class="col fb-1-2">状态</div>
                          <div class="col fb-1-2"> <span class="icon-circle qualified"></span></div>
                        </div>
                        <!-- 合格，失败  .qualified .unqualified-->
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"  style="flex-grow: 0; flex-basis: 5%;"></div>
        <div class="col">
          <div class="row">
            <div class="col fb-1-3">
              <div class="row" style="flex-direction: column;padding: 0 20px;">
                <div class="col" style="flex-grow: 0; flex-basis: 60%;">
                   <Chart v-if="opt4" :option="opt4" />
                </div>
                <div class="col" style="justify-content: center;">
                  <table class="table table-info">
                    <tr class="txt">
                      <td>产量</td>
                      <td><span class="green">14</span></td>
                      <td>合格率</td>
                      <td><span class="green">100</span></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="row">
                          <div class="col fb-1-2">状态</div>
                          <div class="col fb-1-2"> <span class="icon-circle qualified"></span></div>
                        </div>
                        <!-- 合格，失败  .qualified .unqualified-->
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="col fb-1-3">
               <div class="row" style="flex-direction: column;padding: 0 20px;">
                <div class="col" style="flex-grow: 0; flex-basis: 60%;">
                   <Chart v-if="opt5" :option="opt5" />
                </div>
                <div class="col" style="justify-content: center;">
                  <table class="table table-info">
                    <tr class="txt">
                      <td>产量</td>
                      <td><span class="green">14</span></td>
                      <td>合格率</td>
                      <td><span class="green">100</span></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="row">
                          <div class="col fb-1-2">状态</div>
                          <div class="col fb-1-2"> <span class="icon-circle qualified"></span></div>
                        </div>
                        <!-- 合格，失败  .qualified .unqualified-->
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="col fb-1-3">
              <div class="row" style="flex-direction: column;padding: 0 20px;">
                <div class="col" style="flex-grow: 0; flex-basis: 60%;">
                   <Chart v-if="opt6" :option="opt6" />
                </div>
                <div class="col" style="justify-content: center;">
                  <table class="table table-info">
                    <tr class="txt">
                      <td>产量</td>
                      <td><span class="green">14</span></td>
                      <td>合格率</td>
                      <td><span class="green">100</span></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="row">
                          <div class="col fb-1-2">状态</div>
                          <div class="col fb-1-2"> <span class="icon-circle qualified"></span></div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="explain">
      <span class="icon-circle"></span>
       异常:连续10台数据中有6台不合格数据，则判定设备状态异常
    </div>
  </Container>
</template>
<script>
const opt1 = {
  backgroundColor: '',
  title: {
    text: '1号台位',
    left: 'center',
    textStyle: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    selected: true,
    left: 'left',
    top: '1%',
    icon: 'circle',
    data: [
      {
        name: '真空度(Pa)',
        itemStyle: {
          color: '#026fee',
        },
      },
    ],
    textStyle: { color: '#fff' },
  },
  grid: {
    top: '25%',
    left: '0',
    right: '1',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      position: 'bottom',
      axisLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      axisLabel: {
        color: '#fff',
        rotate: 30,
      },
      splitLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      data: ['08:37', '08:49', '08:52', '08:53', '09:01', '09:03', '09:32', '09:43', '09:58', '10:59'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      max: 20,
      // min:0,
      interval: 5,
      axisLabel: {
        color: '#fff',
      },
      position: 'left',
      axisLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      splitLine: { show: false },
    },
    {
      type: 'value',
      position: 'right',
      axisLine: {
        show: true,
        lineStyle: { color: '717b93' },
      },
    },
  ],
  series: [
    {
      name: '真空度(Pa)',
      type: 'line',
      stack: 'Total',
      color: '#0876fd',
      areaStyle: {
        color: '#0876fd',
        opacity: 0.5,
      },

      markLine: {
        symbol: ['none', 'none'],
        data: [
          {
            name: '最大值',
            yAxis: 20,
            lineStyle: {
              type: 'solid',
              color: '#ee0f58',
            },
          },
          {
            name: '最小值',
            yAxis: 10,
            lineStyle: {
              type: 'solid',
              color: '#10843e',
            },
          },
        ],
      },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
}

const opt2 = {
  backgroundColor: '',
  title: {
    text: '1号台位',
    left: 'center',
    textStyle: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    selected: true,
    left: 'left',
    top: '1%',
    icon: 'circle',
    data: [
      {
        name: '真空度(Pa)',
        itemStyle: {
          color: '#026fee',
        },
      },
    ],
    textStyle: { color: '#fff' },
  },
  grid: {
    top: '25%',
    left: '0',
    right: '1',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      position: 'bottom',
      axisLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      axisLabel: {
        color: '#fff',
        rotate: 30,
      },
      splitLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      data: ['08:37', '08:49', '08:52', '08:53', '09:01', '09:03', '09:32', '09:43', '09:58', '10:59'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      max: 20,
      // min:0,
      interval: 5,
      axisLabel: {
        color: '#fff',
      },
      position: 'left',
      axisLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      splitLine: { show: false },
    },
    {
      type: 'value',
      position: 'right',
      axisLine: {
        show: true,
        lineStyle: { color: '717b93' },
      },
    },
  ],
  series: [
    {
      name: '真空度(Pa)',
      type: 'line',
      stack: 'Total',
      color: '#0ae5ff',
      areaStyle: {
        color: '#0ae5ff',
        opacity: 0.5,
      },

      markLine: {
        symbol: ['none', 'none'],
        data: [
          {
            name: '最大值',
            yAxis: 20,
            lineStyle: {
              type: 'solid',
              color: '#ee0f58',
            },
          },
          {
            name: '最小值',
            yAxis: 10,
            lineStyle: {
              type: 'solid',
              color: '#10843e',
            },
          },
        ],
      },
      data: [5, 9, 8, 9, 0, 0, 0, 0, 0, 0],
    },
  ],
}
const opt3 = {
  backgroundColor: '',
  title: {
    text: '1号台位',
    left: 'center',
    textStyle: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    selected: true,
    left: 'left',
    top: '1%',
    icon: 'circle',
    data: [
      {
        name: '真空度(Pa)',
        itemStyle: {
          color: '#026fee',
        },
      },
    ],
    textStyle: { color: '#fff' },
  },
  grid: {
    top: '25%',
    left: '0',
    right: '1',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      position: 'bottom',
      axisLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      axisLabel: {
        color: '#fff',
        rotate: 30,
      },
      splitLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      data: ['08:37', '08:49', '08:52', '08:53', '09:01', '09:03', '09:32', '09:43', '09:58', '10:59'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      max: 20,
      // min:0,
      interval: 5,
      axisLabel: {
        color: '#fff',
      },
      position: 'left',
      axisLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      splitLine: { show: false },
    },
    {
      type: 'value',
      position: 'right',
      axisLine: {
        show: true,
        lineStyle: { color: '717b93' },
      },
    },
  ],
  series: [
    {
      name: '真空度(Pa)',
      type: 'line',
      stack: 'Total',
      color: '#ff9900',
      areaStyle: {
        color: '#ff9900',
        opacity: 0.5,
      },

      markLine: {
        symbol: ['none', 'none'],
        data: [
          {
            name: '最大值',
            yAxis: 20,
            lineStyle: {
              type: 'solid',
              color: '#ee0f58',
            },
          },
          {
            name: '最小值',
            yAxis: 10,
            lineStyle: {
              type: 'solid',
              color: '#10843e',
            },
          },
        ],
      },
      data: [3, 4, 9, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
}

const opt4 = {
  backgroundColor: '',
  title: {
    text: '1号台位',
    left: 'center',
    textStyle: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'normal',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    selected: true,
    left: 'left',
    top: '1%',
    icon: 'circle',
    data: [
      {
        name: '灌注量标准差(g)',
        itemStyle: {
          color: '#7ccefc',
        },
      },
    ],
    textStyle: { color: '#fff' },
  },
  grid: {
    top: '25%',
    left: '0',
    right: '1',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      position: 'bottom',
      axisLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      axisLabel: {
        color: '#fff',
        rotate: 30,
      },
      // splitLine: {
      //   show: true,
      //   lineStyle: { color: '#717b93' },
      // },
      data: ['08:37', '08:49', '08:52', '08:53', '09:01', '09:03', '09:32', '09:43', '09:58', '10:59'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      max: 10,
      min: -10,
      interval: 5,
      axisLabel: {
        color: '#fff',
      },
      position: 'left',
      axisLine: {
        show: true,
        lineStyle: { color: '#717b93' },
      },
      splitLine: { show: true, lineStyle: { color: '#717b93' } },
    },
    {
      type: 'value',
      position: 'right',
      axisLine: {
        show: true,
        lineStyle: { color: '717b93' },
      },
    },
  ],
  series: [
    {
      name: '灌注量标准差(g)',
      type: 'line',
      stack: 'Total',
      color: '#66ccff',
      markLine: {
        symbol: ['none', 'none'],
        data: [
          {
            name: '最大值',
            yAxis: 5,
            lineStyle: {
              type: 'solid',
              color: '#ee0f58',
            },
          },
          {
            name: '最小值',
            yAxis: -5,
            lineStyle: {
              type: 'solid',
              color: '#ee0f58',
            },
          },
        ],
      },
      data: [3, 4, 9, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
}
export default {
  name: 'KanbanFour',
  data() {
    return {
      opt1: null,
      opt2: null,
      opt3: null,
      opt4: null,
      opt5: null,
      opt6: null,
    }
  },
  created() {
    this.opt1 = opt1
    this.opt2 = opt2
    this.opt3 = opt3

    this.opt4 = opt4
    this.opt5 = opt4
    this.opt6 = opt4
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
$green:#00ed8b;
$red:#f12a42;
#KanbanFour {
  .head {
    flex-basis: 70px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .left {
    flex-basis: 90px;
    border: 1px solid #ddd;
  }
  .right {
    flex: 1;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 150px;
    font-size: 25px;
    border-radius: 30px;
    font-weight: normal;
    background-image: linear-gradient(to top,rgba(145, 71, 149, 1),rgba(14, 48, 143, 1));
    h6 {
      display: block;
      width: 25px;
      font-weight: normal;
      line-height: 50px;
    }
  }
  .explain{
     font-size: 14px;
    .icon-circle{
      display: inline-block;
      margin-right: 10px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color:#f12a42;
    }
    // letter-spacing:1px;
    margin: 20px 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color:#001736 ;
  }
  .table-info{
  .txt td{width: 25%;}
  .icon-circle{
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color:$green;
      }
  }
  .table{border-collapse:collapse; height: 70%;}
  .table td{
    text-align: center;
    font-size: 18px;
    border:1px solid #1c4780;
    }

  .green{color:$green;}
  .qualified{background-color:$green;}
  .unqualified{background-color:$red;}
}
</style>
