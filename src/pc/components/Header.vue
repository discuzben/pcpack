<template>
  <div class="header" :style="bg == 'black' ? 'background-color: black;' : ''">
    <div class="navigatecon">
      <div class="navigate">
        <ul class="left">
          <router-link exact to="/" tag="li">
            <img src="../../assets/logo.svg" alt="" />
          </router-link>
          <router-link to="/workbench" tag="li">
            <span class="cursor hover-lines">发布需求</span>
          </router-link>
          <router-link to="/project" tag="li">
            <span class="cursor hover-lines">项目大厅</span>
          </router-link>
          <router-link to="/plan" tag="li">
            <span class="cursor hover-lines">产品中心</span>
          </router-link>
        </ul>

        <div class="right" v-if="userinfo">
          <router-link to="/worktable" tag="li">
            <div class="item cursor hover-lines">工作台</div>
          </router-link>
          <router-link to="/personalCenter" tag="li">
            <div class="item cursor hover-lines">个人中心</div>
          </router-link>
          <router-link to="/" tag="li">
            <div class="item cursor">
              <img src="../../assets/coin.png" alt="" />
            </div>
          </router-link>
          <router-link to="/" tag="li">
            <div class="item cursor">
              <img src="../../assets/im/chat-n.png" alt="" />
            </div>
          </router-link>
          <router-link to="/" tag="li">
            <div class="item cursor">
              <img src="../../assets/bell.png" alt="" />
            </div>
          </router-link>
          <div class="item cursor">
            <el-popover ref="popover" placement="top-end" width="220" trigger="hover">
              <div class="userinfo">
                <div class="left">
                  <el-avatar :size="avatarSize" :src="avatarSrc"></el-avatar>
                  <div class="info">
                    <span class="name">zb86067975</span>
                    <span class="type">企业 | 发包方</span>
                  </div>
                </div>
                <div class="right">
                  <span>我的主页</span>
                </div>
              </div>
              <div class="userbtns">
                <el-button plain>
                  设置账号身份角色
                </el-button>
                <el-button plain @click="loginout">
                  退出
                </el-button>
              </div>
            </el-popover>
            <el-avatar :size="avatarSize" :src="avatarSrc" v-popover:popover></el-avatar>
          </div>
        </div>

        <div class="right" v-else>
          <router-link to="/login" tag="li">
            <div class="item cursor hover-lines">登录</div>
          </router-link>
          <router-link to="/register" tag="li">
            <div class="item cursor hover-lines">注册</div>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "headerr",
    props: {
      bg: {
        type: String,
        default: "transparent"
      }
    },
    data() {
      return {
        avatarSrc: require('../../assets/avatar_default.gif'),
        avatarSize: 'large'
      }
    },
    computed:{
      userinfo(){
        return this.$store.state.userinfo;
      }
    },
    methods: {
      loginout() {
        this.$notify.info({
          title: '消息',
          message: '退出登录成功!'
        });
      }
    }
  };
</script>

<style lang="less">
.header {
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
}

.cursor {
  cursor: pointer;
}
.cursor:hover {
  color: #197eb2;
}

.hover-lines {
  text-decoration: none;
  border: none;
  font-family: "Roboto", sans-serif;
  position: relative;
  vertical-align: baseline;
  padding: 10px;
}
.hover-lines:before,
.hover-lines:after,
.hover-lines > .ui-border-element:before,
.hover-lines > .ui-border-element:after {
  content: "";
  position: absolute;
}
.hover-lines:after,
.hover-lines:before {
  border-bottom: 2px solid #1779ba;
  left: 51%;
  right: 51%;
  bottom: 0px;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
  -moz-transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
  -o-transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
  transition-timing-function: cubic-bezier(0, 0.98, 0.51, 0.93);
  -webkit-transition-duration: 500ms;
  -moz-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}
.hover-lines:before {
  border-top: 2px solid #1779ba;
  top: 0;
}
.hover-lines:hover:after,
.hover-lines:hover:before {
  left: 0%;
  right: 0%;
}
.hover-lines:not(:hover):after,
.hover-lines:not(:hover):before {
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}
.header {
  display: flex;
  justify-content: center;
}
.navigatecon {
  width: 1150px;
  height: 50px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
}
.navigate {
  width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 15px;

  .left {
    list-style: none;
    width: 40%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-size: 15px;

      li {
        margin-right: 30px;

        img {
          /* transform: scale(0.5); */
          width: 120px;
        }
      }

      li:nth-last-child(1) {
        margin-right: 0;
      }
    }

    .right {
      display: flex;
      align-items: center;

      li {
        margin-right: 30px;
        list-style: none;
      }

      li:nth-last-child(1) {
        margin-right: 0;

        img {
          width: 43px;
          height: 43px;
          border-radius: 50%;
        }
      }
    }
  }

  .active {
    color: #197eb2;
  }

  .userinfo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .left {
      display: flex;

      .info {
        display: flex;
        flex-direction: column;
        margin-left: 20px;

        .type {
          display: flex;
          align-items: center;
        }
      }
    }

    .right {
      color: #2093ff;
      cursor: pointer;
    }
  }

  .userbtns {
    display: flex;
    justify-content: space-between;
  }
</style>
