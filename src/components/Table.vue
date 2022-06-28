<template>
    <el-table
    class="kanban-table"
    style="width: 100%"
    :border="border"
    :stripe="stripe"
    :size="size"
    :data="data"
  >
   <!-- v-bind="$attrs" -->
    <el-table-column v-for="(c) in cols" :key="c.prop" :label="c.name" v-bind="c.attr">
      <template slot-scope="scope">
        <template v-if="c.isSlot">
          <slot :name="c.prop" :scope="scope.row"></slot>
        </template>
        <span v-else>{{ scope.row[c.prop] }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    stripe: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'mini',
    },
    option: {
      type: Object,
      required: true,
    },
    updateFn: {
      type: Function,
      default: null,
    },
    interval: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      cols: [],
      data: [],
    }
  },
  mounted() {
    this.cols = JSON.parse(JSON.stringify(this.option.cols))
    this.data = JSON.parse(JSON.stringify(this.option.data))
    this.$nextTick(() => {
      if (this.interval && this.updateFn) {
        Promise.resolve(
          this.updateFn({ cols: this.cols, data: this.data }),
        ).then((option) => {
          this.cols = option.cols
          this.data = option.data
        })
        this.timer = setInterval(() => {
          Promise.resolve(
            this.updateFn({ cols: this.cols, data: this.data }),
          ).then((option) => {
            this.cols = option.cols
            this.data = option.data
          })
        }, this.interval)
      }
    })
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>

<style lang="scss">

.kanban-table{
  &.el-table {background-color: #001c44;}
  &.el-table th.is-leaf{background-color:#0a3e7e;color: #eee;}
  &.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell{ background-color: #07254f;}
  &.el-table td,
   &.el-table--border,
   .el-table--group{
    border-color:  #185983;;
    background-color: #001c44;;
    color: #eee;
  }
  &.el-table td.el-table__cell,
  &.el-table th.el-table__cell.is-leaf {border-color:  #185983;;}
  &.el-table::after,
  &.el-table::before,
  &.el-table--group::after { position:initial; background-color: #185983; }

  /*修改element-ui的table 在鼠标悬停hover时的高亮颜色*/
  &.el-table tbody tr:hover>td {background-color:#5a6ebd!important}

}

</style>
