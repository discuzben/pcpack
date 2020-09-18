<!-- 九宫格 -->
<template>
  <div id="NineGongge">
    <h4>选择应用类型，快速发布</h4>
    <div class="NineGonggeList">
      <div class="NineGongge-item" v-for="(item,index) in NineGonggeList" :key="index">
        <img :src="item.src" alt />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NineGongge",
  data() {
    return {
      NineGonggeList: [
        {
          src: require("../../../assets/icon/app_type/437.png"),
          title: "网站开发",
        },
        {
          src: require("../../../assets/icon/app_type/434.png"),
          title: "HTML5应用",
        },
        {
          src: require("../../../assets/icon/app_type/433.png"),
          title: "APP开发",
        },
        {
          src: require("../../../assets/icon/app_type/435.png"),
          title: "微信小程序",
        },
        {
          src: require("../../../assets/icon/app_type/445.png"),
          title: "区块链",
        },
        {
          src: require("../../../assets/icon/app_type/446.png"),
          title: "人工智能",
        },
        {
          src: require("../../../assets/icon/app_type/447.png"),
          title: "大数据",
        },
        {
          src: require("../../../assets/icon/app_type/448.png"),
          title: "物联网",
        },
        {
          src: require("../../../assets/icon/app_type/449.png"),
          title: "云计算",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style scoped lang="less">
#NineGongge {
background-color: snow;
  width: 375px;
  height: 100%;
//   background: #cccccc;
  margin-top: 5rem;
  text-align: center;
  h4{
   
  }
  .NineGonggeList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
     padding: 1rem 0;
    .NineGongge-item {
      width: 6rem;
      height: 4rem;
      
      img{
          width: 2rem;
          height: 2rem;
      }
      p{
          font-size: 0.8rem;
      }
    }
  }
}
</style>
