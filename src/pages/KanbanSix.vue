<template>
  <Container id="KanbanSix">
    <div class="head">
      <Head></Head>
    </div>
    <div class="main">
      <div class="row"  style="flex-grow: 0;flex-basis:60%;position: relative;">
        <ul class="product-info" style="position:absolute; top:0; right:10px">
          <li>产量: <span class="quantity" style="color:#00d1ce">375</span></li>
          <li>次性合格率:<span class="quantity" style="color:#02beec">95%</span></li>
        </ul>
        <Chart v-if="opt1" :option="opt1"/>
      </div>
      <div class="row" style="justify-content: center;">
          <div style="width:98%">
              <Table
                size="medium"
                :option="tableOpt1">
              </Table>
          </div>
      </div>
      <div class="row explain" style="flex-direction:column;" >
        <div class="col" style="align-items: center;">
          <div style="width:98%">
             <ul class="ul">
              <li>
                <span class="name">等待:</span>60分钟> 30分钟无数据
              </li>
              <li>
                <span class="name">闲置:</span>> 60分钟无数据
              </li>
              <li>
                  <span class="name">异常:</span>连续10台数据中有6台不合格数据，则判定设备状态异常
              </li>
             </ul>
         </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
const option1 = {
  backgroundColor: '',
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    left: 'left',
    data: ['不良', '产品'],
    textStyle: { color: '#fff' },
  },
  grid: {
    left: '1%',
    right: '1%',
    bottom: '5%',
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
  name: 'KanbanSix',
  data() {
    return {
      data: [],
      opt1: null,
      tableOpt1: {
        cols: [
          { prop: 'platformNo', name: '车台号' },
          { prop: '1', name: '1' },
          { prop: '2', name: '2' },
          { prop: '3', name: '3' },
          { prop: '4', name: '4' },
          { prop: '5', name: '5' },
          { prop: '6', name: '6' },
          { prop: '7', name: '7' },
          { prop: '8', name: '8' },
          { prop: '9', name: '9' },
          { prop: '10', name: '10' },
          { prop: '11', name: '11' },
          { prop: '12', name: '12' },
          { prop: '13', name: '13' },
          { prop: '14', name: '14' },
          { prop: '15', name: '14' },
        ],
        data: [
          {
            platformNo: '补充入库',
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
          },
          {
            platformNo: '王五',
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
          },
          {
            platformNo: '李四',
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
          },
          {
            platformNo: '李四',
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
          },
        ],
      },
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
#KanbanSix {
  .head {
    flex-basis: 70px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .product-info{
    display: flex;
    flex-direction: row;
    font-size: 20px;
    li{
        margin-left: 40px;
        .quantity{padding-left: 10px; font-size: 25px;font-weight:bold;}
    }
  }
 .explain{
   .col{
      flex-grow: 0;
      flex-basis:40px;
      line-height: 40px;
      background-color: #0e2b57;
   }
   .ul{
     display: flex; flex-direction: row;
     li{margin-right: 30px;}
     .name{color: $light-blue; padding-right: 10px;}
    }
   }
}
</style>
