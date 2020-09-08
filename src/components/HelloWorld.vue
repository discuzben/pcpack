<template>
  <div class="hello">
    <NavList />
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <img src="../assets/logo.png" alt="">
      </li>
    </ul>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
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
      // this.$axios.get('https://test.juniuapi.com/sharefile', {
      //     params: {
      //       id: 'AB01b19a851bB74311864A1',
      //       code: 1111
      //     }
      //   })
      //   .then(function(res) {
      //     console.log(res);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
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
</style>
