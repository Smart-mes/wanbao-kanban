<template>
  <Container id="KanbanFour">
    <div class="head"><Head></Head></div>
    <div class="main">
      <div class="row left">
         <!-- <div class="col energyInfo">
                <ul class="energyInfo-list">
                  <li>总电耗：3.00/25/50</li>
                  <li>总能耗：0.00/25</li>
                </ul>
         </div> -->
         <div class="col defend">
              <h3 class=" squareDotTitle"> 设备维护 </h3>
              <Table
                class="tableNone"
                 size="mini"
                :option="tableOpt1"
                :border="false">
              </Table>
         </div>
         <div class="col device">
             <div class="title-box">
              <h3 class="squareDotTitle">相关设备</h3>
              <ul class="explain">
                <li><span class="icon error"></span>负债过高</li>
                <li><span class="icon primary"></span>负载正常</li>
              </ul>
             </div>
            <ul class="device-list">
              <li>注塑机a-1--m86u4</li>
              <li class="error">注塑机a-2--m86u4</li>
              <li>注塑机a-3--m86u4</li>
              <li>注塑机a-4--m86u4</li>
              <li>注塑机a-5--m86u4</li>
              <li class="primary">注塑机a-6--m86u4</li>
              <li>注塑机a-7--m86u4</li>
              <li>注塑机a-8--m86u4</li>
            </ul>
         </div>
         <div class="col material">
           <h3 class=" squareDotTitle">物料请求</h3>
          <div>
            <Table
              class="tableNone"
              size="mini"
              :option="tableOpt2"
              :border="false"
              :stripe='true'>
           </Table>
           </div>
         </div>
      </div>
      <div class="row" style="flex-direction: column;flex-grow: 0; flex-basis:45%;">
         <div class="row matter" style="flex-grow: 0; flex-basis:70%;">
          <div class="col" style="align-items: center;justify-content: center;">
            <div class="img"><img src="../assets/images/img2.png"/></div>
          </div>
            <div class="matterInfo">
              <h3 class="squareDotTitle">场内物料 </h3>
              <Table
                class="tableNone"
                size="mini"
                :option="tableOpt3"
                :border="false"
                >
              </Table>
            </div>
          <!-- <div class="col" style="flex-grow: 0; flex-basis:240px;padding:20px 10px 0 0;">
            <div>
              <h3 class="squareDotTitle">场内物料 </h3>
              <Table
                class="tableNone"
                size="mini"
                :option="tableOpt2"
                :border="false"
                >
              </Table>
            </div>
          </div> -->
         </div>
         <div class="row" style="flex-direction: column;">
           <div class="col" style="flex-grow: 0; flex-basis:30px;">
            <ul class="info-list">
              <li>运行状态：<span class="txt">85</span><span class="unit">里</span></li>
              <li>能耗：<span class="txt">117</span><span class="unit">KM/H</span></li>
              <li>生产数量：<span class="txt">89</span><span class="unit">MM</span></li>
            </ul>
           </div>
          <div class="col"><Chart v-if="opt1" :option="opt1" /></div>
         </div>
      </div>
      <div class="row right">
        <div class="col produce">
          <h3 class=" squareDotTitle">生产管理 </h3>
            <ul class="info-list">
              <li>运行状态：<span class="txt">85</span><span class="unit">里</span></li>
              <li>能耗：<span class="txt">185</span><span class="unit">KM/H</span></li>
              <li>生产数量：<span class="txt">72</span><span class="unit">MM</span></li>
            </ul>
          </div>
         <div class="col" style="flex-grow: 0; flex-basis:35%;">
           <Chart v-if="opt2" :option="opt2" />
         </div>
        <div class="col"  style="flex-grow: 0; flex-basis:15%;">
          <Chart v-if="opt3" :option="opt3" />
        </div>
        <div class="row storage" style="flex-direction: column;">
          <div class="col" style="flex-grow: 0;">
             <h3 class="squareDotTitle">厂内仓储情况</h3>
          </div>
          <div class="row">
            <div class="row fb-1-2" style="flex-direction: column;overflow: hidden;margin-right: 20px;">
              <div class="col subtitle"><h6>本月仓储情况</h6></div>
              <div class="col">
                <img src="@/assets/images/storage.jpg"/>
              </div>
            </div>
            <div class="row" style="flex-direction: column">
              <div class="col subtitle"><h6>半成品仓</h6></div>
              <div class="col">
                <div>
                  <Table
                    class="tableNone"
                    size="mini"
                    :option="tableOpt2"
                    :border="false"
                    :stripe='true'>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
<script>
const opt1 = {
  backgroundColor: '',
  grid: {
    top: '8%',
    left: '6%',
    right: '5%',
    bottom: '20%',
  },
  xAxis: {
    type: 'category',
    axisLine: { lineStyle: { color: '#253553' } },
    axisLabel: { rotate: 60 },
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
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}
// 右
const opt2 = {
  backgroundColor: '',
  title: {
    text: '效率时速',
    top: 15,
    textStyle: {
      fontSize: 16,
      fontWeight: 'normal',
    },
  },

  tooltip: {
    trigger: 'axis',
  },
  legend: {
    orient: 'vertical',
    top: 'center',
    left: 'right',
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
  },
  grid: {
    top: '20%',
    left: '3%',
    right: '25%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
}
// 散点图
const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
  '7a', '8a', '9a', '10a', '11a',
  '12p', '1p', '2p', '3p', '4p', '5p',
  '6p', '7p', '8p', '9p', '10p', '11p',
]
const days = ['Saturday']

let data = [
  [0, 0, 5],
  [0, 1, 1],
  [0, 2, 0],
  [0, 3, 0],
  [0, 4, 0],
  [0, 5, 0],
  [0, 6, 0],
  [0, 7, 0],
  [0, 8, 0],
  [0, 9, 0],
  [0, 10, 0],
  [0, 11, 2],
  [0, 12, 4],
  [0, 13, 1],
  [0, 14, 1],
  [0, 15, 3],
  [0, 16, 4],
  [0, 17, 6],
  [0, 18, 4],
  [0, 19, 4],
  [0, 20, 3],
  [0, 21, 3],
  [0, 22, 2],
  [0, 23, 5],
  [1, 0, 7],
  [1, 1, 0],
  [1, 2, 0],
  [1, 3, 0],
  [1, 4, 0],
  [1, 5, 0],
  [1, 6, 0],
  [1, 7, 0],
  [1, 8, 0],
  [1, 9, 0],
  [1, 10, 5],
  [1, 11, 2],
  [1, 12, 2],
  [1, 13, 6],
  [1, 14, 9],
  [1, 15, 11],
  [1, 16, 6],
  [1, 17, 7],
  [1, 18, 8],
  [1, 19, 12],
  [1, 20, 5],
  [1, 21, 5],
  [1, 22, 7],
  [1, 23, 2],
  [2, 0, 1],
  [2, 1, 1],
  [2, 2, 0],
  [2, 3, 0],
  [2, 4, 0],
  [2, 5, 0],
  [2, 6, 0],
  [2, 7, 0],
  [2, 8, 0],
  [2, 9, 0],
  [2, 10, 3],
  [2, 11, 2],
  [2, 12, 1],
  [2, 13, 9],
  [2, 14, 8],
  [2, 15, 10],
  [2, 16, 6],
  [2, 17, 5],
  [2, 18, 5],
  [2, 19, 5],
  [2, 20, 7],
  [2, 21, 4],
  [2, 22, 2],
  [2, 23, 4],
  [3, 0, 7],
  [3, 1, 3],
  [3, 2, 0],
  [3, 3, 0],
  [3, 4, 0],
  [3, 5, 0],
  [3, 6, 0],
  [3, 7, 0],
  [3, 8, 1],
  [3, 9, 0],
  [3, 10, 5],
  [3, 11, 4],
  [3, 12, 7],
  [3, 13, 14],
  [3, 14, 13],
  [3, 15, 12],
  [3, 16, 9],
  [3, 17, 5],
  [3, 18, 5],
  [3, 19, 10],
  [3, 20, 6],
  [3, 21, 4],
  [3, 22, 4],
  [3, 23, 1],
  [4, 0, 1],
  [4, 1, 3],
  [4, 2, 0],
  [4, 3, 0],
  [4, 4, 0],
  [4, 5, 1],
  [4, 6, 0],
  [4, 7, 0],
  [4, 8, 0],
  [4, 9, 2],
  [4, 10, 4],
  [4, 11, 4],
  [4, 12, 2],
  [4, 13, 4],
  [4, 14, 4],
  [4, 15, 14],
  [4, 16, 12],
  [4, 17, 1],
  [4, 18, 8],
  [4, 19, 5],
  [4, 20, 3],
  [4, 21, 7],
  [4, 22, 3],
  [4, 23, 0],
  [5, 0, 2],
  [5, 1, 1],
  [5, 2, 0],
  [5, 3, 3],
  [5, 4, 0],
  [5, 5, 0],
  [5, 6, 0],
  [5, 7, 0],
  [5, 8, 2],
  [5, 9, 0],
  [5, 10, 4],
  [5, 11, 1],
  [5, 12, 5],
  [5, 13, 10],
  [5, 14, 5],
  [5, 15, 7],
  [5, 16, 11],
  [5, 17, 6],
  [5, 18, 0],
  [5, 19, 5],
  [5, 20, 3],
  [5, 21, 4],
  [5, 22, 2],
  [5, 23, 0],
  [6, 0, 1],
  [6, 1, 0],
  [6, 2, 0],
  [6, 3, 0],
  [6, 4, 0],
  [6, 5, 0],
  [6, 6, 0],
  [6, 7, 0],
  [6, 8, 0],
  [6, 9, 0],
  [6, 10, 1],
  [6, 11, 0],
  [6, 12, 2],
  [6, 13, 1],
  [6, 14, 3],
  [6, 15, 4],
  [6, 16, 0],
  [6, 17, 0],
  [6, 18, 0],
  [6, 19, 0],
  [6, 20, 1],
  [6, 21, 2],
  [6, 22, 2],
  [6, 23, 6],
]
data = data.map((item) => [item[1], item[0], item[2]])

const opt3 = {
  backgroundColor: '',
  title: {
    text: '产能效率',
    top: 20,
    textStyle: {
      fontSize: 16,
      fontWeight: 'normal',
    },
  },
  tooltip: {
    position: 'top',
    formatter(params) {
      return `${params.value[2]} commits in ${hours[params.value[0]]} of ${days[0]}`
    },
  },
  grid: {
    top: 40,
    left: 0,
    bottom: '50%',
    right: 10,
    // containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: hours,
  },
  yAxis: {
    type: 'category',
    data: days,
    show: false,
  },
  series: [{
    name: 'Punch Card',
    type: 'scatter',
    symbolSize(val) {
      return val[2] * 1
    },
    data,
    animationDelay(idx) {
      return idx * 1
    },
  }],
}

export default {
  name: 'KanbanFour',
  data() {
    return {
      tableOpt1: {
        cols: [
          {
            prop: 'deviceName', name: '设备名称', attr: { width: '125px', showOverflowTooltip: true },
          },
          { prop: 'checkTime', name: '检查时间', attr: { width: '90px', showOverflowTooltip: true } },
          { prop: 'feedback', name: '反馈状态', attr: { showOverflowTooltip: true } },
          { prop: 'utilization', name: '设备使用率' },
        ],
        data: [
          {
            deviceName: '液压机1mk-51544',
            checkTime: '2019/12/12',
            feedback: 'SUSPECT',
            utilization: '75%',
          },
          {
            deviceName: '液压机mk 51544',
            checkTime: '2019/12/12',
            feedback: 'SUSPECT',
            utilization: '75%',
          },
          {
            deviceName: '液压机1mk-51544',
            checkTime: '2019/12/12',
            feedback: 'SUSPECT',
            utilization: '75%',
          },
          {
            deviceName: '液压机1mk-51544',
            checkTime: '2019/12/12',
            feedback: 'SUSPECT',
            utilization: '75%',
          },
          {
            deviceName: '液压机1mk-51544',
            checkTime: '2019/12/12',
            feedback: 'SUSPECT',
            utilization: '75%',
          },
        ],
      },
      tableOpt2: {
        cols: [
          { prop: 'duration', name: '维持时长', attr: { showOverflowTooltip: true } },
          { prop: 'consume', name: '物料消耗', attr: { showOverflowTooltip: true } },
          { prop: 'rate', name: '消耗率', attr: { showOverflowTooltip: true } },
        ],
        data: [
          {
            duration: 1615,
            consume: 6693,
            rate: '99.6%',
          },
          {
            duration: 1615,
            consume: 6693,
            rate: '99.6%',
          },
          {
            duration: 1615,
            consume: 6693,
            rate: '99.6%',
          },
          {
            duration: 1615,
            consume: 6693,
            rate: '99.6%',
          },
        ],
      },
      tableOpt3: {
        cols: [
          { prop: 'duration', name: '维持时长', attr: { showOverflowTooltip: true, width: '70px' } },
          { prop: 'consume', name: '物料消耗', attr: { showOverflowTooltip: true, width: '70px' } },
          { prop: 'rate', name: '消耗率', attr: { showOverflowTooltip: true, width: '60px' } },
        ],
        data: [
          {
            duration: 1615,
            consume: 6693,
            rate: '99.6%',
          },
          {
            duration: 1615,
            consume: 6693,
            rate: '99.6%',
          },
          {
            duration: 1615,
            consume: 6693,
            rate: '99.6%',
          },
          {
            duration: 1615,
            consume: 6693,
            rate: '99.6%',
          },
        ],
      },
      // 中
      opt1: null,
      opt2: null,
      opt3: null,
    }
  },
  created() {
    this.opt1 = opt1
    this.opt2 = opt2
    this.opt3 = opt3
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
#KanbanFour {
  background: linear-gradient(to top right, #12284b, #090a29);
  .head {flex-basis: 70px;}
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #1f335e;
  }
  .left{
    flex-direction: column;
    flex-grow: 0;
    flex-basis:22%;
    padding:20px;
    color: #ddd;
    font-size: $f-14;
    border-right: 1px solid #1f335e;
    // background-color:#0a0a29;

    .energyInfo{
      flex-grow: 0; flex-basis:38px;
      .energyInfo-list{
        line-height: 1.4;
        color:#b8caf4;
      }
    }
    .defend{
      flex-grow: 0; flex-basis:250px;
      ::v-deep.kanban-table.el-table {background-color: #0e1d3e;}
      ::v-deep.kanban-table.el-table td{background-color:#0e1d3e;}
      ::v-deep.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell{background-color:#2d3c5b;}
    }
    .device{
      flex-grow: 0; flex-basis:260px;
      .title-box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .explain{
        display: flex;
        font-size: $f-12;
        color: #666;
        >li{
          margin-left: 20px;
          .icon{margin-right: 5px; display: inline-block; width: 5px;height: 5px;}
        }
      }
      .device-list{
        >li{
          padding: 5px 0;
          color: #999;
          span{padding:0 10px;}
        }
      }
      .error{color: $white!important; background-color:#ff2d6c;}
      .primary{color: $white!important;background-color:#0f57e9;}
    }
    .material{
      ::v-deep.kanban-table.el-table {background-color: #112447;}
      ::v-deep.kanban-table.el-table td{background-color:#112447;}
      ::v-deep.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell{background-color:#2d3c5b;}
    }
  }

  // 中
 .info-list{
    display: flex;
    li{margin-left: 20px;font-size: 14px;}
    .txt{font-size: 20px;}
    .unit{padding-left:5px;color:#aa1a40;font-size:$f-12;}
  }
  // 中
  .matter{
    position: relative;
    .squareDotTitle{margin-left: 5px;}
    .img{
      padding-right: 100px;
      width: 55%;
      img{width: 100%;}
    }
    .matterInfo{
      position:absolute;
      top:20px;
      right:5px;
      overflow: hidden;

    }
    ::v-deep.kanban-table.el-table {background-color: #0c1333;}
    ::v-deep .kanban-table.el-table th.is-leaf{background-color:#0c1333;}
    ::v-deep.kanban-table.el-table td{color: #809bc9;background-color:#0c1333; padding: 1px 0;}
  }
  // 右
  .right{
    flex-direction: column;border-left:1px solid #1f335e; padding: 20px;

  .produce{
    flex-grow: 0; flex-basis:75px;
    // .squareDotTitle{margin-top: 10px;}
    .info-list{
      // margin: 5px 0;
      padding-left: 5px ;
      li{margin: 0 20px 0 0;}
    }
  }
  .storage{
    .subtitle{
      margin-bottom: 20px;
      flex-grow: 0;
      justify-content: center;
      h6{
        font-size: $f-16;font-weight: normal;
      }
    }
  }
  }
  .squareDotTitle{
    margin:10px 0;
  }

}
</style>
