<template>
  <div class="typeBox">
    <h2>您希望以哪种类型发布您的需求？</h2>
    <div class="typeContainer">
      <div class="typeItem">
        <router-link tag="a" :to="'/workbench/publish/reward/add'">
          <img
            class="typeIcon"
            src="@/assets/icon/app_type/pub-award.png"
            alt=""
          />
          <span class="typeTitle">悬赏</span>
          <span class="typeDesc"
            >适用于发布周期较短（1-5天）、需求明确单一的技术类问题或任务</span
          >
          <span class="typeDesc" style="padding-bottom: 51px"
            >特点：周期短、目标单一明确、一次性托管赏金、最优方案得赏、无发票要求、不支持签订项目合作协议</span
          >
        </router-link>
      </div>
      <div class="typeItem">
        <router-link tag="a" :to="'/workbench/publish/project/add'">
          <img
            class="typeIcon"
            src="@/assets/icon/app_type/pub-crowd.png"
            alt=""
          />
          <span class="typeTitle">项目</span>
          <span class="typeDesc"
            >适用于发布开发周期大于 3
            天及以上的网站、App、微信/小程序、企业应用等类型的软件需求</span
          >
          <span class="typeDesc" style="padding-bottom: 30px"
            >特点：项目合作协议保障、按阶段托管费用、验收满意后付款、项目管家全程管控、支持发票</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "typeSelect",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.typeBox {
  max-width: 1150px;
  margin: 0 auto;
}

h2 {
  font-size: 22px;
  text-align: center;
  margin: 30px auto;
}

.typeContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.typeItem {
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  width: 300px;
  min-height: 350px;

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.16);
  margin: 0px 30px;
}

.typeItem:hover {
  box-shadow: 0px 0px 10px #2093ff;
}

.typeIcon {
  display: block;
  width: 90px;
  margin: 40px auto;
}

.typeTitle {
  display: block;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.typeDesc {
  line-height: 22px;
  font-size: 13px;
  padding: 0 16px;
  display: block;
  text-align: left;
  margin-top: 16px;
}
</style>
