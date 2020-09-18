<template>
  <div class="company">
    <div class="title">
      <span>积分任务</span>
      <div>
        <el-button plain icon="el-icon-refresh">刷新任务</el-button>
        <el-button plain icon="el-icon-question">积分常见问题</el-button>
      </div>
    </div>
    <div class="total">
      <span class="name">您当前的积分:</span>
      <span class="num">0</span>
      <span class="name lastname">待完成的任务:</span>
      <span class="num">6</span>
    </div>
    <div class="task">
      <div class="stitle">日常任务</div>
    </div>


<!--    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item prop="email" label="邮箱" :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]">
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'域名' + index" :key="domain.key"
        :prop="'domains.' + index + '.value'" :rules="{
          required: true, message: '域名不能为空', trigger: 'blur'
        }">
        <el-input v-model="domain.value"></el-input>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form> -->

  </div>
</template>

<script>
  export default {
    name: "pointstask",
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .company {
    .title {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #EFEFEF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      box-sizing: border-box;

      .span {
        font-size: 16px;
        color: #232323;
        font-weight: 700;
      }
    }

    .total {
      padding: 20px 15px;
      box-sizing: border-box;
      display: flex;
      align-items: baseline;

      .name {
        font-size: 14px;
        color: #999999;
      }

      .num {
        font-size: 18px;
        color: #151519;
        line-height: 23px;
        font-weight: 700;
        margin-left: 10px;
      }

      .lastname {
        margin-left: 20px;
      }
    }

    .task {
      .stitle {
        background-color: rgba(0, 0, 0, 0.0980392156862745);
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        box-sizing: border-box;
      }
    }
  }
</style>
