<template>
  <div>
    <NavList />
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import NavList from "./NavList"
  export default {
    name: 'HelloWorld',
    components: {
      NavList
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      this.$axios.post('/sharefile', {
          id: 'AB01b19a851bB74311864A1',
          code: 1111
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
       background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
       background-color: #d3dce6;
    }
</style>
