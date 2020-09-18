<template>
  <div class="sidebar">
    <div class="list">
      <div class="item cursor" v-for="(item, index) in sidebarList" @mouseenter="sidebarEnter(index)" @mouseleave="sidebarLeave(index)">
        <img :src="item.img" alt="">
        <div class="fontcon" v-if="item.hover">
          <div class="font changeback" v-if="item.font" v-html="item.font"></div>
          <div class="font nochange" v-else></div>
        </div>
      </div>
    </div>
    <div class="list backtoTop">
      <div class="item cursor" @mouseenter="backtopEnter" @mouseleave="backtopLeave">
        <img src="../../assets/sidebar/backtop.png" alt="">
        <div class="fontcon" v-if="showtopfont">
          <div class="font changeback" @click="backtop">返回<br/>顶部</div>
        </div>
      </div>
    </div>
    <div class="wxcode" v-if="sidebarList[2].hover">
      <img src="../../assets/footer-icon0.jpg" alt="">
      <span>关注巨牛众包微信号</span>
      <span>体验快速发单，接单</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data() {
      return {
        sidebarList: [{
          img: require('../../assets/sidebar/project-manager.png'),
          font: '项目<br/>管家',
          hover: false
        },
         {
           img: require('../../assets/sidebar/share.png'),
          hover: false
         },
         {
           img: require('../../assets/sidebar/wxcode.png'),
          hover: false
         },
         {
           img: require('../../assets/sidebar/feedback.png'),
           font: '意见<br/>建议',
          hover: false
         }],
         showtopfont: false
      }
    },
    methods: {
      sidebarEnter(index) {
        this.sidebarList[index].hover = true;
      },
      sidebarLeave(index) {
        this.sidebarList[index].hover = false;
      },
      backtopEnter() {
        this.showtopfont = true;
      },
      backtopLeave() {
        this.showtopfont = false;
      },
      backtop() {
        const scrollToTop = () => {
          const t = document.documentElement.scrollTop || document.body.scrollTop;
          if(t > 0){
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, t - t / 8);
          }
        }
        scrollToTop();
      }
    }
  }
</script>

<style lang="less">
  .sidebar {
    width: 55px;
    position: fixed;
    bottom: 100px;
    right: 10px;

    .list {
      display: flex;
      flex-direction: column;
    }
    .item {
      background-color: rgba(255, 255, 255, 0.9);
      width: 53px;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #eee;
      border-top: 0;
      position: relative;
    }
    .item:nth-child(1) {
      border-top: 1px solid #eee;
    }

    .backtoTop {
      margin-top: 10px;
    }

    .fontcon{
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .font{
      color: white;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      font-size: 14px;
    }
    .changeback{
      background-color: #669FDD;
    }
    .nochange{
      background: #669FDD;
      opacity: 0.1;
    }
    .wxcode{
      position: absolute;
      left: -210px;
      background-color: white;
      padding: 20px;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      color: #48576a;
      img{
        width: 160px;
      }
    }
  }


</style>
