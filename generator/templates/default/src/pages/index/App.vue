<template>
  <div class="app-view">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
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
