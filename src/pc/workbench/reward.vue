<template>
  <div class="rewardBox">
    <!-- 顶部栏 -->
    <div class="topTag top-panel">
      <div class="w _flex">
        <i class="el-icon-back" @click="prev()"></i>
        <span class="icon-title">发布悬赏</span>
      </div>
    </div>

    <div class="contentBox w">
      <el-row>
        <!-- 内容 -->
        <el-col :span="18">
          <div class="InfoBox">
            <el-form
              :model="formData"
              ref="formData"
              :rules="rules"
              label-width="100px"
            >
              <!-- 基本信息 -->
              <div class="panel">
                <div class="title">
                  基本信息
                  <!-- <div class="tools-box" style="font-weight: 100;">
                    应用类型：移动应用
                    <a class="ml-small" href="/workbench/publish/apps">修改</a>
                  </div> -->
                </div>
                <div class="content">
                  <!-- 悬赏名称 -->
                  <el-row>
                    <el-col :span="24">
                      <el-form-item label="悬赏名称 : " prop="title">
                        <el-input
                          maxlength="60"
                          placeholder="悬赏名称不能超过60字"
                          v-model="formData.title"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <!-- 赏金/周期 -->
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="赏金 : " prop="bounty">
                        <el-input
                          placeholder="赏金范围：100-1000000"
                          minlength="3"
                          maxlength="7"
                          v-model="formData.bounty"
                        >
                          <template slot="append">元</template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="应用类型 : " prop="cate_id">
                        <el-select
                          style="width: 100%;"
                          v-model="formData.cate_id"
                        >
                          <el-option-group
                            v-for="item in taskCate"
                            :key="item.id"
                            :label="item.name"
                          >
                            <el-option
                              v-for="child in item.children_task"
                              :key="child.id"
                              :value="child.id"
                              :label="child.name"
                              >{{ child.name }}</el-option
                            >
                          </el-option-group>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <!-- 应用类型 -->
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="开始时间 : " prop="begin_at">
                        <el-date-picker
                          v-model="formData.begin_at"
                          type="date"
                          placeholder="选择开始日期"
                          style="width:100%"
                        >
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        label="截止时间 : "
                        prop="delivery_deadline"
                      >
                        <el-date-picker
                          v-model="formData.delivery_deadline"
                          type="date"
                          placeholder="选择截止日期"
                          style="width:100%"
                        >
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <!-- 需求信息 -->
              <div class="panel" style="margin-top: 16px">
                <div class="title">需求信息</div>
                <div class="content">
                  <el-row>
                    <el-col :span="24">
                      <el-form-item label="需求描述 :" prop="desc">
                        <quill-editor
                          ref="myQuillEditor"
                          v-model="formData.desc"
                          :options="editorOption"
                          @blur="onEditorBlur($event)"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <el-form-item label="附件 :">
                        <el-upload
                          class="el-upload-dragger"
                          drag
                          action="http://kppw36.com/api/fileUpload"
                          multiple
                        >
                          <i class="el-icon-upload"></i>
                          <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传，</em>支持，总大小不超过
                            15 MB
                          </div>
                        </el-upload>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <el-form-item label="技能" prop="skills">
                        <el-select
                          v-model="formData.skills"
                          multiple
                          filterable
                          allow-create
                          default-first-option
                          placeholder="请选择一项或多项技能"
                          style="width: 100%;"
                          @focus="skillsLimit"
                          ref="skillSelect"
                        >
                          <el-option
                            v-for="item in skillList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                          >
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <!-- 联系信息 -->
              <div class="panel" style="margin-top: 16px">
                <div class="title">联系信息</div>
                <div class="content">
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="姓名 :" prop="name">
                        <el-input
                          placeholder="请输入姓名"
                          minlength="2"
                          maxlength="20"
                          v-model="formData.name"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="电话 :" prop="phone">
                        <el-input
                          placeholder="请输入手机/电话号码"
                          minlength="11"
                          maxlength="11"
                          v-model.number="formData.phone"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <el-form-item style="margin-left: -100px">
                <el-checkbox v-model="agreement">
                  您已阅读并同意
                  <span
                    ><a style="color: #2093ff" href=""
                      >《xxxx平台悬赏发布规则》</a
                    ></span
                  >
                </el-checkbox>
              </el-form-item>
              <el-row>
                <el-col :span="24" style="text-align: center">
                  <el-button
                    type="primary"
                    style="width: 220px"
                    size="medium"
                    @click="submitForm"
                    >保存并发布</el-button
                  >
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-col>
        <!-- 步骤 -->
        <el-col :span="6">
          <div class="stepBox">
            <div class="panel border-top-blue">
              <div class="title">发布流程</div>
              <div class="content">
                <el-steps direction="vertical" space="50px">
                  <el-step
                    title="完善您的悬赏需求信息"
                    status="finish"
                  ></el-step>
                  <el-step title="托管悬赏赏金完成发布"></el-step>
                  <el-step title="挑选解决方案,完成悬赏"></el-step>
                </el-steps>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    quillEditor
  },
  name: "reward",
  data() {
    let bountyLimit = (rule, value, callback) => {
      if (!(value >= 100 && value <= 1000000)) {
        callback(new Error("赏金范围：100 - 1000000"));
      }
    };
    let descLimit = (rule, value, callback) => {
      value = this.formData.desc;
      if (!value) {
        callback(new Error("请输入您的需求描述"));
      }
      callback();
    };
    let skillsLimit = (rule, value, callback) => {
      let length = this.formData.skills.length;
      if (length == 0) {
        callback(new Error("请选择技能"));
      }
      callback();
    };
    let phoneLimit = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入您的联系电话"));
      }
      if (!(String(value).length == 11)) {
        callback(new Error("您输入的联系电话格式不正确"));
      }
      callback();
    };
    return {
      agreement: true,
      editorOption: {
        placeholder: "请输入需求描述,最多不超过8000字",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ font: [] }], //字体
            ["clean"] //清除字体样式
          ]
        }
      },
      formData: {
        title: "",
        bounty: "",
        begin_at: "",
        delivery_deadline: "",
        name: "",
        phone: "",
        cate_id: "",
        desc: "",
        skills: []
      },
      rules: {
        title: [
          { required: true, message: "请输入悬赏名称", trigger: "blur" },
          { max: 60, message: "长度最多只能60", trigger: "blur" }
        ],
        bounty: [
          { required: true, message: "请输入赏金", trigger: "blur" },
          { validator: bountyLimit, trigger: "blur" }
        ],
        begin_at: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        delivery_deadline: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        cate_id: [
          { required: true, message: "请选择应用类型", trigger: "change" }
        ],
        desc: [{ required: true, validator: descLimit, trigger: "blur" }],
        name: [
          { required: true, message: "请输入联系人名称", trigger: "blur" }
        ],
        skills: [{ required: true, validator: skillsLimit }],
        phone: [{ required: true, validator: phoneLimit, trigger: "blur" }]
      },
      taskCate: [],
      skillList: [
        { id: 0, name: "js" },
        { id: 1, name: "php" },
        { id: 2, name: "html" }
      ]
    };
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    onEditorBlur(quill) {
      // 富文本失去焦点事件
      // console.log("editor blur!", quill);
      // let content = quill.root.innerText;
      // console.log(this.formData.desc);
      // this.formData.desc = content;
      // console.log(this.formData.desc);
      this.$refs.formData.validateField("desc"); //触发表当验证
    },
    // 转码
    // escapeStringHTML(str) {
    //   str = str.replace(/&lt;/g, "<");
    //   str = str.replace(/&gt;/g, ">");
    //   return str;
    // }
    skillsLimit() {
      this.$refs.skillSelect.$refs.input.blur = () => {
        this.$refs.formData.validateField("skills"); //触发表单验证
      };
    },
    submitForm() {
      this.$refs.formData.validate(ispass => {
        console.log(ispass);
      });
    }
  },
  created() {
    this.$axios.post("taskCate").then(res => {
      //获取类型列表
      // console.log(res);
      if (res.data.code == 1000) {
        this.taskCate = res.data.data;
        console.log(res.data.data);
        this.formData.cate_id = this.taskCate[0].children_task[0].id;
      }

   
    });
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>
<style scoped>
.rewardBox {
  width: 100%;
}

.topTag > div {
  height: 80px;
  justify-content: flex-start;
}

.topTag > div > i {
  font-size: 25px;
}

.icon-title {
  font-size: 18px;
  margin-left: 16px;
  font-weight: 700;
}

.contentBox {
  margin-top: 20px;
}

.border-top-blue {
  border-top: 4px solid #2093ff;
  border-radius: 3px 3px 0 0;
}

.stepBox {
  padding: 0 10px;
}
.rewardBox >>> .ql-toolbar.ql-snow,
.rewardBox >>> .ql-container.ql-snow {
  border: 1px solid #e4e4e4;
}
.rewardBox >>> .ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0;
}
</style>
