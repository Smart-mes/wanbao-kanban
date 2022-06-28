<template>
  <Container id="KanbanFour">
    <div class="head"><Head></Head></div>
    <div class="main">
      <div class="col" style="flex-direction: column;">
        <div class="row" style="flex-grow: 0;flex-basis: 25%;">
        <div class="col" style="flex-grow: 0;flex-basis: 70.5%;">
            <div class="row info">
                <Box class="col">
                  <span class="num">6</span>
                  <span class="name">货主</span>
                </Box>
                <Box class="col">
                  <span class="num">11204</span>
                  <span class="name">SKU</span>
                </Box>
                <Box class="col">
                  <span class="num">2694</span>
                  <span class="name">库存</span>
                </Box>
                <Box class="col">
                  <span class="num">117</span>
                  <span class="name">工作令</span>
                </Box>
                <Box class="col">
                  <span class="num">35721.20</span>
                  <span class="name">总量</span>
                </Box>
                <Box class="col">
                  <span class="num">0</span>
                  <span class="name">预警</span>
                </Box>
            </div>
        </div>
        <Box class="col ranking" style="flex-direction: row;">
          <div class="row fb-1-2"  style="flex-direction: column;">
            <div class="col title-box"><h2>今日之星</h2></div>
            <div class="col">
               <Chart v-if="opt4" :option="opt4" />
            </div>
          </div>
          <div class="row" style="flex-direction: column;">
           <div class="col title-box" style="text-alin"><h2>历史之星</h2></div>
           <div class="col" style="flex-direction: column;align-items: center;justify-content: center;">
              <div style="width:95%">
                  <Table
                    size="mini"
                   :option="tableOpt4"
                   :border="false">
               </Table>
             </div>
            </div>
          </div>
        </Box>
        </div>
        <div class="row" style="flex-grow: 0;flex-basis: 38%;">
          <Box class="col" style="flex-grow: 0;flex-basis: 25.5%;">
            <div class="row"  style="flex-direction: column;">
              <div class="col" style="flex-grow: 0;flex-basis:52px;">
                <ul class="info-list">
                  <li>
                    <span class="num">2309</span>
                    <span class="txt">当天入库量</span>
                  </li>
                  <li>
                    <span class="num">2309</span>
                    <span class="txt">当天未出量</span>
                  </li>
                  <li>
                    <span class="num">2309</span>
                    <span class="txt">当月入库量</span>
                  </li>
                  <li>
                    <span class="num">2309</span>
                    <span class="txt">当月未出量</span>
                  </li>
                </ul>
              </div>
              <div class="col">
                <Chart v-if="opt1" :option="opt1" />
              </div>
            </div>
          </Box>
          <Box class="col" style="flex-grow: 0;flex-basis: 43%;">
            <div class="row">
               <div class="col fb-1-2">
                 <Chart v-if="opt2" :option="opt2" />
               </div>
               <div class="col"  style="flex-direction: column;align-items: center;justify-content: center;">
                <div style="width:90%">
                  <Table
                     size="mini"
                   :option="tableOpt1"
                    :border="false">
               </Table>
                </div>
               </div>
            </div>
          </Box>
          <Box class="col">
            <div class="row"  style="flex-direction: column;">
              <div class="col" style="flex-grow: 0;flex-basis:52px;">
                <ul class="info-list">
                  <li>
                    <span class="num">2309</span>
                    <span class="txt">当天入库量</span>
                  </li>
                  <li>
                    <span class="num">2309</span>
                    <span class="txt">当天未出量</span>
                  </li>
                  <li>
                    <span class="num">2309</span>
                    <span class="txt">当月入库量</span>
                  </li>
                  <li>
                    <span class="num">2309</span>
                    <span class="txt">当月未出量</span>
                  </li>
                </ul>
              </div>
              <div class="col">
                <Chart v-if="opt5" :option="opt5" />
              </div>
            </div>
          </Box>
        </div>
        <div class="row">
          <Box class="col" style="flex-grow: 0;flex-basis:25.5%;align-items: center;">
              <div style="width:95%">
                  <Table
                    size="mini"
                   :option="tableOpt2"
                   :border="false">
               </Table>
             </div>
          </Box>
          <Box class="col" style="flex-grow: 0;flex-basis: 43%;">
            <div class="row title-box" style="margin-bottom:10px;">
              <h2>库龄分布</h2>
            </div>
            <div class="row">
               <div class="col fb-1-2" style="align-items: center;">
                  <div style="width:90%">
                     <Table
                       size="mini"
                       :option="tableOpt3"
                       :border="false">
                     </Table>
                  </div>
               </div>
               <div class="col">
                  <Chart v-if="opt3" :option="opt3" />
               </div>
            </div>
          </Box>
          <Box class="col" style="align-items: center;">
              <div style="width:95%">
                  <Table
                    size="mini"
                   :option="tableOpt5"
                   :border="false">
               </Table>
             </div>
          </Box>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="broadcast">
        <icon icon-name="ai15" color="#00a8ff"></icon>
        <span class="txt">台正正式开通</span>
      </div>
    </div>
  </Container>
</template>
<script>
import Box from '../components/Box.vue'

const opt1 = {
  backgroundColor: '',
  grid: {
    top: '25%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['入库'],
    top: 15,
    left: 'left',
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: true,
      lineStyle: { color: '#304c6a' },
    },
    axisLabel: {
      interval: 0,
      rotate: 30,
    },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
      name: '入库',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
  ],
}

const opt2 = {
  backgroundColor: '',
  tooltip: {
    trigger: 'axis',
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    axisLine: {
      show: true,
      lineStyle: { color: '#304c6a' },
    },
    splitLine: { show: true, lineStyle: { color: '#304c6a' } },
  },
  yAxis: {
    type: 'category',
    axisLine: {
      show: true,
      lineStyle: { color: '#304c6a' },
    },
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
  },
  series: [
    {
      name: '出入库热度',
      type: 'bar',
      barWidth: '50%',
      color: '#33cccc',
      data: [80, 100, 90, 50, 33, 63],
    },

  ],
}
const opt3 = {
  backgroundColor: '',
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    top: 'center',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      center: ['60%', '50%'],
      data: [
        { value: 1048, name: '张三' },
        { value: 735, name: '顾盼生辉' },
        { value: 580, name: '欧阳娜娜' },
        { value: 484, name: '杨过' },
        { value: 300, name: '小龙女' },
      ],
    },
  ],
}
const opt4 = {
  backgroundColor: '',
  grid: {
    top: '30%',
    left: '0%',
    right: '10%',
    bottom: '0%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    axisLine: { show: false },
    axisTick: { show: false },
    data: ['Mon', 'Tue', 'Wed'],
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  series: [
    {
      barWidth: '40%',
      color: ['#9ba0a3', '#e8c563', '#9ba0a3'],
      data: [{
        value: 120,
        itemStyle: {
          color: '#bdc2c6',
        },
      },
      {
        value: 200,
        itemStyle: {
          color: '#f5e079',
        },
      },
      {
        value: 180,
        itemStyle: {
          color: '#91764c',
        },
      }],
      type: 'bar',
      markPoint: {
        data: [
          {
            xAxis: 0,
            yAxis: 120,
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAFHElEQVQ4jU2VW08d1xmGn1lrZvawzwcOG7CBAjZWGhIbtqO6dlArxb6wqvbeqZqL/BH+SSolvkhTUqVq7BunMW3S2q4cE1JiQYoB22DYwAa8z3NYq5rltuonzc3M0jvzHr53rIGpn+hr7/yMs5MToBTC0qgwIvAj7nxxl7XNpygknWYXx7FxnJBkwuaN198kmU4jhAUIOoHP8NAw3/1zBbvVaLK2usbclSucGipjSwsBaA2lUomPP1lgZWUVL5Uh6HRxpKAyO8PU1DmazRbJVBo/CBgoD3J8dML6+hNkujQyf7hXZb9a5czkOKmUh4XG9316e0tks1k2t7Y4PqiR8BK8NTvN2bNnCMMArTVSSnOmUW/wh4Xfc1RvIO1Med5xE+zubHNcO+DChTdwbGFk8JI9lEoFSn29rP6wyujpYebevkS71UApRSaTJZ6kl+Sjmzc5PK4jLIFMZk/N++0AaQueP9tChT5nJsZJJByiKESjGRwaxvN68P0uUmoc28bzPBzbIZ3OsPDpArvVA1QQEoUK6WaH5i0NlrQMlZ2d5yQSCcbHx5HSQdq2MaJcHuLFixc83dygWCgihKC3t58/f/kla//aRCmNJSUykUC6Mf2EQEhBZCm6vubJ+hOEdEml8vi+4uS4jgoVpUKJ9ScbHBzUePP8DCsr3/P13/9Bxw/QQqAEKK2xY9pBp4OT8iCyUJam7Ud8/bf7LC+vYNsS13Ze0XUcXp7UefrsGel0FtdLEAdKhSHCc/nv2JFWSM9DK0UYP4wpuC7nps7heQmSyR7K/QPYtk0URbTbbS60WiYdh0c1LGGhLYv/H9uyLOLL73RJZjJ0W00G+3q5MDNjDNna2uAvi4sc7O/jeh75fJ6xsTGmp6fp+F22t3d4/MM6Eep/sFZmZEZLKdAqJDasv1jgxq/fRVoWtz//nGfPn5OKwXI5/DDksHZEt9tlqDzAL371S7LZHB988Ft2Dg/QryCx8qMVjaVQWhlH33/vN/T39XHzw4/Y2XnBULmPubk5E584FXHg//jZZ1QPaxQKOW7ceJd6o8mHv/uYIAgMqIip6yA0gudTKUZGRrh//z7bu7txkjh++ZKv/voVnyx8yq1bt5icnOT16WnjwdHxCV/cuWPkODUwgBUqc18EUYh0PZQfcHp42GR1bXWVwI8XwqHZbrOxuUW7XieZTBqzYvrCto2xu3t7tFstRkdHsXsSWEJgx5TDyAdb4iWTtFpt2p1OzIJ2o0kY+gz29zMzM0OlUuHBgwd8u7xsgNK5jCmT+HxPTw+xqMKAYhFFCuFI89ZYt4GBAY5P6mBrisUcV69dY2hwkHv37vHNw2+oHR2RyWbpdDvkUmmKxSLVatVUpiUFQlsgHMd03X6tZnJ4/vx5EgkXoSJ+eukSP37tNR4+fMijpSUTv1yhYKg7QjJbqZiv3tjYIPqP/9LNlue10oZuEIYkHJvLly8jlGK3ukdvqWgq0HVdKpVZzkxN0Go2aDaaXHyrwvXr17m7uMhaDGoKCKzC2EUdhAGOK4n8gEwyyZW3L/PzuTmWv11i6dES+/t7Ji5xeQtXUsjnmZ29aBYgbvo/3b5Ns/0qTirOae5HFR2qwLhuKU1Qr5MuFJmamODq1Xco5HJs72wbin63Q6m/l3wuC1pwd/Euj5a+o9HpGi21jpcIrOz4rI5UZDSNgYWQREGIDBXZTIqxkTFOj5wmbf5HgnrjhP39A75//Nhsl9PjvVLSinlYaAX/BrqOV/tM2MLMAAAAAElFTkSuQmCC',

          },
          {
            xAxis: 1,
            yAxis: 200,
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAFdElEQVQ4jSWU2W+cdxmFn9+3z+pvZjz2xI6XOHEmxrgxaRvSojaRS0MdEon2oqCKQC/gouKf8G0vChKIVgIhxHoViapJikRBabM0qLip3cSO44U4qeM43sazfPuGbK7em1dHR3rOOaJ/6Gjy2msvYhZjVN3BtRpoSobtdZtPPv6CO/csZKOIqmnEvo9r75DNxYyNjWLoEY5TR1fTeHbE4NDzfHz9HortrGFkm7x5/iyysUFbRsV3A0ScYqia5+23r7PV1CAUSGFCIWMwPv4sJ186hB9uoMgBklApl7rY2s7w/uUbyE7IxNLSLEYqYGSoQlYPSeI6KSXiQF8PYPLl5zO4zRqR3+Dll45z8tRTuN4jEC1Cv0WlswvHCnnnnT8yN7+O3NY5PFHfaDE1OcPQYIXe3k5SSkIS2eia4OChg8RJk/n5GU69OMyZM88TJzuQtJClhFKhi8DJ8PvffMB/Jr9C1k3kwK9OpI0sTsPm/tIy3R1dHOjpxdA0kiRAS9scGDRJ4k3yOQWzkCaOXBQlIZMpklL38YfffcSNq/eR5BK+EMia3j1h5BwiEbLyxGFtQ9Db109PxUTXIBYeuZxO3/79TH8xS20zxCxUUDMxpc4B/nbxMy7+/TMCNU0oS8iaipwrVSZazmN8EZHv6OfRI4eHy4tUD1cwFAnP07BbOulUJ7IoMj+3g+fqPPPCMNdu3ObPf/0EJ8oSSwqxIiMSUIQMCAFhgO95qKrK1PQ07723ykB3kSDKo+p5VFVBkjSWH6yxvjlLrsui2QgInZB0KkckqUiKROhY7CIhSSSQZWLfxfUscqZOe+d+thvblCslOrtNUmmJKPEZ7xlhYekBTe8+bpAgGxa+t0UYp8m0FYh2nSLFSEIBEREHFpHvUK0e5ty571Mu5Ji8tcjc0jyWu07LWqev9wjVoVFGnt7H3dkVrl1ZZX7hCbq2D2unhqRKiLbeY4ln1wlDay/IX6sO8NZPfkC5aHDp/ctcu/aQtfUaqu7SVpSxmiHFwj6+/cpTvHx6nMXFFX75q1+z9thBKAXYBaXmyhNxHBN6NuV2nZ+99SP6+3r4+S/e5V9XbuIlFt98YZA3fvxdnj0xyNTU3T2BmTtz1GoW586eQZIdbk/PkMQqETJSFEcouoGiqBw53MuB/iKXP7zI5OdzBKHO8MgQp78zxrFnRil1FMlk88Sxge0Y3Lh+iw8uXWDs9Nfp7c+BaBJHAVKcxAghQRhz+NB+dNXj5s1PcTyZWC6wMLfJb9+9wNUrt1FkE89TSOXKZNu6qNc9pr68haK5VIc6EMIjETHKrlNZKIS+T6WzgONusb1dRzfyyIZJo76BLEs4bp1YpEgUGy9UUOUcqmbSaiY06xKV9hFCfx3F0JEQkCChKir12uZei0rFHL4vSKQUcagT+ntPSIqL2BV1tkiEjefVyeQN8qbJxmYLXW9DUTWkOAoRJCiazvT0DNmcyZHhKooeo8gRWbMAkYFA35s4dlHoLSz7K4x8wLGnq9huk/mlWYLAJgx8JCn0SQIPVcswM7fNvycf8eZPz3PiuTKxt0ijsUaAoFbzefwgIgkMwCKbtRl/5Tm+9+qrXLp4k4X/LhFrO4RRgKymShO6kUXRNHZqm6xvrdI/0MWpsW8R+AE79Qau32JldZHl5UU2Np/QUS5z9uwZXn/9De7eXeUvf/oQqyUIgt2MphC57pFEJGkEEYG7Thg9YeBQOz88f55vjB5n9fFD5u7d2buZlE7BNDk2epxcrpt/fvQpFy78g61Nm2yhiB+GRJH3f1HIsFsAKWkRxzV8t4Fh5Bk9epQTJ3sYOFhG0zTkRMa2XJYWHnL16hT35lZwPY1Uth3PDsgUTTzH4n/WC4kdjW7kGwAAAABJRU5ErkJggg==',
          },
          {
            xAxis: 2,
            yAxis: 180,
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAErklEQVQ4jV2UWW8bRxaFv1p6YTfZ3EVqsxHLthQYhgM/zPw9/bO8BPBgkkms2JAtW45krdxMSly72d1VA3IceJJbOPV47nLOvSL47rndCT2efreNMik2G6GVQDhFrrtjTjsj5rJAIgSOo8nSBXLyhXo1YrNWopAnWAtxrvCKVVLhou18zAJNNdrj0e5DSmqMzRYYUaDTqiPtkjfvz/EcH6UVNp6xuVln79E2FV/hZTF5ZsErEVRaHB3/gVK+ezgffyFPp1Qjh1awxDVTpMkolyJKxRLWGO5GA5LZmGo54ODxDpWSg0jnePkS39EUgpCLqw7vPpyivMb2oQD6vSH3dxPa9QrVYgElcmw2JSoI6uUCw34fLRTP9r+nVauSLca4UiCVS7HS5PxqwKufXxNnoERr79D6IaLYYLrUjIdTWu1NotBF5CPKgaXkO7hukSzVBGEFR0pYxriOh1NqcTuc8+vbjyyMj662UbK+e2iFYgWEYtIf42KolkNCV5AkCZkVBKUNUhwurm8oFl0KPriuZppIfj06Zni/wKlskEmFUvWdQ76GMBafAr3Pn0mWC1obDVzPJ7MOiXXwihFxumAwuCYMJFGtwr/+c0KnN8IJyxg0udBo/i+slSzzHCsjPl/f8ePyCNfJ0FpjpEeuXDJjuLy8Jk8nJAaSOEXrIkgPpEYp72+kq+eAyXLCWhO/6hPPRoSliKhaY54kSCUJQ58sW4AoEIQRg7s7lNQYI5BW/JUUZUmnfYq+pFgr8+DJHlkyp9e94eKqi7VmjXK1ShTWaW0+oNM/wfHm6w6MMGBy9MpOxlqEWGXJkfk9+wfP2N3d5vymw6cPp5RLBapRgBaG8f09R0cnFMIKe7HHk/2n5Ejend+gHUWOQdr1LC3GGLSyPNiq8WRvm9vONb/89pbOYEySKubzBCE0z1+8pNnaoTNK+fnNJ/qDLvsHj6hXfbAZZp1ipboQa2KlJA+2N8mSmJPjj8TGQ0T/8+H7k4+cnn4gz2L8wMNKwySe8fb4N5LlmJ2tDRQxjsrRK7I/oZWm3WgyuOkRz3IISsxmOWElYv9RjVbDx9qYbv+SxWKKUZLZIuZ+PKC50YB3MQLvW6XCgkQSuEXGwxnZUmDnBmXk2n+zxYzpbExqYxqtGtpfzS0lzWIWiwmQ4XuaZHyP/LPKFfHSwDiGoLKBdjXKNWjPkGcTjk/OePXLCaOZS2v7Ka4frXVwpSLwPYRZSa5xvPI3SwklSdOU2/6Q3a1Nyudn9PrntDdabLTbTMsOlWqFoNTm+raLsXrlQCpRlXZzi9OzLvE8R3gBct36V5AbLs4/UQ4cXr44ICpIpsNbsvmQ3XYFxyacvX/Nxzf/ZvnlimY55MXLf5Baj7PLLqZQZGEMwnnyz5Wr1qGzJe7ojB8OHrL3+DFxHPP70RG9bn999eMkRuvVwVA0ak2ePntOWNvi9Zt3nPWG5NojTuVfSWWe4n75jEPM9tYW3x8cUG/UmU+nXF9erBfZmJxGvU69Vme6hJ9enzFIYbkSLbc4xQLC/Uq6/rKcgolJRz08z8Vz3bVvm80GUbia1copMJtMuLy44Kp7z7jQJLES6an1mgqR81+WhUpA5a2afQAAAABJRU5ErkJggg==',
          },
        ],
        symbolSize: [21, 21],
        symbolOffset: [0, '-100%'],
        label: {
          show: false,
        },

      },
      // markPoint: {
      //   data: [
      //     {
      //       xAxis: 0,
      //       yAxis: 75,
      //       symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      //     },
      //     {
      //       xAxis: 1,
      //       yAxis: 150,
      //       symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      //     },
      //     {
      //       xAxis: 2,
      //       yAxis: 100,
      //       symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      //     },
      //   ],
      //   symbolSize: [, 15],
      //   symbolOffset: [0, '-160%'],
      //   label: {
      //     show: false,
      //   },
      // },
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
      tableOpt1: {
        cols: [
          { prop: 'decreeNo', name: '工作令号', attr: { showOverflowTooltip: true } },
          { prop: 'material', name: '物料', attr: { showOverflowTooltip: true } },
          { prop: 'quantity', name: '数量', attr: { width: '80' } },
          { prop: 'state', name: '状态', attr: { width: '80' } },
        ],
        data: [
          {
            decreeNo: 'AS520090005',
            material: 'TST56组合',
            quantity: 59,
            state: '缺料',
          },
          {
            decreeNo: '王五',
            material: 1000,
            quantity: 589,
            state: '正常',
          },
          {
            decreeNo: '李四',
            material: 1000,
            quantity: 589,
            state: '正常',
          },
          {
            decreeNo: '四九',
            material: 1000,
            quantity: 589,
            state: '正常',
          },
          {
            decreeNo: '张三',
            material: 1000,
            quantity: 589,
            state: '迟到',
          },
          {
            decreeNo: '王五',
            material: 1000,
            quantity: 589,
            state: '正常',
          },
          {
            decreeNo: '李四',
            material: 1000,
            quantity: 589,
            state: '正常',
          },
        ],
      },
      tableOpt2: {
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
          {
            taskType: '四九',
            location: 1000,
            operator: 589,
            date: '正常',
          },
          {
            taskType: '张三',
            location: 1000,
            operator: 589,
            date: '迟到',
          },
          {
            taskType: '王五',
            location: 1000,
            operator: 589,
            date: '正常',
          },

        ],
      },
      // 右边
      opt4: null,
      opt5: null,
      tableOpt3: {
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
          {
            taskType: '四九',
            location: 1000,
            operator: 589,
            date: '正常',
          },
          {
            taskType: '张三',
            location: 1000,
            operator: 589,
            date: '迟到',
          },
          {
            taskType: '王五',
            location: 1000,
            operator: 589,
            date: '正常',
          },
        ],
      },
      // 右
      tableOpt4: {
        cols: [
          { prop: 'name', name: '人名' },
          { prop: 'tasks', name: '任务数' },
          { prop: 'date', name: '日期' },
        ],
        data: [
          {
            name: '补充入库',
            tasks: '张三',
            date: '2020/4/20',
          },
          {
            name: '王五',
            tasks: 589,
            date: '正常',
          },
          {
            name: '王五',
            tasks: 589,
            date: '正常',
          },
        ],
      },
      tableOpt5: {
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
          {
            taskType: '四九',
            location: 1000,
            operator: 589,
            date: '正常',
          },
          {
            taskType: '张三',
            location: 1000,
            operator: 589,
            date: '迟到',
          },
          {
            taskType: '王五',
            location: 1000,
            operator: 589,
            date: '正常',
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
    this.opt5 = opt1
  },
  methods: {},
  components: { Box },
}
</script>
<style lang="scss" scoped>
#KanbanFour {
  background-color: #00142e;
  .head {
    flex-basis: 70px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
::v-deep.kanban-table.el-table td
 {
    border-color: #0b4776;
    border: 0;
    background-color: #011f3f;;
}
::v-deep.el-table--mini .el-table__cell {
    padding: 3px 0;
}
::v-deep.kanban-table.el-table th.el-table__cell.is-leaf{
  border: 0;
}

  .title-box{
    flex-grow: 0;
    flex-basis:28px;
    font-size: $f-14;
    border-bottom: 1px solid #0b4776;
    }

  .info{
    .num{font-size: $f-16;}
      align-items: center;
      justify-content: center;
    .col{
      height: 150px;
      align-items: center;
      justify-content: center;
      span{display: block;}
      .num{margin-bottom: 10px; font-size: 20px;}
      .name{color:#eee;}
      &:nth-child(1){.num{color:#3496dd}}
      &:nth-child(2){.num{color:#36cfda}}
      &:nth-child(3){.num{color:$green}}
      &:nth-child(4){.num{color:#ccff33}}
      &:nth-child(5){.num{color:#ff9933}}
      &:nth-child(6){.num{color:#cc0033}}
    }
  .box {
    ::v-deep.top-left-border,
    ::v-deep.top-right-border,
    ::v-deep.bottom-left-border,
    ::v-deep.bottom-right-border{
      border-color: #0b4776;
    }
  }
  }
  .info-list{
    display:flex;
    span{display: block;}
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      flex: 1;
      height: 50px;
      border-radius: 4px;
      border: 1px solid #1f7a97;
      background-color: #021b35;
      span{display: block;}
      .num{
        margin-bottom: 5px;
      }
    }
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
 .footer{
   margin-top: 10px;
   padding: 0 10px;
   flex-basis: 30px;
   line-height:30px;
   background-color:#031023;
   .txt{padding-left: 10px;color:#999}
 }
}
</style>
