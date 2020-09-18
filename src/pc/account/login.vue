<template>
  <div>
    <Header :bg="'black'" />
    <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item size="large">
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="phone" size="large">
          <el-input size="large" v-model.number="ruleForm.phone" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="password" size="large" class="password">
          <el-input size="large" placeholder="登录密码(6-20位)" v-model="ruleForm.password" show-password></el-input>
          <router-link to="/login/forgetPass">
            <span class="forget">忘记密码</span>
          </router-link>
        </el-form-item>
        <el-form-item class="btns" size="large">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
        <el-form-item class="bot" size="large">
          <span class="protocol">没有账号?</span>
          <router-link to="/register">
            <span class="tologin">立即注册</span>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/pc/components/Header";
  import Footer from "@/pc/components/Footer";

  export default {
    name: "login",
    components: {
      Header,
      Footer
    },
    data() {
      return {
        ruleForm: {
          phone: '',
          password: '',
        },
        rules: {
          phone: [{
              required: true,
              message: '请输入手机号',
              trigger: 'blur'
            },
            {
              min: 11,
              max: 11,
              message: '长度在 11 个字符',
              trigger: 'blur'
            }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 20,
              message: '请输入(6-20位)密码',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        alert('submit!');
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
  .login {
    margin-top: 60px;

    .demo-ruleForm {
      width: 445px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.0470588);
      margin: 0 auto;
      margin-top: 120px;
      padding: 50px;
      box-sizing: border-box;
    }

    .el-form-item__content {
      margin-left: 0 !important;
    }

    .el-form-item {
      margin-bottom: 30px;
    }

    .el-form-item:nth-last-child(1) {
      margin-bottom: 0 !important;
    }

    .code {
      .el-form-item__content {
        display: flex;

        img {
          height: 40px;
        }
      }
    }

    .btns {
      button {
        width: 100%;
      }

      button:nth-last-child(1) {
        float: right;
      }
    }

    .bot {
      text-align: center;

      .tologin {
        color: rgb(64, 158, 255);
      }
    }

    h1 {
      font-weight: 700;
      line-height: 28px;
      font-size: 28px;
      text-align: center;
      color: #333333;
    }

    .password {
      position: relative;
    }

    .forget {
      right: 0;
      top: 30px;
      position: absolute;
      color: rgb(64, 158, 255);
    }
  }
</style>
