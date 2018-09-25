<template>
  <i :class="iconType" :style="styles"></i>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#5c6b77'
    },
    size: {
      type: Number,
      default: 16
    }
  },
  computed: {
    styles () {
      return {
        fontSize: `${this.size}px`,
        color: this.color
      }
    },
    iconType () {
      <% if (options['ui-framework'] === 'iview') { %>
      return `iconfont icon-${this.type}`
      <% } %>
      <% if (options['ui-framework'] === 'element-ui') { %>
        return this.type
      <% } %>
    }
  }
}
</script>

<style>

</style>
