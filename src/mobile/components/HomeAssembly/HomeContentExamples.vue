<!-- 内容例子 -->
<template>
  <div id="HomeContentExamples">
    <div class="HomeContentExamples-item" v-for="(item,index) in ContentExamplesList" :key="index">
      <div class="item-logo">
        <img :src="item.imgs" alt />
      </div>
      <div class="item-Content">
        <p>{{item.title}}</p>
        <p>{{item.Price}}</p>
        <p>{{item.experience}}</p>
        <el-rate v-model="item.value" disabled text-color="#ff9900" score-template="{value}"></el-rate>
      </div>
      <div class="item-Introduce">
        <p>{{item.introduce}}</p>
      </div>
    </div>
  </div>
</template>
 <script>
export default {
  name: "HomeContentExamples",
  data() {
    return {
      ContentExamplesList: [
        {
          imgs: require("../../../assets/home/employers/8.png"),
          title: "发布项目总金额",
          Price: "￥3，280，000",
          experience: "众包体验",
          introduce:
            "汇集了来自 OpenStack社区、HP 架构师等 35 名资深开发者，为华为 65 个项目交付了高质量的开发成果",
          value: 5,
        },
        {
          imgs: require("../../../assets/home/employers/2.png"),
          title: "发布项目总金额",
          Price: "￥5，502，000",
          experience: "众包体验",
          introduce:
            "30 天内快速组建 45 人的开发顾问团队，并成功引入阿里、英特尔、微软等行业专家提供培训咨询服务",
          value: 5,
        },
        {
          imgs: require("../../../assets/home/employers/3.png"),
          title: "发布项目总金额",
          Price: "￥1，205，000",
          experience: "众包体验",
          introduce:
            "借助开源众包众多开发资源，采用并行开发模式，15 天内快速完成覆盖 11 类开发语言的 SDK 开发任务",
          value: 5,
        },
        {
          imgs: require("../../../assets/home/employers/4.png"),
          title: "发布项目总金额",
          Price: "￥750，000",
          experience: "众包体验",
          introduce:
            "7天时间通过开源众包快速对接近 200 名测试人员，高效完成了腾讯 Bugly 产品的测试优化任务",
          value: 5,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
#HomeContentExamples {
  margin-top: 0.5rem;
  .HomeContentExamples-item {
    display: flex;
    width: 85%;
    height: 18rem;
    font-size: 0.7rem;
    color: #6a7d8f;
    border: 1px #cccccc solid;
    flex-wrap: wrap;
    margin: 1rem auto;
    // padding: 1.5rem;
    box-shadow: 1px 1px 7px -2px;
    .item-logo {
      width: 100%;
      height: 4.5rem;
      text-align: center;
    }
    .item-Content {
      text-align: center;
      width: 90%;
      height: 8rem;
      border-top: 1px dashed #cccccc;
      border-bottom: 1px dashed #cccccc;
      margin: 0 auto;
      p {
        width: 100%;
        height: 1.8rem;
        line-height: 1.8rem;
      }
      p:nth-of-type(2) {
        font-weight: 600;
        font-size: 1.1rem;
        color: #000000;
      }
      i {
        color: rgb(241, 183, 74);
      }
    }
    .item-Introduce {
      width: 90%;
      height: 4.5rem;
      margin: 0 auto;
    }
  }
}
</style>