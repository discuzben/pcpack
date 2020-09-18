<template>
  <div id="footerBox">
    <div class="footerContainer">
      <!-- 列表 -->
      <div class="contentBox">
        <ul class="contentlist">
          <li class="listItem listTitle">我有需求</li>
          <li class="listItem"><a href="">发布需求</a></li>
          <li class="listItem"><a href="">发包宝典</a></li>
          <li class="listItem"><a href="">发包须知</a></li>
          <li class="listItem"><a href="">平台自营服务</a></li>
        </ul>
        <ul class="contentlist">
          <li class="listItem listTitle">我有技术</li>
          <li class="listItem"><a href="">成为开发者</a></li>
          <li class="listItem"><a href="">接包宝典</a></li>
          <li class="listItem"><a href="">接包须知</a></li>
        </ul>
        <ul class="contentlist">
          <li class="listItem listTitle">帮助中心</li>
          <li class="listItem"><a href="">新手指南</a></li>
          <li class="listItem"><a href="">常见问题</a></li>
          <li class="listItem"><a href="">规则中心</a></li>
          <li class="listItem"><a href="">意见建议反馈</a></li>
        </ul>
      </div>
      <!-- 售后 -->
      <div class="afterSales">
        <ul>
          <li>服务与支持</li>
          <li>xxx-xxxx-xxx</li>
          <li>周一至周日 08:00-23:00</li>
          <li>官方接包QQ群: <span>576935158</span></li>
          <li>官方邮箱: <a href="">xxx@163.com</a> </li>
        </ul>
        <div class="other">
          <img src="../../assets/footer-icon.png" alt="">
          <img src="../../assets/footer-icon1.png" alt="">
        </div>
      </div>
    </div>
    <div class="footerBottom">
      <div class="bottomLeft">
        <a href=""><img src="" alt=""></a>
        <span>让软件开发更加快捷、高效</span>
      </div>
      <p class="bottomRight">
        Copyright©2018 xxxxx平台
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footerr",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  #footerBox {
    width: 100%;
    margin-top: 60px;
    position: relative;
    color: #fff;
    background: #151519;
  }

  .footerContainer {
    color: #151519;
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    padding: 42px 0;
  }

  .contentBox {
    width: 75%;
    display: flex;
    justify-content: flex-start;
  }

  .afterSales {
    width: 25%;
    padding-top: 15px;
  }

  .contentlist {
    width: 25%;
  }

  .listItem {
    padding: 10px;
    font-size: 14px;
    color: #c4c4c5;
    text-align: left;
  }

  .listTitle {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }

  .listItem a {
    color: #c4c4c5;
  }

  a:hover {
    color: #2093ff;
  }

  /* 售后 */
  .afterSales ul>li {
    text-align: right;
    color: #fff;
    padding: 0;
  }

  .afterSales ul>li:first-child {
    font-size: 17px;
    padding: 10px 0;
    font-weight: bold;
  }

  .afterSales ul>li:nth-child(2) {
    font-size: 26px;
    font-weight: 700;
  }

  .afterSales ul>li:nth-child(3) {
    font-size: 14px;
    opacity: 0.65;
    margin-top: 10px;
  }

  .afterSales ul>li:nth-child(4) {
    padding-top: 15px;
    font-size: 14px;
  }

  .afterSales ul>li:nth-child(4) span {
    font-size: 16px;
    font-weight: bold;
  }

  .afterSales ul>li:nth-child(5) {
    padding-top: 15px;
    font-size: 14px;
  }

  .afterSales ul>li:nth-child(5) a {
    display: inline-block;
    padding: 10px 0;
    line-height: 1;
    color: #c4c4c5;
  }

  .other {
    display: flex;
    justify-content: flex-end;
    padding-top: 21px;
  }

  .other>img {
    width: 29px;
    height: 24px;
    cursor: pointer;
    margin-left: 30px;
  }

  .footerBottom {
    height: 45px;
    border-top: 1px solid #33333a;
    padding: 0;
    display: flex;
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
  }

  .bottomLeft,
  .bottomRight {
    width: 50%;
    display: flex;
    align-content: center;
    align-items: center;
  }

  .bottomLeft {
    justify-content: flex-start;
    display: flex;

  }

  .bottomLeft img {}

  .bottomLeft span {
    color: #fff;
    font-size: 14px;
  }

  .bottomRight {
    justify-content: flex-end;
    font-size: 14px;
  }
</style>
