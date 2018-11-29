<template>
  <% if (options['ui-framework'] === 'iview') {%>
  <Layout>
      <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Manage</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{padding: '24px 0 0', minHeight: '280px'}">
          <router-view>
          </router-view>
      </Content>
  </Layout>
  <% } %>
  <% if (options['ui-framework'] === 'element-ui') {%>
  <el-col>
      <el-breadcrumb separator="/" style="margin-bottom: 20px">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Manage</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view>
      </router-view>
    </el-col>
  <% } %>
</template>
