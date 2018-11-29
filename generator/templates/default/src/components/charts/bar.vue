<template>
  <div
    <% if (options['ui-framework'] === 'element-ui') {%>v-loading="spinShow"<% }%>
  >
    <div ref="dom" class="charts chart-bar">
    </div>
    <% if (options['ui-framework'] === 'iview') {%>
    <Spin size="large" fix v-if="spinShow"></Spin>
    <% } %>
  </div>
</template>

<script>
import { requireEcharts } from './index'
import tdTheme from './theme.json'

export default {
  name: 'ChartBar',
  props: {
    value: Object,
    text: String,
    subtext: String
  },
  data () {
    return {
      spinShow: true
    }
  },
  methods: {
    initCharts () {
      let xAxisData = Object.keys(this.value)
      let seriesData = Object.values(this.value)
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext,
          x: 'center'
        },
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: seriesData,
          type: 'bar'
        }]
      }
      let dom = this.echarts.init(this.$refs.dom, 'tdTheme')
      dom.setOption(option)
      this.spinShow = false
    }
  },
  created () {
    this.echarts = null
    requireEcharts().then(echarts => {
      this.echarts = echarts
      this.echarts.registerTheme('tdTheme', tdTheme)
      this.$nextTick(() => this.initCharts())
    })
  }
}
</script>

<style>
.charts {
  height: 100%;
}
</style>
