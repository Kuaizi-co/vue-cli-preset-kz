<% if (options['ui-framework'] === 'element-ui') {%>
import zh from 'element-ui/lib/locale/lang/zh-CN'
<% } %>
<% if (options['ui-framework'] === 'iview') {%>
import zh from 'iview/dist/locale/zh-CN'
<% } %>

export default Object.assign({
  // 站点配置信息
  webconfig: {
    title: 'Kuaizi™ - 领先的人工智能创意平台',
    copyright: 'Copyright © 2013-2018 All Rights Reserved 广州筷子信息科技有限公司'
  },

  // 页面头部
  header: {
    nav: {
      home: '首页',
      manage: '广告管理',
      report: '广告报告',
      system: '系统管理',
      tag: '分类管理',
      partner: '客户管理',
      content: '内容管理',
      account: '账户中心'
    },
    profile: {
      menu: {
        logout: '退出登录'
      }
    }
  },

  // 首页面板
  dashboard: {
    newCreation: '新增创意',
    clickTotal: '累计点击',
    newTag: '新增标签',
    shareTotal: '分享统计',
    userAccess: '用户访问来源',
    weekAmountCreation: '每周投放创意量',
    sysLog: '系统更新日志'
  },

  // 按钮
  btn: {
    login: '登录',
    reset: '重置',
    logout: '注销'
  },

  // 消息
  messages: {
    loginSuccess: '登录成功，欢迎回来！',
    loginFailed: '登录失败',
    logoutSuccess: '成功注销！',
    logoutFailed: '注销失败！'
  },

  // 登录页
  pages: {
    login: {
      title: '广 告 主 账 号',
      user: '用户名',
      password: '密码'
    }
  }
}, zh)
