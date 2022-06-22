import mockjs from 'mockjs'

mockjs.mock('/mock/KanbanThree/info', 'get', {
  data: {
    plan: 0,
    actual: 0,
    completionRate: 0,
    timeSchedule: 0,
  },
})
