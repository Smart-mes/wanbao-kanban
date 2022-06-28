<template>
  <Container id="KanbanFour">
    <div class="head"><HeadTwo></HeadTwo></div>
    <div class="main">
      <div class="row" style="flex-direction: column;flex-grow: 0; flex-basis:25%" >
          <Box class="col time" style="flex-grow: 0; flex-basis:8%;">
             <div class="row" style="align-items: center;justify-content: center;">
                <div class="col" style="flex-grow: 0; flex-basis:35%">
                  <icon
                   icon-name="shijian"
                   fontSize="40px"
                   color="#00cff6"
                   style=" text-align: center;height: 40px;line-height: 0.9;">
                   </icon>
                </div>
                <div class="col" style="flex-direction: column;flex-grow: 0; flex-basis:100px">
                  <span class="date">2020/11/18</span>
                  <span class="date">21 :39 :06</span>
                </div>
                <div class="col">
                  <span class="week">星期三</span>
                </div>
             </div>
          </Box>
          <Box class="col" style="flex-grow: 0; flex-basis:36%; overflow: hidden;">
              <h3 class="title">人员出勤状态</h3>
             <div>
               <Table
                class="table"
               :option="tableOpt1" :stripe='true' size="medium" :border="false">
                 <template v-slot:state="row">
                   <div :class="{'red-bj':row.scope.state==='迟到'}">{{row.scope.state}}</div>
                 </template>
               </Table>
              </div>
          </Box>
          <Box class="col">
                  <div class="row" style="flex-direction: column;">
                    <div class="col" style="flex-grow: 0; flex-basis:42px">
                     <h3 class="title">设备实时状态</h3>
                     </div>
                    <div class="col"><Chart v-if="opt1" :option="opt1" /></div>
                    <div class="col" style="flex-grow: 0; flex-basis:40px;">
                      <div class="row device-text" style="text-align: center;align-items: center;">
                        <div class="col"><span class="name">生产中:</span>60</div>
                        <div class="col"><span class="name">未生产:</span>5</div>
                        <div class="col"><span class="name">故障中:</span>9</div>
                      </div>
                    </div>
                  </div>
          </Box>
      </div>
      <div class="row fb-1-2" style="flex-direction: column;">
          <div class="col" style="flex-grow: 0; flex-basis:49%;" >
            <div class="row fb-1-2">
              <Box class="col fb-1-2" style="margin:10px 0 1px 10px">
                 <div class="row workshop">
                  <div class="col">
                    <div class="row"  style="flex-direction: column;padding-left: 15%;">
                        <div class="col title" style="flex-direction: row; align-items: center;">
                          <icon icon-name="dizhi" font-size="20px" color="#2cb3e3" class="icon"></icon>
                          冲压1车间
                        </div>
                        <div class="col name light-blue">计划产量</div>
                        <div class="col txt light-blue">2342</div>
                        <div class="col name green">实际产量</div>
                        <div class="col txt green">1235</div>
                    </div>
                  </div>
                  <div class="col fb-1-2">
                    <Chart v-if="opt2" :option="opt2" />
                  </div>
                 </div>
              </Box>
              <Box class="col" style="margin:10px 10px 1px 1px">
                 <div class="row workshop">
                  <div class="col">
                    <div class="row"  style="flex-direction: column;padding-left: 15%;">
                        <div class="col title" style="flex-direction: row; align-items: center;">
                          <icon icon-name="dizhi" font-size="20px" color="#d685e0" class="icon"></icon>
                          冲压1车间
                        </div>
                        <div class="col name light-blue">计划产量</div>
                        <div class="col txt light-blue">2342</div>
                        <div class="col name green">实际产量</div>
                        <div class="col txt green">1235</div>
                    </div>
                  </div>
                  <div class="col fb-1-2">
                    <Chart v-if="opt3" :option="opt3" />
                  </div>
                 </div>
              </Box>
            </div>
            <div class="row fb-1-2">
              <Box class="col fb-1-2" style="margin:0 1px 10px 10px">
                <div class="row workshop">
                  <div class="col">
                    <div class="row"  style="flex-direction: column;padding-left: 15%;">
                        <div class="col title" style="flex-direction: row; align-items: center;">
                          <icon icon-name="dizhi" font-size="20px" color="#10cb8c" class="icon"></icon>
                          冲压1车间
                        </div>
                        <div class="col name light-blue">计划产量</div>
                        <div class="col txt light-blue">2342</div>
                        <div class="col name green">实际产量</div>
                        <div class="col txt green">1235</div>
                    </div>
                  </div>
                  <div class="col fb-1-2">
                    <Chart v-if="opt4" :option="opt4" />
                  </div>
                 </div>
              </Box>
              <Box class="col" style="margin:0 10px 10px 0px">
                 <div class="row workshop">
                  <div class="col">
                    <div class="row"  style="flex-direction: column;padding-left: 15%;">
                        <div class="col title" style="flex-direction: row; align-items: center;">
                          <icon icon-name="dizhi" font-size="20px" color="#e2de37" class="icon"></icon>
                          冲压1车间
                        </div>
                        <div class="col name light-blue">计划产量</div>
                        <div class="col txt light-blue">2342</div>
                        <div class="col name green">实际产量</div>
                        <div class="col txt green">1235</div>
                    </div>
                  </div>
                  <div class="col fb-1-2">
                    <Chart v-if="opt5" :option="opt5" />
                  </div>
                 </div>
              </Box>
            </div>
          </div>
          <Box class="col" style="overflow:hidden">
            <h3 class="title">生产任务明细</h3>
              <Table
                class="table"
                :option="tableOpt2" :stripe='true' size="medium" :border="false">
                 <template v-slot:overdue="row">
                   <div :class="row.scope.overdue==='预期'?'error':'success'">{{row.scope.overdue}}</div>
                 </template>
               </Table>
          </Box>
      </div>
      <div class="row" style="flex-direction: column;">
         <Box class="col" style="flex-grow: 0; flex-basis:46.5%">
            <div class="col" style="flex-grow: 0; flex-basis:42px">
               <h3 class="title">近七日产量走势</h3>
            </div>
             <div class="col"><Chart v-if="opt6" :option="opt6" /></div>
         </Box>
         <Box class="col ">
            <div class="col" style="flex-grow: 0; flex-basis:42px">
               <h3 class="title">质量异常柏拉图</h3>
            </div>
             <div class="col"><Chart v-if="opt7" :option="opt7" /></div>
         </Box>
      </div>
    </div>
  </Container>
</template>
<script>
const opt1 = {
  backgroundColor: '',
  tooltip: {
    trigger: 'item',
  },
  legend: { show: false },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      label: { show: true },
      itemStyle: {
        normal: {
          label: {
            formatter: '{b} \n{d}%',
          },
        },
      },
      data: [
        {
          value: 1048,
          name: '故障中',
          label: {
            color: '205bf7',
          },
          itemStyle: {
            color: '#205bf7',
          },
        },
        {
          value: 735,
          name: '加工中',
          label: {
            color: '01b3f7',
          },
          itemStyle: {
            color: '#01b3f7',
          },
        },
        {
          value: 580,
          name: '未生产',
          label: {
            color: '#208af7',
          },
          itemStyle: {
            color: '#208af7',
          },
        },
      ],
    },
  ],
}
// 中上
const opt2 = {
  title: {
    subtext: '进度率', // 副标题文本
    left: '38%',
    top: '55%',
    subtextStyle: {
      fontSize: 14,
      color: '#00e4e8',
    },
  },
  backgroundColor: '',
  tooltip: {
    trigger: 'item',
    formatter: '{d}%',
    show: true,
  },
  legend: { show: false },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['70%', '85%'],
      // center: ['30%', '60%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      label: {
        normal: { show: false },
        emphasis: { show: false },
      },
      labelLine: { normal: { show: false } },
      data: [
        {
          value: 80,
          name: 'actual',
          selected: false,
          itemStyle: { color: '#01e2f7' },
          label: {
            normal: {
              show: true,
              position: 'center',
              fontSize: 25,
              formatter: '{d}%',
              color: '#01e2f7',
            },
          },
        },
        {
          value: 20,
          name: 'plan',
          itemStyle: { color: '#083360' },
          label: { normal: { show: false } },
        },
      ],
    },
  ],
}
const opt3 = {
  title: {
    subtext: '进度率', // 副标题文本
    left: '38%',
    top: '55%',
    subtextStyle: {
      fontSize: 14,
      color: '#3366ff',
    },
  },
  backgroundColor: '',
  tooltip: {
    trigger: 'item',
    formatter: '{d}%',
    show: true,
  },
  legend: { show: false },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['70%', '85%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      label: {
        normal: { show: false },
        emphasis: { show: false },
      },
      labelLine: { normal: { show: false } },
      data: [
        {
          value: 80,
          name: 'actual',
          selected: false,
          itemStyle: { color: '#00ccff' },
          label: {
            normal: {
              show: true,
              position: 'center',
              fontSize: 25,
              formatter: '{d}%',
              color: '#01e2f7',
            },
          },
        },
        {
          value: 20,
          name: 'plan',
          itemStyle: { color: '#083360' },
          label: { normal: { show: false } },
        },
      ],
    },
  ],
}
const opt4 = {
  title: {
    subtext: '进度率', // 副标题文本
    left: '38%',
    top: '55%',
    subtextStyle: {
      fontSize: 14,
      color: '#32f997',
    },
  },
  backgroundColor: '',
  tooltip: {
    trigger: 'item',
    formatter: '{d}%',
    show: true,
  },
  legend: { show: false },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['70%', '85%'],
      // center: ['30%', '60%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      label: {
        normal: { show: false },
        emphasis: { show: false },
      },
      labelLine: { normal: { show: false } },
      data: [
        {
          value: 80,
          name: 'plan',
          selected: false,
          itemStyle: { color: '#33ff99' },
          label: {
            normal: {
              show: true,
              position: 'center',
              fontSize: 25,
              formatter: '{d}%',
              color: '#33ff99',
            },
          },
        },
        {
          value: 20,
          name: 'actual',
          itemStyle: { color: '#083360' },
          label: { normal: { show: false } },
        },
      ],
    },
  ],
}
const opt5 = {
  backgroundColor: '',
  title: {
    subtext: '进度率', // 副标题文本
    left: '38%',
    top: '55%',
    subtextStyle: {
      fontSize: 14,
      color: '#ddc659',
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{d}%',
    show: true,
  },
  legend: { show: false },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['70%', '85%'],
      // center: ['30%', '60%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      label: {
        normal: { show: false },
        emphasis: { show: false },
      },
      labelLine: { normal: { show: false } },
      data: [
        {
          value: 80,
          name: 'plan',
          selected: false,
          itemStyle: { color: '#ddc659' },
          label: {
            normal: {
              show: true,
              position: 'center',
              fontSize: 25,
              formatter: '{d}%',
              color: '#ddc659',
            },
          },
        },
        {
          value: 20,
          name: 'actual',
          itemStyle: { color: '#083360' },
          label: { normal: { show: false } },
        },
      ],
    },
  ],
}
// 右
const opt6 = {
  backgroundColor: '',
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['注塑', '冲压'],
    left: 'right',
  },
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {
      show: true,
      lineStyle: { color: '#304c6a' },
    },
    data: ['11/18', '11/19', '11/20', '11/23', '11/24'],
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: { color: '#304c6a' },
    },
    splitLine: { show: true, lineStyle: { color: '#304c6a' } },
  },
  series: [
    {
      name: '注塑',
      type: 'line',
      stack: 'Total',
      markLine: {
        symbol: ['none', 'none'],
        data: [
          {
            name: '注塑线标注',
            yAxis: 350,
            lineStyle: {
              type: 'dashed',
              color: '#ee0f58',
            },
            label: {
              position: 'insideStartTop',
              formatter: '注塑线标注',
              color: '#4dcded',
            },
          },
          {
            name: '冲压线标注',
            yAxis: 90,
            lineStyle: {
              type: 'dashed',
              color: '#ee0f58',
            },
            label: {
              position: 'insideStartTop',
              formatter: '冲压线标注',
              color: '#4dcded',
            },
          },
        ],
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '冲压',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
}

const opt7 = {
  backgroundColor: '',
  legend: {
    data: ['数量', '占比'],
    left: 'right',
  },
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: true,
      lineStyle: { color: '#304c6a' },
    },
    data: [' 破损', '波纹', '划痕', '毛刺'],
  },
  yAxis: [
    {
      type: 'value',
      max: 100,
      min: 0,
      interval: 20,
      axisLine: {
        show: true,
        lineStyle: { color: '#304c6a' },
      },

    },
    {
      type: 'value',
      max: 100,
      min: 0,
      interval: 20,
      axisLine: {
        show: true,
        lineStyle: { color: '#304c6a' },
      },
      splitLine: { show: true, lineStyle: { color: '#304c6a' } },
      axisLabel: {
        formatter(value) {
          return `${value}%`
        },
      },
    },
  ],
  series: [
    {
      name: '数量',
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            fontSize: 12,
            textStyle: {
              color: '#58e8f3',
            },
          },
        },
      },
      yAxisIndex: 0,
      data: [20, 20, 15, 80],
    },
    {
      name: '占比',
      type: 'line',
      color: '#a36df6',
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            fontSize: 12,
            textStyle: { color: '#fff' },
            formatter: '{c}%',
          },
        },
      },
      data: [20, 32, 11, 34],
    },
  ],
}

export default {
  name: 'KanbanFour',
  data() {
    return {
      tableOpt1: {
        cols: [
          { prop: 'personnel', name: '人员' },
          { prop: 'workTime', name: '上工时间' },
          { prop: 'class', name: '班别' },
          { prop: 'state', name: '状态', isSlot: true },
        ],
        data: [
          {
            personnel: '张三', workTime: 1000, class: 589, state: '迟到',
          },
          {
            personnel: '王五', workTime: 1000, class: 589, state: '正常',
          },
          {
            personnel: '李四', workTime: 1000, class: 589, state: '正常',
          },
          {
            personnel: '四九', workTime: 1000, class: 589, state: '正常',
          },
        ],
      },
      tableOpt2: {
        cols: [
          { prop: 'deviceID', name: '设备编号' },
          { prop: 'productID', name: '产品编号' },
          { prop: 'orderNo', name: '工单编号' },
          { prop: 'job', name: '作业站' },
          { prop: 'finishedDate', name: '预计完成日' },
          { prop: 'overdue', name: '是否超期', isSlot: true },
        ],
        data: [
          {
            deviceID: '张三', productID: 1000, orderNo: 589, job: 589, finishedDate: '迟到', overdue: '超期',
          },
          {
            deviceID: '李四', productID: 1000, orderNo: 589, job: 589, finishedDate: '正常', overdue: '预期',
          },
          {
            deviceID: '四九', productID: 1000, orderNo: 589, job: 589, finishedDate: '正常', overdue: '预期',
          },
          {
            deviceID: '张三', productID: 1000, orderNo: 589, job: 589, finishedDate: '迟到', overdue: '预期',
          },
          {
            deviceID: '王五', productID: 1000, orderNo: 589, job: 589, finishedDate: '正常', overdue: '预期',
          },
          {
            deviceID: '李四', productID: 1000, orderNo: 589, job: 589, finishedDate: '正常', overdue: '预期',
          },
          {
            deviceID: '李四', productID: 1000, orderNo: 589, job: 589, finishedDate: '正常', overdue: '预期',
          },
        ],
      },
      opt1: null,
      // 中上
      opt2: null,
      opt3: null,
      opt4: null,
      opt5: null,
      // 右
      opt6: null,
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
$yellowGreen:#00dd66;
$lightYellow:#ddc659;

#KanbanFour {
  background-color: #00142e;
  .light-blue{color:$light-blue;}
  .green{color: $green;}
  .head {
    margin-bottom:5px;
    flex-basis: 80px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .time{
    color: $light-blue;
   .date{font-size: 16px;line-height: 1.5;}
   .week{font-size:30px;}
  }
  .box {
    background-color: #011f3f;
    ::v-deep.top-left-border,
    ::v-deep.top-right-border,
    ::v-deep.bottom-left-border,
    ::v-deep.bottom-right-border{
      border-color: #2b81c2;
    }
  }
  .title{
    padding: 5px 0 15px 0;
    font-size: 20px;
  }
  .device-text{
    font-size: $f-16;
    .col{
      display: initial;
        &:first-child{
          .name{color:$yellowGreen;}
          }
        &:nth-child(2){
          .name{color:$lightYellow;}
        }
        &:nth-child(3){
          .name{color:$red;}
        }
      }

     .name{
      padding-right: 20px;

      }
  }
    ::v-deep.el-table td.el-table__cell,
    ::v-deep.el-table th.el-table__cell.is-leaf{border-bottom: 0;}
    ::v-deep.cell{text-align: center;}
  .table{

   .red-bj{background-color:$red; text-align: center;}
   .error{color:$red;}
   .success{color:$yellowGreen}
  }
  .workshop{
    .txt{padding-left: 60px;font-size: 30px;}
     .title{
        font-size: $f-16;
        color: #c2f4f5;
        .icon{padding-right: 10px;}
      }
  }
  }

</style>
