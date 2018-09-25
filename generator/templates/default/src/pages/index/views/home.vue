<template>
  <div class="layout">
    <% if (options['ui-framework'] === 'iview') {%>
        <Layout>
            <Header  :style="{position: 'fixed', width: '100%', 'z-index': 1000 }">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">Kuaizi™</div>
                    <div class="layout-avatar">
                      <Dropdown @on-click="handleLogout">
                        <Avatar :src="user.avatar" :title="user.email" />
                        <Icon :size="18" type="md-arrow-dropdown"></Icon>
                        <DropdownMenu slot="list">
                          <DropdownItem name="logout">{{ $t('header.profile.menu.logout') }}</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <i-language />
                    <div class="layout-nav">
                        <MenuItem v-for="(item, index) in navList" :key="index" :name="item.name">
                            <router-link :to="item.link">
                              <Icon :type="icons[index]"></Icon>
                            {{ $t(item.name) }}</router-link>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{ margin: '88px 20px 0', 'min-height': '615px' }">
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 0'}">
                    <Breadcrumb>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>{{ pageName }}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px 0 0', minHeight: '280px'}">
                        <Row :gutter="20">
                          <i-col span="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;">
                            <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
                              <count-to :end="infor.count" count-class="count-style"/>
                              <p>{{ getLangInforTitle(infor.title) }}</p>
                            </infor-card>
                          </i-col>
                        </Row>
                        <Row :gutter="20" style="margin-top: 20px;">
                        <i-col span="8">
                          <Card shadow>
                            <chart-pie style="height: 300px;" :value="pieData" :text="$t('dashboard.userAccess')"></chart-pie>
                          </Card>
                        </i-col>
                        <i-col span="16">
                          <Card shadow>
                            <chart-bar style="height: 300px;" :value="barData" :text="$t('dashboard.weekAmountCreation')"/>
                          </Card>
                        </i-col>
                      </Row>
                      <Row style="margin-top: 20px;">
                        <Card shadow>
                          <h4 style="margin-bottom: 20px">{{ $t('dashboard.sysLog') }}</h4>
                          <Timeline>
                            <TimelineItem color="green">发布1.0版本</TimelineItem>
                            <TimelineItem color="green">发布2.0版本</TimelineItem>
                            <TimelineItem color="red">严重故障</TimelineItem>
                            <TimelineItem color="blue">发布3.0版本</TimelineItem>
                        </Timeline>
                        </Card>
                      </Row>
                    </Content>
                </Layout>
            </Layout>
            <Footer>
              <div class="copyright">
                {{ $t('webconfig.copyright') }}
              </div>
            </Footer>
        </Layout>
    <% } %>
    <% if (options['ui-framework'] === 'element-ui') {%>
    <el-container class="app-container layout">
      <el-header class="app-header">
        <div class="layout-logo">Kuaizi™</div>
        <div class="layout-nav">
          <el-menu
            :default-active="curNav"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#515a6e"
            active-text-color="#ffd04b">
            <el-menu-item v-for="(item, index) in navList" :key="index" :index="item.link">
                  <router-link :to="item.link">
                    <i :class="icons[index]"></i>
                  {{ $t(item.name) }}</router-link>
              </el-menu-item>
          </el-menu>
        </div>
        <i-language />
        <div class="layout-avatar">
          <el-dropdown @command="handleLogout">
            <span class="el-dropdown-link">
              <span class="avatar-image"><img :src="user.avatar" :title="user.email"></span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">{{ $t('header.profile.menu.logout') }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="main-wapper">
        <el-row :gutter="20">
          <el-col :span="4">
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
          <el-col :span="20">
            <el-breadcrumb separator="/" style="margin-bottom: 20px">
              <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
              <el-breadcrumb-item>{{ pageName }}</el-breadcrumb-item>
            </el-breadcrumb>
            <el-row :gutter="20">
              <el-col :span="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;">
                <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
                  <count-to :end="infor.count" count-class="count-style"/>
                  <p>{{ getLangInforTitle(infor.title) }}</p>
                </infor-card>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 20px;">
              <el-col :span="8">
                <el-card shadow>
                  <chart-pie style="height: 300px;" :value="pieData" :text="$t('dashboard.userAccess')"></chart-pie>
                </el-card>
              </el-col>
              <el-col :span="16">
                <el-card shadow>
                  <chart-bar style="height: 300px;" :value="barData" :text="$t('dashboard.weekAmountCreation')"/>
                </el-card>
              </el-col>
            </el-row>
            <el-row style="margin-top: 20px;">
              <el-card shadow>
                <h4 style="margin-bottom: 20px">{{ $t('dashboard.sysLog') }}</h4>
                <div style="height: 150px;">
                  <el-steps direction="vertical" :active="1">
                    <el-step title="发布1.0版本"></el-step>
                    <el-step title="发布2.0版本"></el-step>
                    <el-step title="发布3.0版本" description="这是一段很长很长很长的描述性文字"></el-step>
                  </el-steps>
                </div>
              </el-card>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <div class="copyright">
          {{ $t('webconfig.copyright') }}
        </div>
      </el-footer>
    </el-container>
    <% } %>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InforCard from '@/components/info-card'
import CountTo from '@/components/count-to'
import { ChartPie, ChartBar } from '@/components/charts'
import { navList } from '@/config'
import iLanguage from '../components/language'
export default {
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    iLanguage
  },
  data () {
    return {
      curNav: '',
      pageName: '',
      lang: '',
      navList,
      icons: ['navigate', 'keypad', 'analytics', 'paper', 'basket-outline', 'bug-outline', 'contacts-outline'].map(item => `ios-${item}`),
      inforCardData: [
        <% if (options['ui-framework'] === 'iview') {%>
        { title: 'newCreation', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: 'clickTotal', icon: 'md-locate', count: 23432, color: '#19be6b' },
        { title: 'newTag', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: 'shareTotal', icon: 'md-share', count: 657, color: '#ed3f14' }
        <% } %>
        <% if (options['ui-framework'] === 'element-ui') {%>
        { title: 'newCreation', icon: 'el-icon-news', count: 803, color: '#2d8cf0' },
        { title: 'clickTotal', icon: 'el-icon-bell', count: 23432, color: '#19be6b' },
        { title: 'newTag', icon: 'el-icon-document', count: 142, color: '#ff9900' },
        { title: 'shareTotal', icon: 'el-icon-share', count: 657, color: '#ed3f14' }
        <% } %>
      ],
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.User
    })
  },
  watch: {
    '$route': {
      handler ({ path }) {
        const result = path.match(/\/([^/]*)/)
        this.pageName = result[1] === '' ? 'Dashboard' : this.$t('header.nav.'+result[1])
        this.curNav = path
      },
      immediate: true
    }
  },
  methods: {
    handleLogout (name) {
      switch(name) {
        case 'logout':
          this.$store.dispatch('userSignOut')
                      .then(data => {
                        this.$<%= options['ui-framework'] === 'element-ui' ? 'm' : 'M' %>essage.success('注销成功!')
                        this.$router.push('/login')
                      })
          break
      }
    },
    getLangInforTitle (title) {
      return this.$t(`dashboard.${title}`)
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
.layout-logo{
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-avatar {
  float: right;
  margin-right: 20px;
  color: hsla(0,0%,100%,.7);
}
.layout-avatar .ivu-dropdown-rel {
  color: hsla(0,0%,100%,.7);
}
.layout-avatar .ivu-dropdown-rel:hover {
  color: hsla(0,0%,100%,1);
}
.layout-nav{
    float: right;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-nav a{
  color: hsla(0,0%,100%,.7);
}
.layout-nav a:hover{
  color: hsla(0,0%,100%, 1);
}
.copyright {
  text-align: center;
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
.layout-logo{
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-avatar {
  float: right;
  margin-right: 20px;
  color: hsla(0,0%,100%,.7);
}
.layout-avatar .ivu-dropdown-rel {
  color: hsla(0,0%,100%,.7);
}
.layout-avatar .ivu-dropdown-rel:hover {
  color: hsla(0,0%,100%,1);
}
.layout-nav{
    float: right;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-nav a{
  color: hsla(0,0%,100%,.7);
}
.layout-nav a:hover{
  color: hsla(0,0%,100%, 1);
}
.copyright {
  text-align: center;
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
