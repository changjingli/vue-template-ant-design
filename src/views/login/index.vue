<template>
  <div class="login">
    <img alt="LOGO" class="login-logo" src="@/assets/logo.png">

    <h1 class="login-title">{{ appName }}</h1>
    <!-- /.login-title -->

    <a-form :form="form" class="login-form">
      <!-- 用户名/手机号/邮箱地址 -->
      <a-form-item>
        <a-input
          placeholder="请输入用户名/手机号/邮箱地址"
          v-decorator="['username', { rules: [{ required: true, message: '请输入用户名/手机号/邮箱地址' }] }]"
        >
          <a-icon slot="prefix" type="user"/>
        </a-input>
      </a-form-item>

      <!-- 密码 -->
      <a-form-item>
        <a-input
          placeholder="请输入密码"
          type="password"
          v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]"
        >
          <a-icon slot="prefix" type="lock"/>
        </a-input>
      </a-form-item>

      <!-- 登录系统 -->
      <a-button
        :loading="loading"
        @click="onClickLogin"
        block
        class="login-button"
        type="submit"
        size="large">
        登录系统
      </a-button>
    </a-form>
    <!-- /.login-form -->

    <address class="login-copyright">Copyright © 2019 江苏雅索信息科技有限公司 All Rights Reserved</address>
    <!-- /.login -->
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        appName: process.env.VUE_APP_NAME,
        form: this.$form.createForm(this, {name: 'login'}),
        loading: false,
      };
    },
    methods: {
      /**
       * 登录系统点击事件
       */
      onClickLogin() {
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.$store.dispatch('user/login', values).then(() => {
              const redirect = this.$route.query.redirect;

              this.$router.push({path: redirect || '/'});
              this.loading = false;
            }).catch(() => {
              this.loading = false;
            });
          }
        });
      },
    },
  };
</script>

<style scoped>
  .login {
    min-width: 768px;
    height: 100vh;

    display: grid;
    grid-gap: 2vh;
    grid-template-rows: 20vh 15vh auto 1fr;
    align-items: center;

    background: url("assets/bg.png") no-repeat #f0f2f5;
    background-size: 100% 50%;
  }

  .login-logo {
    display: block;
    margin: 0 auto;
    align-self: flex-end;
  }

  .login-title {
    font-size: 250%;
    text-align: center;
    color: #fff;
  }

  .login-form {
    margin: 0 auto;
    width: 450px;
    padding: 4vh 4vw;

    border-radius: 30px;
    background-color: #fff;
  }

  .login-button {
    color: #fff;
    border: 0;
    border-radius: 32px;
    background: linear-gradient(90deg, #5b65f9, #5ba8d4) no-repeat;
  }

  .login-copyright {
    padding: 20px;
    align-self: flex-end;

    color: #888484;
    text-align: center;
  }
</style>
