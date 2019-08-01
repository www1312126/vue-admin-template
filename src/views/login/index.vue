<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div style="background-color: #fff; padding:22px 30px 0 40px">
        <div class="title-container">
          <div class="cloud">
            <img src="../../assets/images/login/cloud.png">
          </div>
          <h3 class="title">学校体育课运动信息平台</h3>
        </div>

        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="账号"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
            clearable
          />
          <span class="icon-account">
            <img src="../../assets/images/login/icon-account.png">
          </span>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="icon-password">
            <img src="../../assets/images/login/icon-password.png">
          </span>
        </el-form-item>

        <el-button :loading="loading" style="width:100%;margin: 0 0 30px 0;background-color: #FE8B5C; color:#fff;" @click.native.prevent="handleLogin">登录</el-button>

        <div class="tips">
          <span style="margin-right:20px;">username: admin</span>
          <span> password: any</span>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位数'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch((error) => {
              console.log(error)
              this.loading = false
            })
          /*const _this = this
          axios({
            url: 'http://localhost/admin/v1/adminlogin?username=' + this.loginForm.username + '&password=' + this.loginForm.password,
            method: 'get',
            data: {}
          }).then(function (response) {
            _this.$router.push({ path: _this.redirect || '/' })
            _this.loading = false
          }).catch((error) => {
            _this.loading = false
            _this.$alert('网络异常: ' + error, '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            })
          })*/
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    //color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .icon-account,.icon-password {
    position: absolute;
    top: 5px;
    left: 8px;
    width: 18px;
    height: 18px;
    img {
      width: 18px;
      height: 18px;
    }
  }
  .el-input {
    input {
      padding: 0 0 0 35px;
      &:-webkit-autofill {
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  //background-color: $bg;
  background: url("../../assets/images/login/bg.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    position: relative;
    padding: 50px 0 0 0;
    .cloud  {
      position: absolute;
      width: 80px;
      top: 0;
      left: 45px;
      img {
        width: 80px;
        height: auto;
      }
    }
    .title {
      font-size: 26px;
      //color: $light_gray;
      color: #626262;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
