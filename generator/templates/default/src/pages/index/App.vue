<template>
  <div class="app-view">
    <home-layout></home-layout>
  </div>
</template>

<script>
import homeLayout from './components/layout'
export default {
  name: 'app',
  components: {
    homeLayout
  }
}
</script>

<style lang="<%= options.cssPreprocessor %>">
  h1 {
    color: <%= options.cssPreprocessor === 'less' ? '@color' : '$color' %>;
  }
  .app-view {
    <% if (options['ui-framework'] === 'element-ui') {%>
    display: flex;
    <% } %>
    min-height: 100%;
  }
</style>
