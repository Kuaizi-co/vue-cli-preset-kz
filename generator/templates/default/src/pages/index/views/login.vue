<template>
  <% if (options['ui-framework'] === 'iview') {%>
  <Layout>
      <Header>
        <h1 class="brand">{{ $t('webconfig.title') }}</h1>
        <i-language />
      </Header>
      <Content :style="{ 'min-height': '545px' }">
        <Row>
          <Col span="8" offset="8">
              <div class="login-wrapper">
                <Divider class="login-header">{{ $t('pages.login.title') }}</Divider>
                  <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                  <FormItem :label="$t('pages.login.user')" prop="email">
                      <Input type="text" v-model="formCustom.email" placeholder="test@kuaizi.ai" />
                  </FormItem>
                  <FormItem :label="$t('pages.login.password')" prop="passwd">
                      <Input type="password" placeholder="test@kuaizi.ai" v-model="formCustom.passwd" />
                  </FormItem>
                  <FormItem>
                      <Button type="primary" @click="handleSubmit('formCustom')">{{ $t('btn.login') }}</Button>
                      <Button @click="handleReset('formCustom')" style="margin-left: 8px">{{ $t('btn.reset') }}</Button>
                  </FormItem>
                </Form>
              </div>
          </Col>
        </Row>
      </Content>
      <Footer>
        <div class="copyright">
          {{ $t('webconfig.copyright') }}
        </div>
      </Footer>
  </Layout>
  <% } %>
  <% if (options['ui-framework'] === 'element-ui') {%>
  <el-container class="login-container">
    <el-header class="app-header">
      <h2 class="brand">
        {{ $t('webconfig.title') }}
      </h2>
      <i-language />
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8" :offset="8">
          <h2 class="login-header">{{ $t('pages.login.title') }}</h2>
          <el-form :model="formCustom" status-icon :rules="ruleCustom" ref="formCustom" label-width="100px" class="demo-ruleForm">
            <el-form-item :label="$t('pages.login.user')" prop="email">
              <el-input type="text" v-model="formCustom.email" autocomplete="off" placeholder="test@kuaizi.ai"></el-input>
            </el-form-item>
            <el-form-item :label="$t('pages.login.password')" prop="passwd">
              <el-input type="password" v-model="formCustom.passwd" autocomplete="off" placeholder="test@kuaizi.ai"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSubmit('formCustom')">{{ $t('btn.login') }}</el-button>
              <el-button @click="handleReset('formCustom')">{{ $t('btn.reset') }}</el-button>
            </el-form-item>
          </el-form>
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
</template>

<script>
import iLanguage from '../components/language'
export default {
  components: {
    iLanguage
  },
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    const emailCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value)) {
        callback(new Error('用户名应该为邮箱地址'))
      } else {
        callback()
      }
    }

    return {
      formCustom: {
        passwd: '',
        email: 'test@kuaizi.ai'
      },
      ruleCustom: {
        passwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          { validator: emailCheck, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.sysLogin()
        } else {
          // this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    sysLogin () {
      this.$store.dispatch('userSignIn', this.formCustom)
                  .then(data => {
                    this.$<%= options['ui-framework'] === 'element-ui' ? 'm' : 'M' %>essage.success(this.$t('messages.loginSuccess'))
                    this.$router.push('/')
                  })
                  .catch(err => {
                    this.$<%= options['ui-framework'] === 'element-ui' ? 'm' : 'M' %>essage.error(err.message)
                  })
    }
  }
}
</script>

<style>
.brand {
  float: left;
  margin: 0;
  color: #fff;
  flex: 1;
}
.login-wrapper {
  padding: 100px 0 0;
}
.login-header {
  margin: 16px 0 40px!important;
  color: #2c3e50;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  word-spacing: 10px;
}
.copyright {
  text-align: center;
}

html, body {
  height: 100%;
}
.login-container {
  min-height: 100%;
  background: #f5f7f9;
}
.login-container .copyright {
  line-height: 60px;
  color: #515a6e;
  font-size: 14px;
}
.app-header {
  background: #515a6e;
  line-height: 60px;
  color: #fff;
}
</style>
