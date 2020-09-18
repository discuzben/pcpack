<template>
  <div class="applicationTypeBox w">
    <div class="panel">
      <div class="title">选择一个符合您需求的应用类型</div>
      <div class="content">
        <div class="apps-box">
          <div class="app-item selected">
            <div class="app-icon"><img src="@/assets/icon/app_type/433.png" alt=""></div> <span class="app-name">移动应用</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/434.png" alt=""></div> <span class="app-name">H5应用</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/435.png" alt=""></div> <span class="app-name">微信应用</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/436.png" alt=""></div> <span class="app-name">企业应用</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/437.png" alt=""></div> <span class="app-name">WEB应用</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/438.png" alt=""></div> <span class="app-name">工具应用</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/439.png" alt=""></div> <span class="app-name">桌面应用</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/440.png" alt=""></div> <span class="app-name">嵌入式应用</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/441.png" alt=""></div> <span class="app-name">游戏开发</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/442.png" alt=""></div> <span class="app-name">设计</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/443.png" alt=""></div> <span class="app-name">培训咨询</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/445.png" alt=""></div> <span class="app-name">区块链</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/446.png" alt=""></div> <span class="app-name">人工智能</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/447.png" alt=""></div> <span class="app-name">大数据</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/448.png" alt=""></div> <span class="app-name">物联网</span>
          </div>
          <div class="app-item">
            <div class="app-icon"><img src="@/assets/icon/app_type/449.png" alt=""></div> <span class="app-name">云计算</span>
          </div>
        </div>
        <div class="btn" style="margin-top: 20px">
          <el-button type="primary" @click="next()">下一步，快速完善需求信息</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    name: 'apps',
    data() {
      return {}
    },
    methods: {
      next(){
        this.$router.push('/workbench/publish/reward/add')
      }
    }
  }
</script>

<style scoped>
  /* 应用类型 */
  .applicationTypeBox {
    margin: 20px auto;
    width: 1150px;
  }

  .panel {
    width: 100%;
    background: #fff;
    box-shadow: 0 0 5px 1px #efebeb;
    border-radius: 3px;
  }

  .panel .title {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #efefef;
    padding: 0 0 0 16px;
    font-size: 16px;
    font-weight: 700;
    color: #151519;
    text-align: left;
  }

  .panel .content {
    padding: 16px;
    min-height: 360px;
  }

  .apps-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0px -10px;
  }

  .apps-box .app-item {
    display: flex;
    align-items: center;
    align-content: center;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, .16);
    cursor: pointer;
    border-radius: 3px;
    min-width: 200px;
    width: 207px;
    margin: 0px 10px;
    margin-bottom: 16px;
    padding: 10px 0px;
  }

  .apps-box .app-item .app-icon {
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    padding: 12px 10px;
    border-radius: 3px 0px 0px 3px;
  }

  .apps-box .app-item .app-icon img {
    height: 40px;
    width: 40px;
    border: none;
    display: block;
  }

  .selected {
    color: #fff !important;
    background-color: #63b3ff !important;
  }

  .apps-box .app-item .app-name {
    display: inline-block;
    text-align: center;
    margin: 12px 0px;
    font-size: 15px;
  }
  .btn{
     text-align: center;
  }
</style>
