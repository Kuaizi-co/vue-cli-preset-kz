// ^_^，有道翻译！！！
<% if (options['ui-framework'] === 'element-ui') {%>
import en from 'element-ui/lib/locale/lang/en'
<% } %>
<% if (options['ui-framework'] === 'iview') {%>
import en from 'iview/dist/locale/en-US'
<% } %>
export default Object.assign({
  // 站点配置信息
  webconfig: {
    title: 'Kuaizi™ - Leading artificial intelligence creative platform in real time',
    copyright: 'Copyright © 2013-2018 All Rights Reserved by www.kuaiz.ai'
  },

  // 页面头部
  header: {
    nav: {
      home: 'Home',
      manage: 'Manage',
      report: 'Report',
      system: 'System',
      tag: 'Tag',
      partner: 'Partner',
      content: 'Content',
      account: 'Account'
    },
    profile: {
      menu: {
        logout: 'Logout'
      }
    }
  },

  // 首页面板
  dashboard: {
    newCreation: 'New Creation',
    clickTotal: 'Click Total',
    newTag: 'New Tag',
    shareTotal: 'Share Total',
    userAccess: 'User Access',
    weekAmountCreation: 'A week on the amount of creativity',
    sysLog: 'System Update Log'
  },

  // 按钮
  btn: {
    login: 'Login',
    reset: 'Rest',
    logout: 'Logout'
  },

  // 消息
  messages: {
    loginSuccess: 'Success！',
    loginFailed: 'Failed',
    logoutSuccess: 'Success！',
    logoutFailed: 'Failed！'
  },

  // 登录页
  pages: {
    login: {
      title: 'Advertisers Account',
      user: 'User',
      password: 'Password'
    }
  }
}, en)
