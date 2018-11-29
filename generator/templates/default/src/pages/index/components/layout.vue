<template>
  <% if (options['ui-framework'] === 'iview') {%>
  <div class="layout">
    <Layout>
        <home-header />
        <Layout :style="{ margin: '88px 20px 0', 'min-height': 'calc(100vh - 150px)' }">
            <Sider hide-trigger :style="{background: '#fff'}" v-show="showSidebar">
                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            常用菜单
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            快捷方式
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            报表导出
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{padding: '0 24px 0'}">
                <router-view></router-view>
            </Layout>
        </Layout>
        <homeFooter></homeFooter>
    </Layout>
  </div>
  <% } %>
  <% if (options['ui-framework'] === 'element-ui') {%>
  <el-container direction="vertical" class="app-container layout">
      <home-header />
      <el-main class="main-wapper">
        <el-row :gutter="20">
          <el-col :span="4"  v-show="showSidebar">
            <el-menu
            class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
          </el-col>
          <el-col :span="showSidebar ? 20 : 24">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
      <homeFooter></homeFooter>
    </el-container>
  <% } %>
</template>

<script>
import homeHeader from './common/header'
import homeFooter from './common/footer'
export default {
  components: {
    homeHeader,
    homeFooter
  },
  data () {
    return {
      showSidebar: false
    }
  },
  watch: {
    '$route': {
      handler ({ meta }) {
        this.showSidebar = !(meta.sidebar === 0)
      }
    }
  }
}
</script>

<style>
<% if (options['ui-framework'] === 'iview') {%>
.layout{
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
<% } %>
<% if (options['ui-framework'] === 'element-ui') {%>
.layout{
    flex: 1;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
html, body {
  height: 100%;
}
.app-container {
  min-height: 100%;
}
.app-header {
  display: flex;
  background: #515a6e;
  color: #fff;
}
.app-header a {
  text-decoration: none;
}
.app-header .layout-lang {
  line-height: 60px;
}
.copyright {
  line-height: 60px;
  color: #515a6e;
  font-size: 14px;
}
.el-menu-demo {
  float: right;
}
.layout-avatar {
  line-height: 60px;
}
.layout-avatar .el-dropdown {
  color: #fff;
}
.avatar-image {
  display: inline-block;
  text-align: center;
  color: #fff;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 16px;
}
.avatar-image > img {
  width: 100%;
  height: 100%;
}
<% } %>

</style>
