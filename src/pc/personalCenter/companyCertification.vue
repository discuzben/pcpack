<template>
  <div class="company">
    <div class="title">
      <span>企业认证</span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="公司全称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="公司全称需与营业执照中的名称保持一致"></el-input>
      </el-form-item>
      <el-form-item label="使用代码" prop="region">
        <el-input v-model="ruleForm.region" placeholder="公司全称需与营业执照中的名称保持一致"></el-input>
      </el-form-item>
      <el-form-item label="营业执照" class="charter" required>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                <i class="el-icon-download"></i>
              </span>
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <p>注：请上传清晰的企业营业执照电子版，图片上传支持 JPG、JPEG、PNG 格式，单张大小不超过 3M。</p>
      </el-form-item>
      <el-form-item>
        <el-button class="submit" type="primary" @click="submitForm">提交审核</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "companyCertification",
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
        },
        rules: {
          name: [{
            required: true,
            message: '请输入公司全称',
            trigger: 'blur'
          }],
          region: [{
            required: true,
            message: '请输入公司信用代码',
            trigger: 'blur'
          }],
        },
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      }
    },
    methods: {
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });
      // },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },
      // handleRemove(file) {
      //   console.log(file);
      // },
      // handlePictureCardPreview(file) {
      //   this.dialogImageUrl = file.url;
      //   this.dialogVisible = true;
      // },
      // handleDownload(file) {
      //   console.log(file);
      // }
    }
  }
</script>

<style lang="less">
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
    .el-form{
      padding-top: 20px;
      padding-right: 20px;
      box-sizing: border-box;
      p{
        color: #F60;
        font-size: 13px;
      }
      .submit{
        width: 180px;
        height: 40px;
      }
    }
    .charter{
      display: flex;
      .el-form-item__content{
        margin-left: 0 !important;
      }
    }
    .el-upload{
      width: 148px;
    }
  }
</style>
