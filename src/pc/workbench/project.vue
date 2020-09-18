<template>
  <div class="projectBox">
    <!-- 顶部标签 -->
    <div class="top-panel">
      <div class="w">
        <p>免费发布需求</p>
        <p>
          几分钟内联系技能丰富的威客。查看其个人资料、评级、作品集并与他们聊天。只有当您对他们的作品100％满意时再向xx支付。
        </p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="container mtb-large">
      <div class="w">
        <el-row>
          <!-- 需求 -->
          <el-col :span="18">
            <el-form>
              <div class="publish-project">
                <el-form-item label="选择需求类型">
                  <div class="application__btn">
                    <el-button v-for="n in 15" :key="n">123</el-button>
                  </div>
                </el-form-item>
                <el-form-item label="需求标题">
                  <el-input
                    class="title-name"
                    placeholder="请输入需求标题，如美食类电商网站开发、APP开发"
                    maxlength="40"
                  ></el-input>
                </el-form-item>
                <el-form-item label="需求描述">
                  <quill-editor
                    ref="myQuillEditor"
                    v-model="content"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                  />
                </el-form-item>
                <el-form-item>
                  <el-upload drag action="" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                      <em>拖拽</em
                      >或<em>点击</em>上传您的需求补充文件或图片，附件总数不超过
                      5 个且总大小不超过 15MB
                    </div>
                  </el-upload>
                </el-form-item>
                <el-form-item label="技能要求">
                  <el-select></el-select>
                </el-form-item>
                <div class="project-panel">
                  <div class="title">工期与预算</div>
                  <el-row>
                    <el-col
                      :span="12"
                      :type="flex"
                      :justify="start"
                      :align="middle"
                      class="cycle-wrapper"
                    >
                      <el-form-item>
                        <el-input></el-input>
                        <div class="cycle-main">
                          <span class="active">天</span>
                          <span class="">月</span>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>
                <div class="project-panel name-mobile">
                  <div class="title">
                    <em style="color: rgb(245, 108, 108); margin-right: 4px;"
                      >*</em
                    >联系方式
                  </div>
                  <el-row>
                    <el-col :span="12">
                      <el-form-item>
                        <el-input placeholder="请输入姓名"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item>
                        <el-input placeholder="请输入手机/电话号码"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>
                <div class="drop-down">
                  完善更多需求合作信息（选填）
                  <i
                    class="el-icon-d-arrow-right"
                    style="transform: rotate(90deg)"
                  ></i>
                </div>
              </div>
              <!-- 下拉面板 -->
              <div class="project-panel drop-down__main">
                <div class="title _flex">
                  <span>合作的服务方需满足以下要求 </span>
                  <span
                    >不符合要求的服务方，将无法参与您的项目竞标合作，您可以在发布成功后进行修改
                  </span>
                </div>
                <div class="content">
                  <el-form-item label="身份要求 :" label-width="80px">
                    <el-radio-group v-model="radio">
                      <el-radio :label="3">不限</el-radio>
                      <el-radio :label="6">个人</el-radio>
                      <el-radio :label="9">企业</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="驻场要求 :" label-width="80px">
                    <el-radio-group v-model="radio">
                      <el-radio :label="3">无需驻场</el-radio>
                      <el-radio :label="6">偶尔到场交流</el-radio>
                      <el-radio :label="9">定期驻场</el-radio>
                      <el-radio :label="12">全程驻场</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="地域要求 :" label-width="80px">
                    <el-select></el-select>
                    <el-select></el-select>
                  </el-form-item>
                </div>
              </div>
              <!-- 评估服务 -->
              <div class="panel mt-large bond">
                <el-row>
                  <el-col :span="2" class="project-add-bond__checked">
                    <el-checkbox v-model="checked"></el-checkbox>
                  </el-col>
                  <el-col :span="15">
                    <div class="title">
                      接包方筛选评估服务
                    </div>
                    <p>
                      不用再没完没了接电话讲需求评估接包方，开源众包为您精准筛选最优接包方。
                    </p>
                    <div style="margin-top: 10px;color: rgb(153, 153, 153);">
                      <div style="color: rgb(0, 0, 0); margin-bottom: 6px;">
                        服务内容及标准：
                      </div>
                      <p>
                        1、项目发布后30分钟内为您梳理需求并开始评估筛选接包方
                      </p>
                      <p>2、项目选标期间每天提供一次接包方筛选评估报告</p>
                      <p>3、评估筛选服务直至项目筛选到合适接包方为止</p>
                      <p style="color: rgb(255, 0, 0); font-size: 12px;">
                        特别说明：增值服务不予退款！
                      </p>
                    </div>
                  </el-col>
                  <el-col :span="7" style="text-align='right'">
                    <div class="moneyBox" style="margin-top: 36px;">
                      <div>限时</div>
                      <div>￥ <span> 99 </span> 元</div>
                      <div>￥999元</div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-form>
            <!-- 按钮 -->
            <div class="project-btn mt-large">
              <el-button class="btn-200" type="">保存为草稿</el-button>
              <el-button type="primary" class="btn-200">立即发布</el-button>
            </div>
            <div class="project-agreement">
              点击保存或发布按钮，表示您已确认并同意
              <span
                ><a href="" target="_blank" style="color: rgb(32, 160, 255);"
                  >《XXX平台项目发布协议及规则》</a
                ></span
              >
            </div>
          </el-col>
          <!-- 广告 -->
          <el-col
            :span="6"
            style="padding-left:10px;padding-right:10px"
            class="advertising"
          >
            <div class="panel">
              <a href="/">
                <img src="@/assets/img/images3.jpg" alt="" />
              </a>
            </div>
            <div class="panel">
              <a href="/">
                <img src="@/assets/img/images4.jpg" alt="" />
              </a>
            </div>
            <div class="panel">
              <a href="/">
                <img src="@/assets/img/img1.png" alt="" />
              </a>
            </div>
            <div class="panel">
              <a href="/">
                <img src="@/assets/img/img3.jpg" alt="" />
              </a>
            </div>
          </el-col>
        </el-row>
      </div>
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
  name: "projectAdd",
  data() {
    return {
      content: "",
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
        },
        taskCate: [
          {
            id: 170,
            name: "软件开发",
            pid: 0,
            path: "-0-",
            pic: "attachment/sys/b16727489b5bc88cf53db785d6a78208.png",
            sort: 1,
            choose_num: 0,
            created_at: "2016-06-22 16:28:20",
            updated_at: "2016-06-22 16:28:20",
            children_task: [
              {
                id: 232,
                name: "程序开发",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 8,
                created_at: "2016-07-28 15:54:48",
                updated_at: "2020-09-15 14:27:12"
              },
              {
                id: 233,
                name: "编写脚本",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-22 09:21:21",
                updated_at: "2020-09-02 17:40:17"
              },
              {
                id: 234,
                name: "软件皮肤",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 16:14:49",
                updated_at: "2016-07-28 16:14:50"
              },
              {
                id: 235,
                name: "插件开发",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-29 13:43:14",
                updated_at: "2016-07-29 13:43:15"
              },
              {
                id: 236,
                name: "游戏开发",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-29 09:13:25",
                updated_at: "2016-07-29 09:13:27"
              },
              {
                id: 237,
                name: "程序功能开发",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-22 09:34:10",
                updated_at: "2020-09-02 17:40:17"
              },
              {
                id: 238,
                name: "软件美工",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-22 09:37:23",
                updated_at: "2020-09-03 09:20:11"
              },
              {
                id: 239,
                name: "开发文档编写",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-22 09:42:32",
                updated_at: "2020-09-03 09:24:15"
              },
              {
                id: 240,
                name: "功能完善",
                pid: 170,
                path: "-0-170-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-22 09:44:44",
                updated_at: "2020-09-03 09:23:02"
              }
            ]
          },
          {
            id: 169,
            name: "生活服务",
            pid: 0,
            path: "-0-",
            pic: "attachment/sys/49559764a76c1cc3271b7d40294e0da9.png",
            sort: 2,
            choose_num: 0,
            created_at: "2016-06-22 16:28:20",
            updated_at: "2016-06-22 16:28:20",
            children_task: [
              {
                id: 225,
                name: "市场调查",
                pid: 169,
                path: "-0-169-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:50:57",
                updated_at: "2016-07-28 14:50:58"
              },
              {
                id: 226,
                name: "帮我投票",
                pid: 169,
                path: "-0-169-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 15:04:02",
                updated_at: "2016-07-28 15:04:03"
              },
              {
                id: 227,
                name: "数据导入",
                pid: 169,
                path: "-0-169-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 15:52:39",
                updated_at: "2016-07-28 15:52:40"
              },
              {
                id: 228,
                name: "心理咨询",
                pid: 169,
                path: "-0-169-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 15:45:26",
                updated_at: "2016-07-28 15:45:27"
              },
              {
                id: 229,
                name: "跑腿排队",
                pid: 169,
                path: "-0-169-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 15:58:04",
                updated_at: "2016-07-28 15:58:05"
              },
              {
                id: 230,
                name: "理财咨询",
                pid: 169,
                path: "-0-169-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-13 16:42:53",
                updated_at: "2016-07-13 16:42:53"
              },
              {
                id: 231,
                name: "家政服务",
                pid: 169,
                path: "-0-169-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-13 16:42:52",
                updated_at: "2016-07-13 16:42:53"
              }
            ]
          },
          {
            id: 168,
            name: "家装/建筑",
            pid: 0,
            path: "-0-",
            pic: "attachment/sys/b4b4145efc34fd754497578fbbd295fa.png",
            sort: 3,
            choose_num: 0,
            created_at: "2016-07-29 17:33:22",
            updated_at: "2016-07-29 17:33:23",
            children_task: [
              {
                id: 204,
                name: "新房装修",
                pid: 168,
                path: "-0-168-",
                pic: "attachment\\sys\\9ced1f58b95cdd135e068c16fc227816.jpg",
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-29 17:33:11",
                updated_at: "2016-07-29 17:33:12"
              },
              {
                id: 205,
                name: "别墅设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-18 14:23:12",
                updated_at: "2016-07-18 14:23:13"
              },
              {
                id: 206,
                name: "小区规划",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-28 10:57:10",
                updated_at: "2020-09-03 09:30:28"
              },
              {
                id: 207,
                name: "商场装修",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 13:58:56",
                updated_at: "2016-07-28 13:58:53"
              },
              {
                id: 208,
                name: "导视系统设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 13:46:10",
                updated_at: "2016-07-28 13:46:11"
              },
              {
                id: 209,
                name: "软装搭配",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 13:59:19",
                updated_at: "2016-07-28 13:59:16"
              },
              {
                id: 210,
                name: "定制衣柜设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 13:37:13",
                updated_at: "2016-07-28 13:37:14"
              },
              {
                id: 211,
                name: "施工图设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:19:53",
                updated_at: "2016-07-28 14:19:54"
              },
              {
                id: 212,
                name: "二手房装修",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 13:59:33",
                updated_at: "2016-07-28 13:59:30"
              },
              {
                id: 213,
                name: "样板间设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:21:51",
                updated_at: "2016-07-28 14:21:52"
              },
              {
                id: 214,
                name: "办公装修设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:28:05",
                updated_at: "2016-07-28 14:28:06"
              },
              {
                id: 215,
                name: "店面装修设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:32:35",
                updated_at: "2016-07-28 14:32:36"
              },
              {
                id: 216,
                name: "软装配饰",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:30:10",
                updated_at: "2016-07-28 14:30:11"
              },
              {
                id: 217,
                name: "订制家具设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:31:12",
                updated_at: "2016-07-28 14:31:13"
              },
              {
                id: 218,
                name: "效果图制作",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:35:38",
                updated_at: "2016-07-28 14:35:39"
              },
              {
                id: 219,
                name: "智能家居系统规划",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:33:15",
                updated_at: "2016-07-28 14:33:16"
              },
              {
                id: 220,
                name: "精装房设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:50:34",
                updated_at: "2016-07-28 14:50:35"
              },
              {
                id: 221,
                name: "展会设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:45:48",
                updated_at: "2016-07-28 14:45:49"
              },
              {
                id: 222,
                name: "园林景观",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:56:20",
                updated_at: "2016-07-28 14:56:21"
              },
              {
                id: 223,
                name: "形象墙设计",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:55:19",
                updated_at: "2016-07-28 14:55:20"
              },
              {
                id: 224,
                name: "其他装修",
                pid: 168,
                path: "-0-168-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 14:55:52",
                updated_at: "2016-07-28 14:55:53"
              }
            ]
          },
          {
            id: 167,
            name: "宣传/设计",
            pid: 0,
            path: "-0-",
            pic: "attachment/sys/6b01a80bf09f7492a7a3de51f5c7ee76.png",
            sort: 4,
            choose_num: 0,
            created_at: "2016-07-20 17:18:17",
            updated_at: "2016-07-20 17:18:18",
            children_task: [
              {
                id: 186,
                name: "Logo设计",
                pid: 167,
                path: "-0-167-",
                pic: "attachment\\sys\\a246b6669fdb8502bb5fb068aab06b07.jpg",
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-27 13:55:36",
                updated_at: "2020-09-03 14:52:11"
              },
              {
                id: 187,
                name: "VI设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-27 16:57:12",
                updated_at: "2020-09-03 15:06:43"
              },
              {
                id: 188,
                name: "图标设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 17:59:06",
                updated_at: "2020-09-03 15:06:43"
              },
              {
                id: 189,
                name: "字体设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 18:16:04",
                updated_at: "2020-09-03 15:37:09"
              },
              {
                id: 190,
                name: "按钮图标设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-14 13:44:40",
                updated_at: "2020-09-03 15:41:15"
              },
              {
                id: 191,
                name: "文具设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 18:18:09",
                updated_at: "2020-09-03 15:38:43"
              },
              {
                id: 192,
                name: "服饰设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-14 22:08:29",
                updated_at: "2016-07-14 22:08:30"
              },
              {
                id: 193,
                name: "包装设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-26 10:02:36",
                updated_at: "2020-09-03 17:46:45"
              },
              {
                id: 194,
                name: "产品外观设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 8,
                created_at: "2016-07-26 10:03:59",
                updated_at: "2020-09-03 17:47:00"
              },
              {
                id: 195,
                name: "电路设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-26 14:00:54",
                updated_at: "2016-07-26 14:00:55"
              },
              {
                id: 196,
                name: "宣传册页",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-27 09:11:55",
                updated_at: "2016-07-27 09:11:55"
              },
              {
                id: 197,
                name: "横幅设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-27 16:22:42",
                updated_at: "2016-07-27 16:22:43"
              },
              {
                id: 198,
                name: "台历设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 10:37:50",
                updated_at: "2016-07-28 10:37:50"
              },
              {
                id: 199,
                name: "海报设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 09:14:37",
                updated_at: "2016-07-28 09:14:37"
              },
              {
                id: 200,
                name: "书籍封面设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 10:20:22",
                updated_at: "2016-07-28 10:20:22"
              },
              {
                id: 201,
                name: "插画设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 11:29:39",
                updated_at: "2016-07-28 11:29:47"
              },
              {
                id: 202,
                name: "排版设计",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 10:41:20",
                updated_at: "2016-07-28 10:41:20"
              },
              {
                id: 203,
                name: "电子书制作",
                pid: 167,
                path: "-0-167-",
                pic: null,
                sort: 0,
                choose_num: 6,
                created_at: "2016-07-28 10:44:17",
                updated_at: "2016-07-28 10:44:17"
              }
            ]
          },
          {
            id: 166,
            name: "网络营销",
            pid: 0,
            path: "-0-",
            pic: "attachment/sys/9864af741714485b7159d7b7ad324a26.png",
            sort: 5,
            choose_num: 0,
            created_at: "2016-07-27 14:01:20",
            updated_at: "2016-07-27 14:01:17",
            children_task: [
              {
                id: 174,
                name: "微店推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 8,
                created_at: "2016-07-22 10:00:49",
                updated_at: "2020-09-03 09:28:13"
              },
              {
                id: 175,
                name: "论坛推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-22 10:01:46",
                updated_at: "2020-09-03 09:24:05"
              },
              {
                id: 176,
                name: "软文发布",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-22 10:04:45",
                updated_at: "2020-09-03 09:24:07"
              },
              {
                id: 177,
                name: "搜索引擎优化",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-22 10:08:52",
                updated_at: "2020-09-03 14:24:10"
              },
              {
                id: 178,
                name: "发帖推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 10:56:51",
                updated_at: "2020-09-03 09:30:20"
              },
              {
                id: 179,
                name: "网站推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 10:59:17",
                updated_at: "2020-09-03 09:30:20"
              },
              {
                id: 180,
                name: "微博推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 15:14:26",
                updated_at: "2020-09-03 09:30:21"
              },
              {
                id: 181,
                name: "活动推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 17:37:58",
                updated_at: "2020-09-03 09:30:21"
              },
              {
                id: 182,
                name: "产品推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 15:16:43",
                updated_at: "2020-09-03 09:30:22"
              },
              {
                id: 183,
                name: "微博祝福",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-14 21:54:16",
                updated_at: "2020-09-03 15:09:09"
              },
              {
                id: 184,
                name: "新品促销",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 7,
                created_at: "2016-07-25 17:46:52",
                updated_at: "2020-09-03 14:39:28"
              },
              {
                id: 185,
                name: "店铺推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 0,
                choose_num: 8,
                created_at: "2016-07-25 17:42:12",
                updated_at: "2020-09-16 15:29:11"
              },
              {
                id: 171,
                name: "微信推广",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 1,
                choose_num: 7,
                created_at: "2016-07-22 09:52:40",
                updated_at: "2020-09-03 09:23:03"
              },
              {
                id: 172,
                name: "微信加粉",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 2,
                choose_num: 11,
                created_at: "2016-07-14 20:53:50",
                updated_at: "2016-07-14 20:53:50"
              },
              {
                id: 173,
                name: "微信投票",
                pid: 166,
                path: "-0-166-",
                pic: null,
                sort: 3,
                choose_num: 9,
                created_at: "2016-07-14 21:41:46",
                updated_at: "2016-07-14 21:41:47"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    onEditorBlur(quill) {
      // 失去焦点事件
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      // 获得焦点事件
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      // 准备编辑器
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      // 内容改变事件
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    // 转码
    escapeStringHTML(str) {
      str = str.replace(/&lt;/g, "<");
      str = str.replace(/&gt;/g, ">");
      return str;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>
<style scoped>
.top-panel {
  min-height: 75px;
  box-shadow: 1px 1px 15px rgba(229, 229, 229, 1);
}

.top-panel p:first-child {
  line-height: 40px;
  font-size: 20px;
  font-weight: 700;
  color: #151519;
  margin-top: 5px;
  text-align: left;
  margin: 0;
}

.top-panel p:last-child {
  line-height: 30px;
  font-size: 13px;
  font-weight: 400;
  color: #999;
  text-align: left;
  margin: 0;
}

.publish-project {
  padding: 24px 24px 12px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.publish-project .title-name input {
  border: 1px solid #e4e4e4;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  margin-top: 8px;
}
.publish-project >>> .el-form-item__label {
  text-align: left;
  float: none;
  font-size: 16px;
  font-weight: 700;
  color: #151519;
  line-height: 40px;
}

.publish-project >>> .application__btn .el-button {
  padding: 0 !important;
  width: 105px;
  height: 35px;
  line-height: 35px;
  margin: 0 8px 4px 0;
  font-size: 14px;
  color: #151519;
  border: 1px solid #f5f5f5;
}

.publish-project >>> .el-upload-dragger {
  height: 50px;
}

.publish-project >>> .el-icon-upload {
  font-size: 28px;
  float: left;
  margin: 0 16px 0 160px;
}

.publish-project >>> i {
  transform: rotate(1deg);
  color: #a3a3a3;
  font-size: 16px;
}

.publish-project >>> .el-upload__text {
  line-height: 50px;
  float: left;
  font-size: 13px;
  color: #999;
}
.publish-project >>> .ql-toolbar.ql-snow,
.publish-project >>> .ql-container.ql-snow {
  border: 1px solid #e4e4e4;
}
.publish-project >>> .ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0;
}
.publish-project .project-panel .title {
  font-size: 16px;
  font-weight: 700;
  color: #151519;
  line-height: 40px;
}
/* 工期与预算 */
.publish-project >>> .cycle-wrapper .el-form-item__content {
  width: 384px;
  height: 40px;
  margin: 0;
}
.publish-project >>> .cycle-wrapper .el-input {
  width: 292px;
}
.publish-project >>> .cycle-wrapper .el-input input {
  height: 40px;
  line-height: 40px;
  border: 1px solid #e4e4e4;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.publish-project >>> .cycle-wrapper .cycle-main {
  width: 92px;
  border-left: none;
  margin: 0;
}
/* 联系方式 */
.name-mobile >>> .el-form-item__content {
  width: 384px;
  margin: 8px 0 0;
}
.name-mobile >>> .el-input input {
  height: 40px;
  line-height: 40px;
  border: 1px solid #e4e4e4;
}
/* 折叠面板 */
.publish-project .drop-down {
  height: 50px;
  background-color: #f5f5f5;
  width: 900px;
  margin: 16px -24px 0;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.drop-down__main {
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.0980392156862745);
  padding: 24px;
}
.drop-down__main .title {
  justify-content: space-between;
}
.drop-down__main .title span:first-child {
  font-size: 16px;
  font-weight: 700;
  color: #151519;
  line-height: 40px;
}
.drop-down__main .title span:last-child {
  font-size: 13px;
  font-weight: 400;
  color: #999;
  line-height: 40px;
}
.content >>> .el-form-item__label {
  text-align: left;
}
/* 评估服务 */
.bond {
  box-sizing: border-box;
  padding: 20px 30px 20px 52px;
}
.project-add-bond__checked {
  padding: 35px 0 0 8px;
}
.project-add-bond__checked >>> .el-checkbox__inner {
  width: 25px !important;
  height: 25px !important;
}
.project-add-bond__checked >>> .el-checkbox__inner::after {
  border: 2px solid #fff !important;
  height: 14px !important;
  left: 8px !important;
  width: 6px !important;
  border-left: 0 !important;
  border-top: 0 !important;
}
.panel p {
  font-size: 13px;
  line-height: 1.6;
}
.panel .title {
  border: none;
  padding: 0;
}
.moneyBox {
  display: flex;
  align-items: baseline;
}
.moneyBox > div:first-child {
  margin-top: 15px;
  color: #f00;
  font-size: 14px;
}
.moneyBox > div:nth-child(2) {
  font-size: 14px;
  margin: 0 6px;
}
.moneyBox > div:nth-child(2) span {
  font-size: 28px;
  font-weight: 700;
}
.moneyBox > div:last-child {
  text-decoration: line-through;
  color: #ddd;
  font-size: 28px;
  font-style: italic;
}
/* 按钮 */
.project-btn {
  width: 100%;
  text-align: center;
}

.project-btn >>> .btn-200 {
  width: 200px;
  height: 40px;
}
.project-agreement {
  margin: 28px 0 56px;
  color: #666;
  font-size: 13px;
  text-align: center;
}
.advertising .panel {
  margin-bottom: 20px;
}
.advertising img {
  width: 100%;
}
</style>
