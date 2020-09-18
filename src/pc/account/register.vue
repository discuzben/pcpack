<template>
  <div>
    <Header :bg="'black'" />
    <div class="register">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item size="large">
          <h1>新用户注册</h1>
        </el-form-item>
        <el-form-item prop="phone" size="large">
          <el-input size="large" type="number" v-model="ruleForm.phone" placeholder="手机号码"></el-input>
        </el-form-item>
        <!-- <el-form-item prop="code" class="code" size="large">
          <el-input size="large" type="number" v-model="ruleForm.code" placeholder="校验码"></el-input>
          <img src="../../assets/image-code.jpg" alt="">
        </el-form-item> -->
        <el-form-item prop="checkcode" size="large">
          <el-input size="large" type="number" v-model="ruleForm.checkcode" placeholder="短信验证码">
            <template slot="append">
              <el-button @click="sendcode" style="color: rgb(64, 158, 255);">{{codefont}}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" size="large">
          <el-input size="large" placeholder="登录密码(6-20位)" v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item class="btns" size="large">
          <el-button type="primary" @click="submitForm('ruleForm')">同意协议并注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <el-form-item class="bot" size="large">
          <span class="protocol">《巨牛众包服务协议》</span>
          <router-link to="/login">
            <span class="tologin">已有账号?去登录</span>
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
    name: "register",
    components: {
      Header,
      Footer
    },
    data() {
      return {
        ruleForm: {
          phone: '',
          code: '',
          checkcode: '',
          password: ''
        },
        codefont: '发送验证码',
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
          // code: [{
          //     required: true,
          //     message: '请输入校验码',
          //     trigger: 'blur'
          //   },
          //   {
          //     min: 4,
          //     max: 4,
          //     message: '长度在 4 个字符',
          //     trigger: 'blur'
          //   }
          // ],
          checkcode: [{
              required: true,
              message: '请输入验证码',
              trigger: 'blur'
            },
            {
              min: 4,
              max: 6,
              message: '长度在 4-6 个字符',
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
    mounted() {
    },
    methods: {
      submitForm(formName) {
        alert('submit!');
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      sendcode() {
        let _this = this;
        if(_this.ruleForm.phone&&_this.ruleForm.phone.length==11){
          this.$axios.post('sendCode', {
              mobile: _this.ruleForm.phone
            })
            .then(function(res) {
              console.log(res.data);
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      },
      countcown() {
        let _this = this;
        let time = 59;
        let timer = setInterval(function(){
          _this.codefont = (time--) + "秒后可重新获取"
          if(time <= 0){
            clearInterval(timer)
            _this.codefont = "重新发送"
          }
        },100)
      }
    }
  }
</script>

<style lang="less">
  .register {
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
        width: 45%;
      }

      button:nth-last-child(1) {
        float: right;
      }
    }

    .bot {
      color: rgb(64, 158, 255);

      .tologin {
        float: right;
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
  }
</style>
