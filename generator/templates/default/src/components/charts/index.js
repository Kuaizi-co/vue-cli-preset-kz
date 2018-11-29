import ChartPie from './pie.vue'
import ChartBar from './bar.vue'

export const requireEcharts = () => import(/* webpackChunkName: "echarts" */ 'echarts')

export {
  ChartPie,
  ChartBar
}
