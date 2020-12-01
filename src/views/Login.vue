<template>
  <q-layout view="hHh lpR fFf">
          <div class="container">
      <q-card class="card shadow-14">
        <q-card-section horizontal>
          <q-card class="login_left bg-blue-8">
            <div class="login_explain">
              <q-toolbar>
                <q-avatar size="50px">
                  <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
                </q-avatar>
                <q-toolbar-title class="text-white text-h5">
                  <strong>Quasar</strong>
                  <br />
                </q-toolbar-title>
              </q-toolbar>
              <br />
              <q-toolbar-title class="text-white text-h6">
                <strong>一款开源的前端框架</strong>
              </q-toolbar-title>
              <br />
              <q-toolbar-title class="text-blue-grey-2 text-subtitle1">
                <strong>Razvan Stoenescu——作者</strong>
                <br />
              </q-toolbar-title>
              <q-card-section class="context text-grey-1 text-body2 text-weight-bold">
                Quasar的诞生是因为我觉得缺少一个全功能的框架来构建响应式网站、
                PWA（渐进式网页应用）、移动应用（Android、iOS）和Electron应用（使用相同的代码库）。
                所以我放弃了我的工作，使这个想法成为现实。
              </q-card-section>
              <q-separator  color="white" size="2px" style="margin-top:140px"/>
              <q-toolbar-title class="text-white text-subtitle2 text-center"
              style="position:absolute;bottom:30px" >
                <strong>Quasar Framework</strong>
                <br/>
                <strong>以最短时间构建高性能的VueJS用户界面</strong>
              </q-toolbar-title>
            </div>
          </q-card>
          <div class="login_right">
            <q-form @submit="login" class="q-gutter-md">
              <q-toolbar>
                <q-toolbar-title class="text-grey-9 text-h5">
                  <strong>欢迎登录Quasar</strong>
                </q-toolbar-title>
              </q-toolbar>
              <q-input
                filled
                v-model="userName"
                class="login_input"
                placeholder="用户名/手机/邮箱"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '该项为必填项']"
              />
              <q-input
                v-model="password"
                placeholder="请输入密码"
                class="login_input"
                filled
                :type="isPwd ? 'password' : 'text'"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '请输入密码']"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <button
                class="login_button bg-blue-8"
                label="登录"
                type="submit"
                size="20px"
                color="primary"
              >登录</button>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
      <q-footer class="footer bg-transparent">底部导航栏</q-footer>
      </div>
  </q-layout>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  data () {
    return {
      userName: '',
      accept: false,
      password: '',
      isPwd: true,
      info: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('https://localhost:8080/static/data.json')
        .then(response => (this.info = response))
        .catch(function (error) { // 请求失败处理
          console.log(error)
        })
    },
    login () {
      // 登陆验证
      const data = require('../../static/data.json')
      const user = data.user
      let isLogin = false

      if (this.userName !== '' && this.password !== '') {
        for (var i = 0; i < user.length; i++) {
          if (
            user[i].userName === this.userName &&
            user[i].password === this.password
          ) {
            isLogin = true
          }
        }
      }
      if (isLogin === true) {
        this.$router.push('/index')
      } else {
        alert('用户名或密码错误')
      }
    }
  }
}
</script>

<style lang="sass" scoped >
@import "../css/login.css";
</style>
