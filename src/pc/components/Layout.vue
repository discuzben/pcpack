<template>
  <div>
    <Header />
    <div class="center">
      <div class="imgcon">
        <img class="homeback" src="../../assets/home/home-banner.png" alt="">
        <div class="tip">
          <span class="here">百万专业开发资源，就在巨牛众包</span>
          <span class="matching">垂直技术社区10年沉淀&nbsp;&nbsp;350万+活跃开发者&nbsp;&nbsp;海量行为数据智能匹配</span>
          <div class="freesend cursorl">免费发布需求</div>
        </div>
      </div>
      <div class="appli">
        <h2 class="title">选择应用类型，快速发布</h2>
        <ul class="appliList">
          <li v-for="(item, index) in appliList" @mouseenter="enter(index)" @mouseleave="leave(index)">
            <div class="imgcon">
              <img :src="item.img" alt="">
            </div>
            <h4>{{ item.title }}</h4>
            <div>{{ item.num }}+ 开发商</div>
            <div class="rapidend" v-if="item.hover">快速发布需求</div>
          </li>
        </ul>
      </div>
      <div class="gold">
        <h2 class="title">金牌会员，优质源于专业</h2>
        <div class="goldList">
          <el-card class="box-card" v-for="(it,index) in goldList" :key="it.id">
            <div slot="header" class="clearfix">
              <img :src="it.img" alt="">
              <span>{{it.name}}</span>
            </div>
            <div class="text item">
              {{it.detail}}
              <div class="forte"><span>擅长：</span>{{it.forte}}</div>
              <div class="forte"><span>案例：</span>{{it.case}}</div>
            </div>
            <div class="cardfoot">
              <div class="locate">
                <img src="../../assets/home/v2/icon-location.png" alt="">
                <span>{{it.locate}}</span>
              </div>
              <el-rate :value="it.star" disabled></el-rate>
            </div>
          </el-card>
        </div>
      </div>
      <div class="use">
        <h2 class="title">他们也在使用开源众包</h2>
        <div class="sectitle">360 度全方位专业服务，已被众多知名企业认可</div>
        <div class="useList">
          <el-card class="box-card usecard" v-for="(its,index) in useList" :key="its.id">
            <div class="item">
              <div class="imgcon">
                <img :src="its.img" alt="">
              </div>
              <div class="name">发布项目总金额</div>
              <div class="price">￥{{its.price}}</div>
              <div class="type">众包体验</div>
              <el-rate :value="its.star" disabled></el-rate>
              <div class="presentation">
                {{its.presentation}}
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="service">
        <h2 class="title">全方位服务保障</h2>
        <div class="sectitle">从需求到验收，多达 12 项专业服务为您的项目保驾护航</div>
        <div class="serviceList">
          <el-card class="box-card usecard" v-for="(its,index) in serviceList" :key="its.id">
            <div class="item">
              <div class="top">
                <div class="imgcon">
                  <img :src="its.img" alt="">
                </div>
                <span>{{its.title}}</span>
              </div>
              <ul class="bot">
                <li v-for="item in its.body">
                  <div class="sec">
                    <div class="node">·</div>{{item.sec}}
                  </div>
                  <div class="des">{{item.des}}</div>
                </li>
              </ul>
            </div>
          </el-card>
        </div>
      </div>
      <div class="step">
        <h2 class="title">4步，完成您的项目</h2>
        <ul class="stepList">
          <li v-for="item in stepList" :key="item.index">
            <div class="index">{{item.index}}</div>
            <div class="right">
              <div class="sec">{{item.sec}}</div>
              <div class="des" v-for="it in item.des">{{it}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="now">
        <div class="title">现在，开始体验专业的众包服务</div>
        <div class="btns">
          <div class="btn cursorl">免费发布需求</div>
          <div class="btn cursorl">预约项目管家</div>
        </div>
      </div>
    </div>
    <Footer />
    <Sidebar />
  </div>
</template>

<script>
  import Header from '@/pc/components/Header'
  import Footer from '@/pc/components/Footer'
  import Sidebar from '@/pc/components/Sidebar'
  export default {
    name: "layout",
    components: {
      Header,
      Footer,
      Sidebar
    },
    data() {
      return {
        appliList: [{
            img: require('../../assets/icon/app_type/437.png'),
            title: '网站开发',
            num: '80,000',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/434.png'),
            title: 'HTML5应用',
            num: '80,000',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/433.png'),
            title: 'APP开发',
            num: '30,000',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/435.png'),
            title: '微信/小程序',
            num: '20,000',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/442.png'),
            title: '游戏开发',
            num: '50,000',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/445.png'),
            title: '区块链',
            num: '1,000',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/446.png'),
            title: '人工智能',
            num: '2,000',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/447.png'),
            title: '大数据',
            num: '4,000',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/448.png'),
            title: '物联网',
            num: '3,500',
            hover: false
          },
          {
            img: require('../../assets/icon/app_type/449.png'),
            title: '云计算',
            num: '10,000',
            hover: false
          }
        ],
        goldList: [{
            id: 1,
            img: 'https://zb.oschina.net/file/get?path=group1/M00/11/13/wKgBDVzZLa-AdcC3AABP_GuwRNg962.jpg',
            name: '中科佰信软件',
            detail: '中科佰信是一家全方位IT服务及行业解决方案提供商，致力于“软件+服务”的发展宗旨，拥有资深的综合业务能力和纵深服务优势...',
            forte: 'APP开发，企业网站，PHP开发 ，微信应用',
            case: '云耕时代管理系统、极速新闻、高校微信小程序',
            locate: '北京-北京',
            star: 5
          },
          {
            id: 2,
            img: 'https://zb.oschina.net/file/get?path=group1/M00/11/13/wKgBDVzZLa-AdcC3AABP_GuwRNg962.jpg',
            name: '中科佰信软件',
            detail: '中科佰信是一家全方位IT服务及行业解决方案提供商，致力于“软件+服务”的发展宗旨，拥有资深的综合业务能力和纵深服务优势...',
            forte: 'APP开发，企业网站，PHP开发 ，微信应用',
            case: '云耕时代管理系统、极速新闻、高校微信小程序',
            locate: '北京-北京',
            star: 5
          },
          {
            id: 3,
            img: 'https://zb.oschina.net/file/get?path=group1/M00/11/13/wKgBDVzZLa-AdcC3AABP_GuwRNg962.jpg',
            name: '中科佰信软件',
            detail: '中科佰信是一家全方位IT服务及行业解决方案提供商，致力于“软件+服务”的发展宗旨，拥有资深的综合业务能力和纵深服务优势...',
            forte: 'APP开发，企业网站，PHP开发 ，微信应用',
            case: '云耕时代管理系统、极速新闻、高校微信小程序',
            locate: '北京-北京',
            star: 5
          },
          {
            id: 4,
            img: 'https://zb.oschina.net/file/get?path=group1/M00/11/13/wKgBDVzZLa-AdcC3AABP_GuwRNg962.jpg',
            name: '中科佰信软件',
            detail: '中科佰信是一家全方位IT服务及行业解决方案提供商，致力于“软件+服务”的发展宗旨，拥有资深的综合业务能力和纵深服务优势...',
            forte: 'APP开发，企业网站，PHP开发 ，微信应用',
            case: '云耕时代管理系统、极速新闻、高校微信小程序',
            locate: '北京-北京',
            star: 5
          },
          {
            id: 5,
            img: 'https://zb.oschina.net/file/get?path=group1/M00/11/13/wKgBDVzZLa-AdcC3AABP_GuwRNg962.jpg',
            name: '中科佰信软件',
            detail: '中科佰信是一家全方位IT服务及行业解决方案提供商，致力于“软件+服务”的发展宗旨，拥有资深的综合业务能力和纵深服务优势...',
            forte: 'APP开发，企业网站，PHP开发 ，微信应用',
            case: '云耕时代管理系统、极速新闻、高校微信小程序',
            locate: '北京-北京',
            star: 5
          },
          {
            id: 6,
            img: 'https://zb.oschina.net/file/get?path=group1/M00/11/13/wKgBDVzZLa-AdcC3AABP_GuwRNg962.jpg',
            name: '中科佰信软件',
            detail: '中科佰信是一家全方位IT服务及行业解决方案提供商，致力于“软件+服务”的发展宗旨，拥有资深的综合业务能力和纵深服务优势...',
            forte: 'APP开发，企业网站，PHP开发 ，微信应用',
            case: '云耕时代管理系统、极速新闻、高校微信小程序',
            locate: '北京-北京',
            star: 5
          }
        ],
        useList: [{
            id: 1,
            img: require('../../assets/home/employers/8.png'),
            price: '3,280,000',
            star: 5,
            presentation: '汇集了来自 OpenStack社区、HP 架构师等 35 名资深开发者，为华为 65 个项目交付了高质量的开发成果'
          },
          {
            id: 2,
            img: require('../../assets/home/employers/4.png'),
            price: '5,502,000',
            star: 5,
            presentation: '30 天内快速组建 45 人的开发顾问团队，并成功引入阿里、英特尔、微软等行业专家提供培训咨询服务'
          },
          {
            id: 3,
            img: require('../../assets/home/employers/3.png'),
            price: '1,205,000',
            star: 5,
            presentation: '借助开源众包众多开发资源，采用并行开发模式，15 天内快速完成覆盖 11 类开发语言的 SDK 开发任务'
          },
          {
            id: 4,
            img: require('../../assets/home/employers/2.png'),
            price: '750,000',
            star: 5,
            presentation: '7 天时间通过开源众包快速对接近 200 名测试人员，高效完成了腾讯 Bugly 产品的测试优化任务'
          }
        ],
        serviceList: [{
            id: 1,
            img: require('../../assets/home/v2/sy_jisupipei.png'),
            title: '急速匹配，精准对接',
            body: [{
                sec: '免费需求梳理',
                des: '不懂软件别担心，项目管家来帮您'
              },
              {
                sec: '精准撮合匹配',
                des: '信用技能全定位，精准匹配不操心'
              }
            ]
          },
          {
            id: 2,
            img: require('../../assets/home/v2/sy_zijinanquan.png'),
            title: '资金托管，安心无忧',
            body: [{
                sec: '阶段托管费用',
                des: '项目资金零压力，托管冻结零风险'
              },
              {
                sec: '电子合同保障',
                des: '电子合同数字签名，法律权益保障'
              }
            ]
          },
          {
            id: 3,
            img: require('../../assets/home/v2/icon-housekeeper.png'),
            title: '项目管家，全程管控',
            body: [{
                sec: '贴心管家服务',
                des: '项目管家1对1，需求验收全管控'
              },
              {
                sec: '专属客服服务',
                des: '平台客服全天候，服务体验百分百'
              }
            ]
          },
          {
            id: 4,
            img: require('../../assets/home/v2/more.svg'),
            title: '更多专业服务',
            body: [{
                sec: '发票开具服务'
              },
              {
                sec: '资金交易证明'
              },
              {
                sec: '争议纠纷仲裁'
              },
              {
                sec: '代码托管服务'
              }
            ]
          }
        ],
        stepList: [{
          index: 1,
          sec: '发布需求',
          des: ['免费发布项目需求', '极速对接开发资源']
        },
        {
          index: 2,
          sec: '签订合同',
          des: ['浏览并挑选开发商', '在线签订电子合同']
        },
        {
          index: 3,
          sec: '开发实施',
          des: ['确认项目开发计划', '托管阶段开发费用']
        },
        {
          index: 4,
          sec: '验收支付',
          des: ['验收项目开发成果', '支付项目开发费用']
        }]
      }
    },
    methods: {
      enter(index) {
        this.appliList[index].hover = true;
      },
      leave(index) {
        this.appliList[index].hover = false;
      }
    }
  }
</script>

<style lang="less" scoped>
  // 卡片样式区
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 32.2%;
  }

  .cardfoot {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .locate {
      display: flex;
      align-items: center;

      img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
    }
  }

  // 其他样式区
  .cursorl {
    cursor: pointer;
  }

  .center {
    min-width: 1150px;
    .imgcon {
      display: flex;
      align-items: center;
      justify-content: center;

      .homeback {
        width: 100%;
      }

      .tip {
        position: absolute;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;

        .here {
          font-size: 32px;
        }

        .matching {
          margin: 60px 0;
          font-size: 17px;
        }

        .freesend {
          width: 244px;
          height: 46px;
          background-color: #2093FF;
          border-radius: 30px;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .appli {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        text-align: center;
        font-size: 27px;
        font-weight: 700;
        text-align: center;
        color: #48576a;
        line-height: 110px;
      }

      .appliList {
        width: 80%;
        min-width: 1100px;
        display: flex;
        flex-wrap: wrap;

        li {
          width: 20%;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
          position: relative;
          border-radius: 5px;

          .imgcon {
            width: 100px;
            height: 100px;
            border: 1px solid #63B5FB;
            border-radius: 50%;

            img {
              width: 50px;
            }
          }

          h4 {
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            color: #48576a;
            margin: 15px 0;
          }
          .rapidend{
            width: 100%;
            height: 40px;
            color: white;
            background: #42A7FF;
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        li:hover{
          box-shadow: 0px 1px 10px 0px #97a8be;
        }
      }
    }

    .gold {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        text-align: center;
        font-size: 27px;
        font-weight: 700;
        text-align: center;
        color: #48576a;
        line-height: 110px;
      }

      .goldList {
        width: 80%;
        min-width: 1100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .box-card {
          margin-bottom: 22px;

          .clearfix {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
              width: 100px;
            }

          }

          .forte {
            margin: 10px 0;

            span {
              color: #48576A;
              font-weight: bold;
            }
          }
        }
      }
    }

    .use {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        text-align: center;
        font-size: 27px;
        font-weight: 700;
        text-align: center;
        color: #48576a;
        line-height: 110px;
      }

      .sectitle {
        font-size: 15px;
        text-align: center;
        color: #48576a;
      }

      .useList {
        width: 80%;
        min-width: 1100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 40px;

        .box-card {
          width: 23.7%;
        }

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .imgcon {
            width: 100%;
            height: 85px;
            border-bottom: 1px dashed #D7E5F0;

            img {
              height: 100%;
            }
          }

          .name {
            line-height: 42px;
            color: #6A7D8F;
            font-size: 15px;
          }

          .price {
            font-size: 24px;
            color: #000;
            line-height: 50px;
          }

          .type {
            line-height: 42px;
            font-size: 15px;
            color: #6A7D8F;
          }

          .presentation {
            margin-top: 21px;
            padding: 10px 0 0 0;
            font-size: 14px;
            color: #6A7D8F;
            max-height: 87px;
            text-align: justify;
            border-top: 1px dashed #D7E5F0;
          }
        }
      }
    }

    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        text-align: center;
        font-size: 27px;
        font-weight: 700;
        text-align: center;
        color: #48576a;
        line-height: 110px;
      }

      .sectitle {
        font-size: 15px;
        text-align: center;
        color: #48576a;
      }

      .serviceList {
        width: 80%;
        min-width: 1100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 40px;

        .box-card {
          width: 23.7%;
        }

        .item {
          span {
            line-height: 50px;
            font-size: 16px;
            text-align: center;
            font-weight: bold;
          }

          .top {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
              width: 99px;
              height: 88px;
            }
          }

          .bot {
            border-top: 1px dashed #D7E5F0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .sec {
              color: #FF6633;
              font-size: 15px;
              font-weight: bold;
              display: flex;
              align-items: center;
              line-height: 40px;

              .node {
                width: 10px;
              }
            }

            .des {
              font-size: 14px;
              margin-left: 10px;
            }
          }
        }

        .box-card:nth-last-child(1) {
          li {
            width: 50%;
          }

        }
      }
    }

    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 23px;
        font-weight: 700;
        text-align: center;
        color: #48576a;
        line-height: 110px;
      }
      .stepList {
        width: 80%;
        min-width: 1100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 40px;
        li{
          display: flex;
          justify-content: space-between;
          .index{
            width: 60px;
            height: 60px;
            background-color: grey;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-size: 33px;
            font-weight: bold;
            margin-right: 20px;
          }
          .right{
            .sec{
              font-size: 17px;
              font-weight: bold;
              margin-bottom: 15px;
            }
            .des{
              font-size: 13px;
              color: #48576A;
              margin-top: 5px;
            }
          }
        }
      }
    }

    .now {
      .title {
        font-size: 23px;
        font-weight: 700;
        text-align: center;
        color: #48576a;
        line-height: 110px;
        margin-top: 40px;
      }

      .btns {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }

      .btn {
        width: 244px;
        height: 46px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2093ff;
        box-shadow: 0px 1px 10px 0px #97a8be;
        border-radius: 40px;
        font-size: 15px;

      }

      .btn:nth-last-child(1) {
        margin-left: 30px;
      }
    }
  }
</style>

























































































































































































































































































































































>>>>>>> .theirs
