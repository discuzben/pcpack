<template>
  <div class="projectBox">
    <Header :bg="'black'" />
    <div class="w">
      <!-- banner -->
      <div class="bannerBox">
        <el-carousel
          :interval="5000"
          arrow="always"
          height="100px"
          indicator-position="none"
        >
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img class="bannerImg" :src="item.src" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="mainBox">
        <el-row>
          <!-- 列表 -->
          <el-col :span="18">
            <!-- 搜索栏 -->
            <div id="searchBox" class="panel">
              <el-input
                maxlength="20"
                minlength="2"
                placeholder="输入关键字词, 开始检索您感兴趣的项目，例如：网站、微信"
                v-model="taskType.taskName"
              >
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="getTaskList"
                ></el-button>
              </el-input>
            </div>
            <!-- 类型栏 -->
            <div class="search__main">
              <div class="sc-box">
                <!-- 应用类型 -->
                <div class="search__item">
                  <div class="item__left">
                    <div class="search__title">应用类型:</div>
                  </div>
                  <div class="item__right">
                    <div>
                      <span
                        :class="['btn__item', { active: categoryCheck == 0 }]"
                        @click="selectCategory('all', 0)"
                      >
                        不限
                      </span>
                      <span
                        :class="[
                          'btn__item',
                          { active: categoryCheck == item.id }
                        ]"
                        v-for="item in typeOptions.application"
                        :key="'categoryAll' + item.id"
                        @click="selectCategory('all', item.id)"
                      >
                        {{ item.name }}
                      </span>
                    </div>

                    <div
                      v-show="categoryCheck == item.id"
                      v-for="item in typeOptions.application"
                      :key="item.id"
                    >
                      <span
                        :class="[
                          'btn__item',
                          { active: taskType.cate_id == childItem.id }
                        ]"
                        v-for="childItem in item.children"
                        :data-id="childItem.id"
                        :key="`child_${childItem.id}`"
                        @click="selectCategory('child', childItem.id)"
                      >
                        {{ childItem.name }}
                      </span>
                    </div>
                  </div>
                </div>
                <!-- 项目类型 -->
                <div class="search__item">
                  <div class="item__left">
                    <div class="search__title">项目类型:</div>
                  </div>
                  <div class="item__right">
                    <span
                      :class="['btn__item', { active: !taskType.type }]"
                      @click="selectTaskType(0)"
                    >
                      不限
                    </span>
                    <span
                      :class="[
                        'btn__item',
                        { active: taskType.type == item.id }
                      ]"
                      v-for="item in typeOptions.project"
                      :key="item.id"
                      @click="selectTaskType(item.id)"
                    >
                      {{ item.name }}
                    </span>
                  </div>
                </div>

                <!-- <div class="search__item">
                  <div class="item__left">
                    <div class="search__title">任务状态:</div>
                  </div>
                  <div class="item__right">
                    <span
                      :class="['btn__item', { active: taskType.status == 0 }]"
                      @click="selectStatus(0)"
                    >
                      不限
                    </span>
                    <span
                      :class="[
                        'btn__item',
                        { active: taskType.status == item.id }
                      ]"
                      v-for="item in typeOptions.status"
                      :key="item.id"
                      @click="selectStatus(item.id)"
                    >
                      {{ item.name }}
                    </span>
                  </div>
                </div> -->
                <!-- 地区限制 -->
                <!-- <div class="search__item">
                  <div class="item__left">
                    <div class="search__title">地区限制:</div>
                  </div>
                  <div class="item__right">
                    <span class="btn__item active"> 全部 </span>
                    <span
                      class="btn__item btn__item-money"
                      v-for="item in typeOptions.city"
                      :key="item.id"
                    >
                      {{ item.name }}
                    </span>
                  </div>
                </div> -->
                <!-- 金额范围 -->
                <!-- <div class="search__item">
                  <div class="item__left">
                    <div class="search__title">金额范围:</div>
                  </div>
                  <div class="item__right">
                    <span class="btn__item active"> 不限 </span>
                    <span
                      class="btn__item btn__item-money"
                      v-for="(item, index) in typeOptions.money"
                      :key="index"
                    >
                      {{ item }}
                    </span>
                  </div>
                </div> -->
                <!-- 排序 -->
                <div class="search__item search__sort">
                  <span class="search__title sort__title">排序：</span>
                  <span
                    :class="[
                      'sort__btn',
                      taskType.desc == 1 ? 'sort__btn0' : 'sort__btn1'
                    ]"
                    @click="sort(1)"
                    >综合排序</span
                  >
                  <span class="sort__icon">|</span>
                  <span
                    :class="[
                      'sort__btn',
                      taskType.desc == 2 ? 'sort__btn0' : 'sort__btn1'
                    ]"
                    @click="sort(2)"
                    >发布时间</span
                  >
                  <span class="sort__icon">|</span>
                  <span
                    :class="[
                      'sort__btn',
                      taskType.desc == 3 ? 'sort__btn0' : 'sort__btn1'
                    ]"
                    @click="sort(3)"
                    >稿件数</span
                  >
                  <span class="sort__icon">|</span>
                  <span
                    :class="[
                      'sort__btn',
                      taskType.desc == 4 ? 'sort__btn0' : 'sort__btn1'
                    ]"
                    @click="sort(4)"
                    >赏金</span
                  >
                </div>
              </div>
            </div>
            <!-- 列表栏 -->
            <div class="project-list" v-loading="taskListLoad">
              <!-- 列表项 -->
              <el-row
                class="row-shadow"
                v-for="item in taskList.data"
                :key="item.id"
              >
                <el-col :span="24">
                  <img
                    class="project-recommend__Image"
                    src="../../assets/img/member.png"
                    alt=""
                  />
                  <el-row>
                    <!-- 图标 -->
                    <el-col :span="5">
                      <router-link tag="a" to="/">
                        <img
                          v-lazy="require('../../assets/img/_qukuailian_1.png')"
                          alt=""
                          class="project-img"
                        />
                      </router-link>
                    </el-col>
                    <!-- 内容 -->
                    <el-col :span="19">
                      <!-- 标题价格 -->
                      <el-row
                        type="flex"
                        justify="space-between"
                        style="min-height: 40px"
                      >
                        <span class="title">
                          <router-link tag="a" to="/">
                            {{ item.title }}
                          </router-link>
                        </span>
                        <span class="money">￥{{ item.bounty }}</span>
                      </el-row>
                      <!-- 类型 -->
                      <el-row>
                        <el-col :span="18">
                          <div class="tags">
                            <span>{{ item.name }}</span>

                            <span>
                              <b>{{ item.delivery_deadline }}&nbsp;完成</b>
                            </span>
                          </div>
                        </el-col>
                        <el-col :span="6"></el-col>
                      </el-row>
                      <!-- 其他 -->
                      <div class="other">
                        <el-row>
                          <!-- 技能 -->
                          <el-col :span="5">
                            <span class="skills">技能要求：</span>
                          </el-col>
                          <el-col :span="19" style="text-align: right">
                            <span class="bidding"
                              >参与 <b>{{ item.delivery_count }}</b> 人</span
                            >
                            <span class="hr">|</span>
                            <!-- <span class="bidding"
                              >剩余 <b>1</b> 个免费名额</span
                            >
                            <span class="hr">|</span>
                            <span class="bidding"><b>10</b> 个插队名额</span>
                            <span class="hr">|</span> -->
                            <span class="bidding"
                              >发布于<span style="margin-left: 8px">{{
                                item.created_at
                              }}</span></span
                            >
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <!-- 无数据 -->
              <data-empty
                v-if="taskList.length == 0 ? false : !taskList.data.length"
              ></data-empty>
              <!-- 分页 -->
              <div class="pagination">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :page-size="15"
                  :total="taskList.total"
                  :hide-on-single-page="true"
                  @current-change="pageChange"
                >
                </el-pagination>
              </div>
            </div>
          </el-col>
          <!-- 侧边栏 -->
          <el-col :span="6" style="padding-left: 16px">
            <!-- 按钮 -->
            <div class="panel publish__submit">
              <router-link tag="button" to="/workbench"
                >免费发布需求</router-link
              >
            </div>
            <!-- 加入会员 -->
            <div class="developers panel">
              <router-link tag="div" to="/">
                <img src="../../assets/img/member2.jpg" alt="" />
              </router-link>
            </div>
            <!-- 最近成交 -->
            <div class="panel three-info">
              <div class="three-info__title">最新成交</div>
              <div id="box">
                <ul id="con1" :class="{ anim: ClinchListAnimation }">
                  <li v-for="item in dealList" :key="item.id">
                    <div class="main-info top-info">
                      <p>{{ item.title }}</p>
                      <span>{{ item.status == 1 ? "中标" : "未中标" }}</span>
                    </div>
                    <div class="main-info bot-info">
                      ￥{{ item.show_cash }}
                      <p v-html="item.desc"></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 投诉 -->
            <div class="panel developers">
              <router-link tag="a" to="/" class="logo-falsh">
                <div class="developer-bannner white-light">
                  <img src="../../assets/img/img.jpg" alt="" />
                </div>
              </router-link>
            </div>
            <!-- 开发商 -->
            <div class="panel developers">
              <router-link tag="a" to="/" class="logo-falsh">
                <div class="developer-bannner">
                  <img src="../../assets/img/img4.jpg" alt="" />
                </div>
              </router-link>
            </div>
            <!-- 服务之星 -->
            <service-star></service-star>
            <!-- 平台信息 -->
            <div class="info panel">
              <div class="info__wx">
                <div class="wx__img">
                  <img src="" alt="" />
                </div>
                <div class="wx__text">
                  <h5>关注平台微信公众号</h5>
                  <p>随时随地发布需求、浏览与竞标项目机会（完善中）</p>
                </div>
              </div>
              <div class="info__item">
                <span class="info__item__title">
                  <img src="../../assets/icon/qq.png" alt="" />
                  官方接包QQ群
                </span>
                <span class="info__item__text">xxx xxx xxx</span>
              </div>
              <div class="info__item">
                <span class="info__item__title">
                  <img src="../../assets/icon/tel.png" alt="" />
                  客服电话
                </span>
                <span class="info__item__text">xxx-xxxx-xxx</span>
              </div>
              <div class="info__item">
                <span class="info__item__title">
                  <img src="../../assets/icon/email.png" alt="" />
                  官方邮箱
                </span>
                <span class="info__item__text">zbkf@oschina.cn</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/pc/components/Header";
import Footer from "@/pc/components/Footer";
import DataEmpty from "@/pc/components/noData";
import ServiceStar from "@/pc/components/ServiceStar";
export default {
  components: {
    Header,
    Footer,
    DataEmpty,
    ServiceStar
  },
  name: "project",
  data() {
    return {
      bannerList: [
        {
          id: "0",
          src: require("@/assets/img/vipTip.png")
        },
        {
          id: "1",
          src: require("@/assets/img/wanglai.png")
        },
        {
          id: "2",
          src: require("@/assets/img/yiwenge.jpg")
        },
        {
          id: "3",
          src: require("@/assets/img/zhongke.png")
        }
      ],
      typeOptions: {
        application: [
          {
            id: "170",
            name: "软件开发",
            children: [
              {
                id: "232",
                name: "程序开发"
              },
              {
                id: "233",
                name: "编写脚本"
              },
              {
                id: "234",
                name: "软件皮肤"
              },
              {
                id: "235",
                name: "插件开发"
              },
              {
                id: "236",
                name: "游戏开发"
              },
              {
                id: "237",
                name: "程序功能开发"
              },
              {
                id: "238",
                name: "软件美工"
              },
              {
                id: "239",
                name: "开发文档编写"
              },
              {
                id: "240",
                name: "功能完善"
              }
            ]
          },
          {
            id: "169",
            name: "生活服务",
            children: [
              { id: "225", name: "市场调查" },
              { id: "226", name: "帮我投票" },
              { id: "227", name: "数据导入" },
              { id: "228", name: "心理咨询" },
              { id: "229", name: "跑腿排队" },
              { id: "230", name: "理财咨询" },
              { id: "231", name: "家政服务" }
            ]
          },
          {
            id: "168",
            name: "家装/建筑",
            children: [
              { id: "204", name: "新房装修" },
              { id: "205", name: "别墅设计" },
              { id: "206", name: "小区规划" },
              { id: "207", name: "商场装修" },
              { id: "208", name: "导视系统设计" },
              { id: "209", name: "软装搭配" },
              { id: "210", name: "定制衣柜设计" },
              { id: "211", name: "施工图设计" },
              { id: "212", name: "二手房装修" },
              { id: "213", name: "样板间设计" },
              { id: "214", name: "办公装修设计" },
              { id: "215", name: "店面装修设计" },
              { id: "216", name: "软装配饰" },
              { id: "217", name: "订制家具设计" },
              { id: "218", name: "效果图制作" },
              { id: "219", name: "智能家居系统规划" },
              { id: "220", name: "精装房设计" },
              { id: "221", name: "展会设计" },
              { id: "222", name: "园林景观" },
              { id: "223", name: "形象墙设计" },
              { id: "224", name: "其他装修" }
            ]
          },
          {
            id: "167",
            name: "宣传/设计",
            children: [
              { id: "186", name: "Logo设计" },
              { id: "187", name: "VI设计" },
              { id: "188", name: "图标设计" },
              { id: "189", name: "字体设计" },
              { id: "190", name: "按钮图标设计" },
              { id: "191", name: "文具设计" },
              { id: "192", name: "服饰设计" },
              { id: "193", name: "包装设计" },
              { id: "194", name: "产品外观设计" },
              { id: "195", name: "电路设计" },
              { id: "196", name: "宣传册页" },
              { id: "197", name: "横幅设计" },
              { id: "198", name: "台历设计" },
              { id: "199", name: "海报设计" },
              { id: "200", name: "书籍封面设计" },
              { id: "201", name: "插画设计" },
              { id: "202", name: "排版设计" },
              { id: "203", name: "电子书制作" }
            ]
          },
          {
            id: "166",
            name: "网络营销",
            children: [
              { id: "174", name: "微店推广" },
              { id: "175", name: "论坛推广" },
              { id: "176", name: "软文发布" },
              { id: "177", name: "搜索引擎优化" },
              { id: "178", name: "发帖推广" },
              { id: "179", name: "网站推广" },
              { id: "180", name: "微博推广" },
              { id: "181", name: "活动推广" },
              { id: "182", name: "产品推广" },
              { id: "183", name: "微博祝福" },
              { id: "184", name: "新品促销" },
              { id: "185", name: "店铺推广" },
              { id: "171", name: "微信推广" },
              { id: "172", name: "微信加粉" },
              { id: "173", name: "微信投票" }
            ]
          }
        ],
        project: [
          {
            id: "1",
            name: "悬赏任务"
          },
          {
            id: "3",
            name: "招标任务"
          }
        ],
        status: [
          { id: "1", name: "工作中" },
          { id: "12", name: "已完成" }
        ],
        city: [
          { id: "1", name: "北京市" },
          { id: "2", name: "天津市" },
          { id: "3", name: "河北省" },
          { id: "4", name: "山西省" },
          { id: "5", name: "内蒙古" },
          { id: "6", name: "辽宁省" },
          { id: "7", name: "吉林省" },
          { id: "8", name: "黑龙江省" },
          { id: "9", name: "上海市" },
          { id: "10", name: "江苏省" },
          { id: "11", name: "浙江省" },
          { id: "12", name: "安徽省" },
          { id: "13", name: "福建省" },
          { id: "14", name: "江西省" },
          { id: "15", name: "山东省" },
          { id: "16", name: "河南省" },
          { id: "17", name: "湖北省" },
          { id: "18", name: "湖南省" },
          { id: "19", name: "广东省" },
          { id: "91137", name: "请选择省份" },
          { id: "21", name: "海南省" },
          { id: "22", name: "重庆市" },
          { id: "23", name: "四川省" },
          { id: "24", name: "贵州省" },
          { id: "25", name: "云南省" },
          { id: "26", name: "西藏" },
          { id: "27", name: "陕西省" },
          { id: "28", name: "甘肃省" },
          { id: "29", name: "青海省" },
          { id: "30", name: "宁夏" },
          { id: "31", name: "新疆" },
          { id: "32", name: "台湾省" },
          { id: "33", name: "香港" },
          { id: "34", name: "澳门" },
          { id: "35", name: "海外" },
          { id: "36", name: "其他" }
        ],
        money: [
          "5000以下",
          "5000-10000",
          "10000-50000",
          "50000-100000",
          "1000000-5000000",
          "500000及以上"
        ]
      },
      categoryCheck: 0,
      taskListLoad: false,
      taskType: {
        cate_id: "", //应用类型
        type: "", //项目类型
        page: 1,
        desc: "", //排序 1综合排序 2发布时间 3稿件数 4赏金
        taskName: "" //搜索内容
      },
      currentPage: 1, //当前页
      ClinchListAnimation: false,
      searchContent: "", //搜索内容
      taskList: [], //任务列表
      dealList: [], //成交记录列表
      serveStar: [] //服务之星列表
    };
  },
  methods: {
    getTaskList() {
      let _this = this;
      _this.taskListLoad = true;
      _this.$axios.post("tasks", _this.taskType).then(res => {
        console.log(res);
        _this.taskListLoad = false;
        if (res.data.code == 1000) {
          _this.taskList = res.data.data;
        }
      });
    },
    clinchList() {
      //侧边栏滚动
      let _this = this;
      _this.ClinchListAnimation = true;
      setTimeout(() => {
        _this.dealList.push(_this.dealList.shift());
        _this.ClinchListAnimation = false;
      }, 2000);
    },
    searchTask() {
      //搜索
      this.taskType.page = 1;
      this.getTaskList();
    },
    selectCategory(type, id) {
      //应用类型改变
      console.log(type);
      if (type == "all") {
        this.categoryCheck = id;
        if (id == 0) {
          this.taskType.cate_id = "";
          this.taskType.page = 1;
          this.getTaskList();
        }
      } else {
        this.taskType.cate_id = id;
        this.taskType.page = 1;
        this.getTaskList();
      }
    },
    selectTaskType(id) {
      //项目类型改变
      this.taskType.type = id == 0 ? "" : id;
      this.taskType.page = 1;
      this.getTaskList();
    },
    sort(type) {
      //排序
      this.taskType.desc = type;
      this.taskType.page = 1;
      this.getTaskList();
    },
    pageChange(val) {
      // console.log(val);
      this.taskType.page = val;
      this.getTaskList();
    }
  },

  created() {
    this.$axios.post("getActive").then(res => {
      //获取最新成交记录
      let data = res.data;
      if (data.code == 1000) {
        this.dealList = data.data.active;
      } else {
        console.log(data.message);
      }
    });
    //获取任务列表
    this.$axios.post("tasks").then(res => {
      if (res.data.code == 1000) {
        let task = res.data.data;
        this.taskList = task;
      }
    });
  },
  mounted() {
    setInterval(this.clinchList, 4000);
  }
};
</script>
<style lang="less" scoped>
.projectBox {
  padding-top: 80px;
}
.bannerBox {
  width: 100%;
  margin-bottom: 16px;
}
.bannerImg {
  width: 100%;
  height: 100%;
}
.mainBox {
  width: 100%;
}
#searchBox {
  height: 50px;
  //   line-height: 50px;
  & /deep/ .el-input__inner {
    font-size: 14px;
    padding-left: 16px;
    height: 50px;
    //   line-height: 50px;
    border-radius: 3px;
    border: none;
  }
  &/deep/ .el-input-group__append {
    background: #1890ff;
    border: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 115px;
    padding: 0px;
  }
  &/deep/ .el-input-group__append button {
    height: 50px;
    border: none;
    background: transparent;
    margin: 0px auto;
    width: 100%;
    border-radius: 0;
  }
  & /deep/.el-icon-search {
    font-size: 28px;
    color: #fff;
  }
}
// 搜索类型
.search__main {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  border-radius: 3px;
  .sc-box {
    width: 100%;
    padding: 16px 10px 0 16px;
    box-sizing: border-box;
  }
  .search__item {
    overflow: hidden;
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-start;
    .item__left {
      width: 10%;
    }
    .item__right {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      align-self: center;
      font-size: 12px;
      flex-wrap: wrap;
      margin-right: -5px;
    }

    .btn__item {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      text-align: center;
      margin: 0px 7px 10px 0;
      cursor: pointer;
      min-width: 74px;
      border-radius: 3px;
      border: solid 1px transparent;
      font-size: 13px;
      color: #999;
    }
    .btn__item-money {
      padding: 0 5px;
      margin-right: 13px !important;
    }
    .active {
      color: #fff;
      background-color: #1890ff;
      border-color: #1890ff;
    }
  }
  .search__title {
    display: inline-block;
    margin: 0;
    font-size: 14px;
    line-height: 28px;
    color: #151519;
  }
  .search__sort {
    border-top: 1px dashed #efefef;
    margin: 0 !important;
    height: 56px;
    display: flex;
    align-content: center;
    align-items: center;
  }
  .sort__title {
    vertical-align: middle;
    padding-right: 16px;
  }
  .sort__btn {
    color: #333;
    font-size: 14px;
    vertical-align: middle;
    cursor: pointer;
  }
  .sort__btn0 {
    color: #f00;
  }
  .sort__icon {
    padding: 0 16px;
    color: #ededed;
  }
}
// 列表
.project-list {
  & > .el-row {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 16px 16px;
    margin: 16px 0px;
  }
  .row-shadow {
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px 0 rgba(206, 210, 214, 0.6);
    transition: all 0.2s;
  }
  .project-img {
    width: 150px;
    height: 110px;
    min-width: 35px;
    min-height: 35px;
  }
  .title {
    font-size: 18px;
    color: black;
    font-weight: 700;
  }
  .money {
    color: #f00;
    font-size: 16px;
    font-weight: 400;
  }
  .tags {
    display: inline-flex;
    justify-content: flex-start;
    width: 100%;
    span {
      display: inline-block;
      max-width: 160px;
      min-width: 40px;
      background: rgba(245, 245, 245, 1);
      border-radius: 3px;
      text-align: center;
      height: 24px;
      line-height: 24px;
      font-size: 13px;
      margin-right: 8px;
      padding: 0px 10px;
      margin-bottom: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: keep-all;
      color: #666;
    }
  }
  .other {
    margin-top: 5px;
    .skills {
      overflow: hidden;
      content: "";
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      font-size: 14px;
      color: #999;
      height: 30px;
      line-height: 30px;
      display: inline-block;
    }
    .bidding {
      height: 30px;
      line-height: 30px;
      display: inline-block;
      font-size: 14px;
      color: #999;
    }
    .hr {
      height: 30px;
      padding: 0 10px;
      color: #efefef;
    }
  }
  .project-recommend__Image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  // 分页
  .pagination {
    clear: both;
    line-height: 50px;
    margin-top: 20px;
    text-align: right;
  }
}
// 侧边栏
// 按钮
.publish__submit {
  button {
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    border-radius: 3px;
    font-size: 16px;
    background-color: #1890ff;
    color: #fff;
    cursor: pointer;
    box-shadow: none;
    border: none;
  }
}
.developers {
  margin-top: 16px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.three-info {
  margin-top: 16px;
  .three-info__title {
    padding: 10px 0 4px 0;
    font-size: 14px;
    border-bottom: 2px solid #1890ff;
    width: 80px;
    margin-left: 8px;
  }
}
#box {
  height: 253px;
  overflow: hidden;
  padding-left: 10px;
  margin-top: 10px;
  li {
    list-style: none;
    height: 90px;
    .main-info {
      margin-right: 10px;
      text-align: left;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      font-size: 14px;
      p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 200px;
      }
      span {
        color: #1890ff;
      }
    }
    .top-info {
      background: #f1f3f4;
      border-radius: 4px;
      color: #151519;
      padding: 6px;
    }
    .bot-info {
      margin-top: 10px;
      padding-bottom: 10px;
      color: #f00;
      border-bottom: 1px dashed #8c8c8c;
      p {
        color: #151519;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100px;
        text-align: right;
      }
      span {
        color: #151519;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100px;
        text-align: right;
      }
    }
  }
}
.anim {
  transition: all 2s;
  margin-top: -90px;
}
.developer-banner {
  width: 100%;
}
.white-light {
  position: relative;
  // &:before {
  //   content: "";
  //   position: absolute;
  //   left: -665px;
  //   top: -460px;
  //   width: 280px;
  //   height: 15px;
  //   background-color: #fff;
  //   filter: blur(10px);
  //   transform: rotate(-45deg);
  //   animation: all 1s ease-in 1s infinite;
  // }
}

// 平台信息
.info {
  width: 100%;
  height: 266px;
  padding: 10px;
  background-color: #fff;
  margin-top: 20px;
  box-sizing: border-box;
  .info__wx {
    overflow: hidden;
    text-align: center;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .wx__img {
      width: 80px;
      height: 80px;
      border: 1px solid;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .wx__text {
      width: 180px;
      padding: 0 5px;
      h5 {
        font-size: 15px;
        font-weight: 700;
        line-height: 31px;
      }
      p {
        font-size: 13px;
        font-weight: 400;
        line-height: 23px;
      }
    }
  }
  .info__item {
    padding: 15px 0;
    border-top: 1px dashed #efefef;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    .info__item__title {
      display: flex;
      align-items: center;
      align-items: center;
      font-size: 13px;
      color: #999;
      img {
        margin-right: 10px;
      }
    }
    .info__item__text {
      font-size: 16px;
      color: #151519;
      font-weight: 700;
    }
  }
}
</style>
