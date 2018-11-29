<template>
  <div
    <% if (options['ui-framework'] === 'element-ui') {%>v-loading="spinShow"<% }%>
  >
    <div ref="dom" class="charts chart-pie">
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
  name: 'ChartPie',
  props: {
    value: Array,
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
      let legend = this.value.map(_ => _.name)
      let option = {
        title: {
          text: this.text,
          subtext: this.subtext,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: legend
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.value,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
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
