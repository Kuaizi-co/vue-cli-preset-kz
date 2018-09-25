<template>
  <div class="layout-lang">
    <a href="#" @click="handleChangeLang">
      <% if (options['ui-framework'] === 'iview') {%><Icon type="md-swap" /> <% } %>
      <% if (options['ui-framework'] === 'element-ui') {%><i class="el-icon-sort"></i><% } %>
      {{ lang }}
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      lang: ''
    }
  },
  computed: {
    ...mapState({
      locale: state => state.Language.locale
    })
  },
  watch: {
    locale: {
      handler () {
        this.lang = this.locale === 'zh-CN' ? 'En' : '中文'
      },
      immediate: true
    }
  },
  methods: {
    handleChangeLang (e) {
      this.$store.dispatch('setSystemLanguage', this.locale === 'zh-CN' ? 'en-US' : 'zh-CN')
      e.preventDefault()
      return false
    }
  }
}
</script>

<style>
.layout-lang {
  float: right;
  margin-right: 30px;
  font-size: 16px;
}
.layout-lang a {
  text-decoration: none;
  color: hsla(0,0%,100%,.7);
}
.layout-lang a:hover {
  color: hsla(0,0%,100%, 1);
}  
</style>
