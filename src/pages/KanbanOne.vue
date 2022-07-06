<template>
  <Container id="KanbanOne">
    <div class="head"><HeadOne></HeadOne></div>
    <div class="main">
      <div
        class="row"
        style="flex-direction: column; flex-grow: 0; flex-basis: 24%"
      >
        <div class="col" style="flex-grow: 0; flex-basis: 45px">
          <div class="row info">
            <div class="col">
              <span class="num">1 5451</span>
              <span class="txt">目标</span>
            </div>
            <div class="col">
              <span class="num">10000</span>
              <span class="txt">完成</span>
            </div>
            <div class="col">
              <span class="num">58%</span>
              <span class="txt">完成率(%)</span>
            </div>
          </div>
        </div>
        <div
          class="col"
          style="flex-grow: 0; flex-basis: 18%; position: relative"
        >
          <h2
            class="squareDotTitle"
            style="position: absolute; left: 0; top: 10%"
          >
            Q-质量
          </h2>
          <Chart v-if="opt1" :option="opt1" />
        </div>
        <div class="col" style="flex-grow: 0; flex-basis: 18%">
          <Chart v-if="opt2" :option="opt2" />
        </div>
        <div
          class="col"
          style="flex-grow: 0; flex-basis: 18%; position: relative"
        >
          <h2
            class="squareDotTitle"
            style="position: absolute; left: 0; top: 10%"
          >
            D-交易
          </h2>
          <Chart v-if="opt1" :option="opt1" />
        </div>
        <div class="col" style="flex-grow: 0; flex-basis: 18%">
          <Chart v-if="opt4" :option="opt4" />
        </div>
        <div class="col safe">
          <div class="row" style="flex-direction: column">
            <div class="col" style="flex-grow: 0; flex-basis: 30px">
              <h2 class="squareDotTitle">S-安全</h2>
            </div>
            <div class="col days">
              <div class="days-name">安全生产天数</div>
              <div class="days-num">
                <div class="num-item">1</div>
                <div class="num-item">7</div>
                <div class="num-item">8</div>
              </div>
            </div>
            <div class="col grade" style="flex-direction: row">
              <div
                class="row grade-name"
                style="flex-direction: column; flex-grow: 0; flex-basis: 45px"
              >
                <div class="col fb-1-2">三级</div>
                <div class="col">九段</div>
              </div>
              <div class="row grade-content">
                <div class="row">
                  <div class="col fb-1-2"><div class="btn">标准级</div></div>
                  <div class="col">
                    <span>规矩段</span>
                    <span>规章段</span>
                    <span>规范段</span>
                  </div>
                </div>
                <div class="row grade-active">
                  <div class="col fb-1-2"><div class="btn">标准级</div></div>
                  <div class="col">
                    <span>精益段</span>
                    <span class="nine-active">精致段</span>
                    <span>精品段</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col fb-1-2"><div class="btn">标准级</div></div>
                  <div class="col">
                    <span>智能段</span>
                    <span>智控段</span>
                    <span>智慧段</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row fb-1-2" style="flex-direction: column">
        <div id="chart_map" class="col" style="flex-grow: 0; flex-basis: 75%"></div>
        <div class="col">
          <div class="row">
            <div class="col fb-1-2">
              <Chart v-if="opt5" :option="opt5" />
            </div>
            <div class="col">
              <Chart v-if="opt6" :option="opt6" />
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="flex-direction: column">
        <div class="col" style="flex-grow: 0; flex-basis: 45px"></div>
        <div
          class="col"
          style="flex-grow: 0; flex-basis: 18%; position: relative"
        >
          <h2
            class="squareDotTitle"
            style="position: absolute; left: 0; top: 10%"
          >
            C-成本
          </h2>
          <Chart v-if="opt1" :option="opt1" />
        </div>
        <div class="col" style="flex-grow: 0; flex-basis: 18%">
          <Chart v-if="opt1" :option="opt1" />
        </div>
        <div
          class="col"
          style="flex-grow: 0; flex-basis: 18%; position: relative"
        >
          <h2
            class="squareDotTitle"
            style="position: absolute; left: 0; top: 10%"
          >
            P-效率
          </h2>
          <Chart v-if="opt1" :option="opt1" />
        </div>
        <div class="col" style="flex-grow: 0; flex-basis: 18%">
          <Chart v-if="opt1" :option="opt1" />
        </div>
        <div class="col safe">
          <div class="row" style="flex-direction: column">
            <div class="col" style="position: relative">
              <h2
                class="squareDotTitle"
                style="position: absolute; left: 0; top: 10%"
              >
                M-士气
              </h2>
              <Chart v-if="opt1" :option="opt1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
<script>
import * as echarts from 'echarts/dist/echarts.esm'
import geoJson from '../json/china.json'

const opt1 = {
  backgroundColor: '',
  tooltip: { trigger: 'axis' },
  legend: {
    icon: 'circle',
    top: '8%',
    left: 'right',
    textStyle: { color: '#fff' },
    data: ['当年不良', '市场损失'],
  },
  grid: {
    top: '35%',
    left: '15%',
    right: '15%',
    bottom: '20%',
  },
  xAxis: {
    type: 'category',
    name: '（月）',
    nameGap: 30,
    nameTextStyle: {
      align: 'right',
      verticalAlign: 'top',
      lineHeight: 28,
      fontSize: 14,
      color: '#aaa',
    },
    axisLine: {
      lineStyle: { color: '#253553' },
    },
    axisLabel: {
      color: '#fff',
      fontSize: 12,
    },
    data: ['12', '1', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  },
  yAxis: [
    {
      type: 'value',
      name: '（万元）',
      nameLocation: 'middle',
      nameGap: 50,
      nameTextStyle: {
        fontSize: 16,
        color: '#407dc8',
      },
      position: 'left',
      alignTicks: true,
      min: 0,
      max: 5000,
      interval: 2500,
      axisLine: {
        show: true,
        lineStyle: { color: '#253553' },
      },
      axisLabel: {
        color: '#f5f6f7',
        fontSize: 12,
      },
    },
    {
      type: 'value',
      name: '（PPM）',
      nameLocation: 'middle',
      nameRotate: -90,
      nameGap: 50,
      nameTextStyle: {
        fontSize: 16,
        color: '#407dc8',
      },
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: { color: '253553' },
      },
      axisLabel: {
        color: '#f5f6f7',
        fontSize: 12,
      },
      splitLine: {
        lineStyle: {
          color: '#253553',
        },
      },
    },
  ],
  series: [
    {
      name: '市场损失',
      type: 'bar',
      color: '#045ddd',
      yAxisIndex: 0,
      label: {
        show: true,
        position: 'top',
        color: '#fff',
        fontSize: 9,
      },
      data: [
        4500, 4500, 4500, 4500, 4500, 4500, 4500, 4500, 4500, 4500, 4500, 4500,
      ],
    },
    {
      name: '当年不良',
      color: '#04cfce',
      type: 'line',
      yAxisIndex: 1,
      areaStyle: {
        color: '#01c0ca',
      },
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            fontSize: 9,
            textStyle: {
              color: '#fff',
            },
          },
        },
      },
      data: [
        2750, 2500, 2900, 2300, 2500, 2100, 2000, 2300, 2500, 2500, 2500, 2500,
      ],
    },
  ],
}
const opt2 = {
  backgroundColor: '',
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    icon: 'circle',
    top: '8%',
    left: 'right',
    textStyle: { color: '#fff' },
    data: ['验货合格', '电商满意度'],
  },
  grid: {
    top: '35%',
    left: '15%',
    right: '15%',
    bottom: '20%',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: { color: '#253553' },
    },
    axisLabel: {
      color: '#fff',
      fontSize: 12,
    },
    data: ['12', '1', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  },
  yAxis: [
    {
      type: 'value',
      name: '（%）',
      nameLocation: 'middle',
      nameGap: 50,
      nameTextStyle: {
        fontSize: 16,
        color: '#407dc8',
      },
      position: 'left',
      alignTicks: true,
      min: 0,
      max: 100,
      interval: 50,
      axisLine: {
        show: true,
        lineStyle: { color: '#253553' },
      },
      axisLabel: {
        color: '#f5f6f7',
        fontSize: 12,
      },
    },
    {
      type: 'value',
      name: '（%）',
      nameLocation: 'middle',
      nameRotate: -90,
      nameGap: 50,
      nameTextStyle: {
        fontSize: 16,
        color: '#407dc8',
      },
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: { color: '253553' },
      },
      axisLabel: {
        color: '#f5f6f7',
        fontSize: 12,
      },
      splitLine: {
        lineStyle: {
          color: '#253553',
        },
      },
      min: 0,
      max: 100,
      interval: 50,
    },
  ],
  series: [
    {
      name: '验货合格',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            fontSize: 9,
            textStyle: {
              color: '#fff',
            },
          },
        },
      },
      yAxisIndex: 0,
      color: '#63cb98',
      data: [20, 80, 60, 10, 90, 30, 10, 40, 80, 10, 64, 90],
    },
    {
      name: '电商满意度',
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'bottom',
            fontSize: 9,
            textStyle: {
              color: '#fff',
            },
          },
        },
      },
      yAxisIndex: 1,
      color: '#4992ff',
      data: [80, 20, 11, 60, 50, 30, 91, 40, 30, 91, 13, 60],
    },
  ],
}
// 中间
const opt5 = {
  backgroundColor: '',
  title: {
    text: '制造损失',
    x: 'center',
    y: 'center',
    textStyle: {
      fontSize: 16,
      color: '#ff8866',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      roseType: 'area',
      radius: ['40%', '95%'],
      label: {
        formatter: '{b}\n{d}%',
        color: '#fff',
      },

      data: [
        { value: 1048, name: '清单损益' },
        { value: 735, name: '托礼品损益' },
        { value: 580, name: '工程不良损益' },
        { value: 484, name: '停机损益' },
        { value: 300, name: '脱离拼损益' },
      ],
    },
  ],
}
const opt6 = {
  backgroundColor: '',
  title: {
    text: '员工培育',
    x: 'center',
    y: 'center',
    textStyle: {
      fontSize: 16,
      color: '#ff8866',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      roseType: 'area',
      radius: ['40%', '90%'],
      label: {
        formatter: '{b}\n{d}%',
        color: '#fff',
      },

      data: [
        { value: 1048, name: '清单损益' },
        { value: 735, name: '托礼品损益' },
        { value: 580, name: '工程不良损益' },
        { value: 484, name: '停机损益' },
        { value: 300, name: '脱离拼损益' },
      ],
    },
  ],
}
export default {
  name: 'KanbanOne',
  data() {
    return {
      // 左边
      opt1: null,
      opt2: null,
      opt4: null,
      // 中
      opt5: null,
      opt6: null,
    }
  },
  created() {
    this.opt1 = opt1
    this.opt2 = opt2
    this.opt4 = opt2
    this.opt5 = opt5
    this.opt6 = opt6
  },
  mounted() {
    this.$nextTick(() => {
      this.mapInit()
    })
  },
  methods: {
    mapInit() {
      const myChart = echarts.init(document.getElementById('chart_map'))
      myChart.showLoading()
      // this.$api.get(uploadedDataURL).then((geoJson) => {
      echarts.registerMap('china', geoJson)
      myChart.hideLoading()
      const geoCoordMap = {
        福州: [119.4543, 25.9222],
        长春: [125.8154, 44.2584],
        重庆: [107.7539, 30.1904],
        西安: [109.1162, 34.2004],
        成都: [103.9526, 30.7617],
        常州: [119.4543, 31.5582],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        海口: [110.3893, 19.8516],
        长沙: [113.019455, 28.200103],
        上海: [121.4, 31.73],
        内蒙古: [106.82, 39.67],
        石家庄: [113.019455, 28.200103],
      }
      const moveLine = {
        normal: [
          {
            fromName: '石家庄',
            toName: '福州',
            coords: [[113.019455, 28.200103], [119.4543, 25.9222]],
          },
          {
            fromName: '石家庄',
            toName: '长春',
            coords: [[113.019455, 28.200103], [125.8154, 44.2584]],
          },
          {
            fromName: '石家庄',
            toName: '重庆',
            coords: [[113.019455, 28.200103], [107.7539, 30.1904]],
          },
          {
            fromName: '石家庄',
            toName: '西安',
            coords: [[113.019455, 28.200103], [109.1162, 34.2004]],
          },
          {
            fromName: '石家庄',
            toName: '成都',
            coords: [[113.019455, 28.200103], [103.9526, 30.7617]],
          },
          {
            fromName: '石家庄',
            toName: '常州',
            coords: [[113.019455, 28.200103], [119.4543, 31.5582]],
          },
          {
            fromName: '石家庄',
            toName: '北京',
            coords: [[113.019455, 28.200103], [116.4551, 40.2539]],
          },
          {
            fromName: '石家庄',
            toName: '北海',
            coords: [[113.019455, 28.200103], [109.314, 21.6211]],
          },
          {
            fromName: '石家庄',
            toName: '海口',
            coords: [[113.019455, 28.200103], [110.3893, 19.8516]],
          },
          {
            fromName: '石家庄',
            toName: '上海',
            coords: [[113.019455, 28.200103], [121.4, 31.73]],
          },
          {
            fromName: '石家庄',
            toName: '内蒙古',
            coords: [[113.019455, 28.200103], [106.82, 39.67]],
          },
        ],
      }
      const data = [
        { name: '福州', value: 50 },
        { name: '长春', value: 60 },
        { name: '重庆', value: 30 },
        { name: '西安', value: 95 },
        { name: '成都', value: 10 },
        { name: '常州', value: 50 },
        { name: '北京', value: 80 },
        { name: '北海', value: 90 },
        { name: '海口', value: 20 },
        { name: '上海', value: 90 },
        { name: '内蒙古', value: 80 },
      ]

      const convertData = (data) => {
        const res = []
        for (let i = 0; i < data.length; i++) {
          const geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            })
          }
        }
        return res
      }

      const option = {
        backgroundColor: '',
        title: {
          text: '销售量',
          x: 'center',
          textStyle: { color: '#fff' },
        },
        tooltip: {
          trigger: 'item',
          formatter: (params) => params.name,
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['pm2.5'],
          textStyle: { color: '#fff' },
        },
        visualMap: {
          show: true,
          min: 0,
          max: 500,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],
          calculable: true,
          seriesIndex: [1],
          textStyle: { color: '#ffffff' },
          inRange: { color: ['lightskyblue', 'yellow', 'orangered'] },
        },
        geo: { show: false, map: 'china' },
        series: [
          {
            type: 'map',
            map: 'china',
            geoIndex: 1,
            aspectScale: 0.75, // 长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true,
                color: '#fff',
                formatter: (params) => `{value|${params.value ? params.value : 0}}\n{name|${
                  params.name
                }}`,
                rich: {
                  value: { color: '#41cef8', fontSize: 20 },
                  name: { color: '#fff', fontSize: 14 },
                },
              },
            },
            roam: false,
            itemStyle: {
              normal: {
                areaColor: 'transparent',
                borderColor: '#57c9ca',
                borderWidth: 1,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 0,
              },
              emphasis: { areaColor: '#2B91B7' },
            },
            animation: true,
            data,
          },
          {
            name: '城市',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 1,
            showEffectOn: 'render',
            rippleEffect: { scale: 3, brushType: 'stroke' },
            hoverAnimation: true, // 鼠标移上去显示数据
            label: {
              normal: {
                show: false,
                position: 'right',
                formatter: '{b}',
              },
              emphasis: { show: true },
            },
            data: convertData(data),
          },
          // 射线样式
          {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2, // 数值越大越在上面
            large: true,
            symbol: ['none', 'arrow'],
            lineStyle: {
              normal: {
                color: '#0fff17',
                width: 2,
                opacity: 0.6,
                curveness: 0.2,
              },
            },
            data: moveLine.normal,
          },
        ],
      }
      myChart.setOption(option)
      // })

      // (geoJson) => {

      // })
    },
  },
}
</script>
<style lang="scss" scoped>
#KanbanOne {
  background-image: url(@/assets/images/bj.jpg);
  background-size: cover;
  .head {
    flex-basis: 70px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
    margin: 0 10px 20px 10px;
  }
  .info {
    // display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .col {
      flex: 1;
      // text-align: center;
      &:nth-child(1) {
        .num {
          color: #59a8ff;
        }
      }
      &:nth-child(2) {
        .num {
          color: #17d2ee;
        }
      }
      &:nth-child(3) {
        .num {
          color: #e87e6e;
        }
      }
      // 3e97fc
      &:not(:last-child) {
        .num {
          &::before {
            content: "";
            position: absolute;
            right: 0;
            top: 25%;
            height: 50%;
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
        // margin-bottom: 5px;
        font-size: 30px;
        font-weight: bold;
      }
      .txt {
        font-size: $f-14;
      }
    }
  }
  .safe {
    .days {
      display: flex;
      flex-grow: 0;
      flex-basis: 25%;
      // line-height:100%;
      // text-align: center;
      flex-direction: row;
      justify-content: space-between;
      .days-name {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 40%;
        font-size: 16px;
        border-radius: 3px;
        background-color: #102c5c;
      }
      .days-num {
        display: flex;
        flex-basis: 50%;
        border-radius: 3px;
        background-color: #2063b4;
        .num-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          font-size: 28px;
          font-weight: bold;
          box-sizing: border-box;
          border-right: 1px solid #03173c;
          &:last-child {
            border: 0;
          }
        }
      }
    }
  }

  .grade {
    margin-top: 5px;
    background-color: #102c5c;
    .grade-name {
      .col {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .grade-content {
      .grade-active {
        background-color: #144591;
      }

      // .activate{ background-color: #144591;}
      .btn {
        margin-top: 12.5%;
        width: 85%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: $f-16;
        text-align: center;
        border-radius: 3px;
      }
      .row {
        flex-direction: column;
        .col {
          align-items: center;
          justify-content: center;
          &:nth-child(2) {
            flex-direction: row;
            span {
              margin: 0 3px;
              font-size: 12px;
              color: #82a2ca;
              &.nine-active {
                font-size: 14px;
                font-weight: bold;
                padding-bottom: 5px;
                border-bottom: 2px solid #32e4e2;
                color: #32e4e2;
              }
            }
          }
        }

        &:nth-child(1) {
          .btn {
            background-image: linear-gradient(#22c4bb, #03878b);
          }
        }
        &:nth-child(2) {
          .btn {
            background-image: linear-gradient(#258be7, #0668c0);
          }
        }
        &:nth-child(3) {
          .btn {
            background-image: linear-gradient(#f95455, #eb3538);
          }
        }
      }
    }
  }
}
</style>
