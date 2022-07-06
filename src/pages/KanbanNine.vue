<template>
  <Container id="KanbanNine">
    <div class="head"><Head></Head></div>
    <div class="main">
      <div class="row" style="flex-direction: column;flex-grow: 0;flex-basis:28%;">
         <Box class="col" style="flex-grow: 0;flex-basis:21%;">
          <div class="row" style="flex-direction:column;">
            <div class="col" style="flex-grow: 0;flex-basis:30px;">
             <h2 class="title">WMS</h2>
            </div>
            <div class="col">
              <div class="row">
                <div class="col fb-1-4">
                  <Chart v-if="opt1" :option="opt1" />
                </div>
                <div class="col fb-1-4">
                   <Chart v-if="opt2" :option="opt2" />
                </div>
                <div class="col fb-1-4">
                   <Chart v-if="opt3" :option="opt3" />
                </div>
                <div class="col fb-1-4">
                  <Chart v-if="opt4" :option="opt4" />
                </div>
              </div>
            </div>
          </div>
         </Box>
         <Box class="col" style="flex-grow: 0;flex-basis:39%;">
          <div class="row" style="flex-direction: column;">
            <div class="col" style="flex-grow: 0;flex-basis:30px;">
             <h2 class="title">库存交易</h2>
            </div>
            <div class="col fb-1-2"><Chart v-if="opt5" :option="opt5" /></div>
            <div class="col" style="align-items: center;">
               <div style="width:96%" >
                  <Table
                   class="tableNone"
                    size="mini"
                   :option="tableOpt1"
                   :border="false">
               </Table>
             </div>
            </div>
          </div>
         </Box>
         <Box class="col">
           <div class="row" style="flex-direction: column;">
            <div class="col" style="flex-grow: 0;flex-basis:30px;">
             <h2 class="title">库龄</h2>
            </div>
            <div class="col"><Chart v-if="opt6" :option="opt6" /></div>
          </div>
         </Box>
      </div>
      <div class="row" style="flex-direction: column;flex-grow: 0;flex-basis:45%;">
        <Box class="col" style="flex-grow: 0;flex-basis:62.5%;"></Box>
        <Box class="col retrieval">
          <div class="row" style="flex-direction: column;">
            <div class="col" style="flex-grow: 0;flex-basis:30px;">
            <div class="title">
              <h2 class=" fl">出入库曲线</h2>
               <ul class="fr info">
                <li>订单:<span class="red">36289</span>单</li>
                <li>物料种类：<span class="yellow">2060</span>类</li>
                <li>数量：<span class="light-blue">5678</span>个</li>
             </ul>
            </div>
            </div>
            <div class="col" >
                <Chart v-if="opt7" :option="opt7" />
            </div>
          </div>
        </Box>
      </div>
      <div class="row"  style="flex-direction: column;">
        <Box class="col WMS"  style="flex-grow: 0;flex-basis:21%;">
          <div class="row" style="flex-direction:column;">
            <div class="col" style="flex-grow: 0;flex-basis:30px;">
             <h2 class="title">WMS</h2>
            </div>
            <div class="col">

              <ul class="WMS-list">
                <li>
                  <span class="txt">运行空闲</span>
                  <span class="num">12</span>

                </li>
                <li>
                  <span class="txt">运行作业</span>
                  <span class="num">12</span>
                </li>
                <li>
                  <span class="txt">调试</span>
                  <span class="num">12</span>

                </li>
                <li>
                   <span class="txt">故障</span>
                   <span class="num">12</span>
                </li>
                <li>
                   <span class="txt">保养</span>
                   <span class="num">12</span>

                </li>
                <li>

                   <span class="txt">未开机</span>
                   <span class="num">12</span>

                </li>
              </ul>
            </div>
          </div>
        </Box>
         <Box class="col throughPut"  style="flex-grow: 0;flex-basis:39%;">
          <div class="row" style="flex-direction: column;">
            <div class="col" style="flex-grow: 0;flex-basis:30px;">
             <h2 class="title">设备稼动率</h2>
            </div>
            <div class="col" style="flex-grow: 0;flex-basis:100px;justify-content: center;">
               <ul class="throughPut-info">
                <li>
                  <span class="time">90.21%</span>
                  <span class="name">OEE</span>
                </li>
                <li>
                  <span class="time">90分钟</span>
                  <span class="name">MTTR</span>
                </li>
                <li>
                 <span class="time">90小时</span>
                  <span class="name">MTBF</span>
                </li>
               </ul>
            </div>
            <div class="col" style="align-items: center;">
               <div style="width:96%">
                  <Table
                   class="tableNone"
                    size="mini"
                   :option="tableOpt1"
                   :border="false">
               </Table>
             </div>
            </div>
          </div>
         </Box>
         <Box class="col">
                <div class="row" style="flex-direction: column;">
            <div class="col" style="flex-grow: 0;flex-basis:40px;">
             <h2 class="title">设备稼动率</h2>
            </div>
            <div class="col " style="align-items: center;">
              <div style="width: 100%">
                <Table :option="tableOpt3"  :border="true" size="mini">
                    <template v-slot:oneMonth="row">
                        <div v-show="row.scope.oneMonth" class="icon-circle"></div>
                    </template>

                    <template v-slot:threeMonths="row">
                        <div v-show="row.scope.threeMonths" class="icon-circle"></div>
                    </template>

                    <template v-slot:sixMonths="row">
                        <div v-show="row.scope.sixMonths" class="icon-circle"></div>
                    </template>

                    <template v-slot:other="row">
                        <div v-show="row.scope.other" class="icon-circle"></div>
                    </template>

                </Table>
              </div>
            </div>
            </div>
         </Box>
      </div>
    </div>
  </Container>
</template>
<script>
// 左边
const opt1 = {
  backgroundColor: '',
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: -180,
      itemStyle: { color: '#c30486' },
      pointer: { show: false },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
      },
      axisLine: {
        lineStyle: {
          width: 5,
        },
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        distance: 50,
      },
      data: [
        {
          value: 60,
          name: '入库量',
          title: {
            offsetCenter: ['0%', '30%'],
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-20%'],
          },
        },
      ],
      title: {
        fontSize: 14,
      },
      detail: {
        fontSize: 20,
        color: '#88dcf0',
        formatter: '1045',
      },
    },
  ],
}
const opt2 = {
  backgroundColor: '',
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: -180,
      itemStyle: { color: '#00cccc' },
      pointer: { show: false },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
      },
      axisLine: {
        lineStyle: {
          width: 5,
        },
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        distance: 50,
      },
      data: [
        {
          value: 60,
          name: '出库量',
          title: {
            offsetCenter: ['0%', '30%'],
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-20%'],
          },
        },
      ],
      title: {
        fontSize: 14,
      },
      detail: {
        fontSize: 20,
        color: '#88dcf0',
        formatter: '1045',
      },
    },
  ],
}
const opt3 = {
  backgroundColor: '',
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: -180,
      itemStyle: { color: '#ff6600' },
      pointer: { show: false },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
      },
      axisLine: {
        lineStyle: {
          width: 5,
        },
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        distance: 50,
      },
      data: [
        {
          value: 60,
          name: '库存量',
          title: {
            offsetCenter: ['0%', '30%'],
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-20%'],
          },
        },
      ],
      title: {
        fontSize: 14,
      },
      detail: {
        fontSize: 20,
        color: '#88dcf0',
        formatter: '1045',
      },
    },
  ],
}
const opt4 = {
  backgroundColor: '',
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: -180,
      itemStyle: { color: '#99ff00' },
      pointer: { show: false },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
      },
      axisLine: {
        lineStyle: {
          width: 5,
        },
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        distance: 50,
      },
      data: [
        {
          value: 60,
          name: 'SKU',
          title: {
            offsetCenter: ['0%', '30%'],
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-20%'],
          },
        },
      ],
      title: {
        fontSize: 14,
      },
      detail: {
        fontSize: 20,
        color: '#88dcf0',
        formatter: '1045',
      },
    },
  ],
}
const opt5 = {
  backgroundColor: '',
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    top: 5,
    data: ['入库', '出库'],
  },
  grid: {
    top: '20%',
    left: '3%',
    right: '4%',
    bottom: '15%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: true,
        lineStyle: { color: '#253553' },
      },
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: { color: '#253553' },
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
      name: '入库',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: { width: 1 },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: '#009966',
      },
      emphasis: {
        focus: 'series',
      },
      data: [140, 232, 101, 264, 90, 340, 250, 140, 232, 101, 264, 90, 340, 250.140, 232, 101, 264, 90, 340, 250.140, 232, 101, 1000, 500],
    },
    {
      name: '出库',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: { width: 1 },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: '#0099cc',
      },
      emphasis: {
        focus: 'series',
      },
      data: [120, 282, 111, 234, 220, 340, 310, 232, 101, 264, 90, 340, 250.140, 232, 101, 264, 90, 340, 250.140, 232, 101, 1000, 500, 800],
    },
  ],
}
const opt6 = {
  backgroundColor: '',
  legend: {
    orient: 'vertical',
    x: 'left',
    y: '10px',
    icon: 'circle',
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: '70%',
      center: ['50%', '50%'],
      roseType: 'area',
      label: {
        color: '#ffffff',
      },
      data: [
        {
          value: 40,
          name: '一个星期',
          itemStyle: {
            normal: {
              color: '#fa44f1',
            },
          },
        },
        {
          value: 38,
          name: '一个月',
          itemStyle: {
            normal: {
              color: '#aa48f0',
            },
          },
        },
        {
          value: 32,
          name: '三个月',
          itemStyle: {
            normal: {
              color: '#4f44f6',
            },
          },
        },
        {
          value: 30,
          name: '六个月',
          itemStyle: {
            normal: {
              color: '#4777f5',
            },
          },
        },
        {
          value: 28,
          name: '一年',
          itemStyle: {
            normal: {
              color: '#45aef0',
            },
          },
        },
      ],
    },
  ],
}

// 中
const opt7 = {
  backgroundColor: '',
  legend: {
    top: 10,
    x: 'left',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: true,
      lineStyle: { color: '#253553' },
    },
    data: ['8-20', '8-21', '8-22', '8-23', '8-24', '8-25', '8-26'],
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: { color: '#253553' },
    },
    splitLine: {
      lineStyle: {
        color: '#253553',
      },
    },
  },
  series: [
    {
      name: '入库数量',
      type: 'bar',
      color: '#24cdf4',
      barWidth: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0],
        },
      },
      data: [120, 200, 150, 80, 70, 110, 130],

    },
    {
      name: '出库数量',
      type: 'bar',
      color: '#d7b224',
      barWidth: '10%',
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0],
        },
      },
      data: [120, 200, 150, 80, 70, 110, 130],
    },
  ],
}
export default {
  name: 'KanbanNine',
  data() {
    return {
      // 左边
      opt1: null,
      opt2: null,
      opt3: null,
      opt4: null,
      opt5: null,
      opt6: null,
      tableOpt1: {
        cols: [
          { prop: 'taskType', name: '任务类型' },
          { prop: 'location', name: '入库车位' },
          { prop: 'operator', name: '操作人' },
          { prop: 'date', name: '时间' },
        ],
        data: [
          {
            taskType: '补充入库',
            location: 'TST5640',
            operator: '张三',
            date: '2020/4/20',
          },
          {
            taskType: '王五',
            location: 1000,
            operator: 589,
            date: '正常',
          },
          {
            taskType: '李四',
            location: 1000,
            operator: 589,
            date: '正常',
          },
        ],
      },
      // 中
      opt7: null,
      tableOpt2: {
        cols: [
          { prop: 'name', name: '项目名称' },
          { prop: 'faultNo', name: '故障编号' },
          { prop: 'faultCode', name: '故障代号' },
          { prop: 'date', name: '时间' },
        ],
        data: [
          {
            name: '补充入库',
            faultNo: 'TST5640',
            faultCode: '张三',
            date: '2020/4/20',
          },
          {
            name: '王五',
            faultNo: 1000,
            faultCode: 589,
            date: '正常',
          },
          {
            name: '李四',
            faultNo: 1000,
            faultCode: 589,
            date: '正常',
          },
        ],
      },
      // 右
      tableOpt3: {
        cols: [
          { prop: 'bootKey', name: 'ERH复键开机' },
          { prop: 'oneMonth', name: '1个月', isSlot: true },
          { prop: 'threeMonths', name: '3个月', isSlot: true },
          { prop: 'sixMonths', name: '6个月', isSlot: true },
          { prop: 'other', name: '其他', isSlot: true },
        ],
        data: [
          {
            bootKey: '1#', oneMonth: true, threeMonths: false, sixMonths: false, other: false,
          },
          {
            bootKey: '2#', oneMonth: false, threeMonths: true, sixMonths: false, other: false,
          },
          {
            bootKey: '3#', oneMonth: false, threeMonths: false, sixMonths: true, other: false,
          },
        ],
      },
    }
  },
  created() {
    this.opt1 = opt1
    this.opt2 = opt2
    this.opt3 = opt3
    this.opt4 = opt4
    this.opt5 = opt5
    this.opt6 = opt6
    this.opt7 = opt7
  },
  methods: {},
}

</script>
<style lang="scss" scoped>
#KanbanNine {
    background-color: #00142e;
  .head {
    flex-basis: 70px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .title{
    padding-bottom: 10px;
    font-size: $f-16;
    // height: 30px;
    // line-height: 30px;
    font-weight: normal;
    border-bottom: 1px solid #0b4776;
  }
  .retrieval{
    .info{
      display: flex;
      flex-direction: row;
      font-size: $f-14;
      li{margin-left: 20px;}
      span{padding: 0 3px;}
    }
  }
  .red{color:#cc3333}
  .yellow{color:#ffcc00}
  .light-blue{color:#3399cc;}
  .WMS{
    overflow: hidden;
    .WMS-list{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        box-sizing:border-box ;
        margin: 10px 0;
        padding: 0 3%;
        width:calc(33.3% - 15px);
        height: 45px;
        line-height: 45px;
        border: 1px solid #2b668a;
        box-shadow: 0 0 3px #409dd1 inset;
      }
      // span{padding: 0 10px;}
      .WWS-box{overflow: hidden; margin: 0px;}
      .txt{float: left; color:#ddd;}
      .num{float: right;color:#00cccc;font-size: $f-16;}
    }
  }
  .throughPut{
    .throughPut-info{
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      li{flex: 1; margin: 0 15px;}
      span{display: block; text-align: center;}
      .time{
        position: relative;
        margin-bottom: 10px;
        line-height: 40px;
        color:$light-blue;
        background-color: #004e7c;
        border-radius: 20px;
        &::before{
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          bottom: 3px;
          content: '';
          border: 1px solid #0cb3d0;
          border-radius: 20px;
        }
        }
      .name{
        font-size: $f-12;
        color:#ccc;
      }
    }
  }
  .icon-circle{
    margin: 0 auto;
    width: 13px;
    height: 13px;
    background-color: $red;
    border-radius: 50%;
  }
}
</style>
