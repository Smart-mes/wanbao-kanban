import mockjs from 'mockjs'

mockjs.mock('/mock/equipment', 'get', {
  'data|16': [{
    'id|+1': 1,
    'qty|5-20': 1,
    'ngQty|0-2': 1,
    status: '正常',
    ppm() {
      return Math.random() < 0.5 ? 0 : mockjs.mock('@integer(60000, 150000)')
    },
  }],
})

mockjs.mock('/mock/KanbanThree/info', 'get', {
  data: {
    plan: 0,
    actual: 0,
    completionRate: 0,
    timeSchedule: 0,
  },
})
