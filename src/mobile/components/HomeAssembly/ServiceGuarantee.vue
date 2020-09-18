<template>
  <div id="ServiceGuarantee">
    <div class="ServiceGuarantee-item" v-for="(item,index) in ServiceGuarantee" :key="index">
      <div class="item-logo">
        <img :src="item.imgs" alt />
        <p>{{item.title1}}</p>
      </div>
      <div class="item-Content">
        <h5>{{item.title2}}</h5>
        <p>{{item.conter1}}</p>
        <h5>{{item.title3}}</h5>
        <p>{{item.title3}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceGuarantee",
  data() {
    return {
      ServiceGuarantee: [
        {
          imgs: require("../../../assets/home/v2/sy_jisupipei.png"),
          title1: "极速匹配，精准对接",
          title2: "·免费需求梳理",
          title3: "·精准撮合匹配",
          conter1: "不懂软件别担心，项目管家来帮你",
          conter2: "信用技能全定位，精准匹配不操心",
        },
        {
          imgs: require("../../../assets/home/v2/sy_zijinanquan.png"),
          title1: "资金托管，安心无忧",
          title2: "阶段托管费用",
          title3: "项目资金零压力，托管冻结零风险",
          conter1: "电子合同保障",
          conter2: "电子合同数字签名，法律权益保障",
        },
        {
          imgs: require("../../../assets/home/v2/icon-housekeeper.png"),
          title1: "项目管家，全程管控",
          title2: "贴心管家服务",
          title3: "项目管家1对1，需求验收全管控",
          conter1: "专属客服服务",
          conter2: "平台客服全天候，服务体验百分百",
        },
        {
          imgs: require("../../../assets/home/v2/more.svg"),
          title1:"更多专业服务",
          title2: "发票开具服务",
          title3: "资金交易证明",
          conter1: "争议纠纷仲裁",
          conter2: "代码托管服务",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
#ServiceGuarantee {
  margin-top: 0.5rem;
  .ServiceGuarantee-item {
    display: flex;
    width: 85%;
    height: 17rem;
    font-size: 0.7rem;
    color: #303133;
    border: 1px #cccccc solid;
    flex-wrap: wrap;
    margin: 1rem auto;
    box-shadow: 1px 1px 7px -2px;
    .item-logo {
      width: 100%;
      height: 6rem;
      text-align: center;
      img{
          width: 4.95rem;
          height: 4.5rem;
      }
      p{
          font-size: 1.1rem;
          font-weight: bold;
      }
    }
    .item-Content {
      width: 90%;
      height: 8rem;
      border-top: 1px dashed #cccccc;
      margin: 0 auto;
      h5 {
        font-size: 0.9rem;
        color: #ff6633;
        height: 2rem;
        line-height: 2rem;
      }
      p {
        width: 100%;
        height: 1.8rem;
        line-height: 1.8rem;
        height: 2rem;
        line-height: 2rem;
      }
    }
    .ServiceGuarantee-item:last-child{
        font-size: 0.9rem;
        color: #ff6633;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        h5,p{
            width: 50%;
            height: 2rem;
            font-weight: bold;
        }
    }
  }
}
</style>