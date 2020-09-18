<template>
  <div id="Home">
    <HomeHeadBar />
    <NineGongge />
    <div class="Title">
      <h4>他们也在使用众包</h4>
      <p>360度全方位专业服务，已被众多知名企业认可</p>
    </div>
    <HomeContentExamples />
      <h4>全方位服务保障</h4>
    <ServiceGuarantee />
  </div>
</template>
<script>
import "../base/base.css";
import HomeHeadBar from "./HomeAssembly/HomeHeadBar";
import NineGongge from "./HomeAssembly/NineGongge";
import HomeContentExamples from "./HomeAssembly/HomeContentExamples";
import ServiceGuarantee from "./HomeAssembly/ServiceGuarantee";

export default {
  name: "Home",
  components: {
    HomeHeadBar,
    NineGongge,
    HomeContentExamples,
    ServiceGuarantee,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped lang="less">
#Home {
  //   background: #ccc;
  width: 100%;
  height: 100%;
  .Title {
    text-align: center;
    p {
      height: 2rem;
      font-size: .7rem;
    }
  }
  h4{
      height: 2rem;
      color: #48576A;
      text-align: center;
    }
}
</style>
