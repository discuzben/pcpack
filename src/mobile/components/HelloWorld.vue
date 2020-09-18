<template>
 <div class="hello">
    <!--  <NavList />
    <h1>{{ msg }}</h1>
      栏外人{{ getCount }}
      <el-button type="success" @click="add">加加</el-button>
      <el-button type="success" @click="min">减减</el-button>
    <ul>
      <li>
        <img src="../../assets/logo.png" alt="">
      </li>
      <li v-for="img in list">
        <img v-lazy="img.src" >
      </li>
    </ul>
    -->
  </div>
</template>
<script>
  // import NavList from "./NavList"
  // export default {
  //   name: 'HelloWorld',
  //   components: {
  //     NavList
  //   },
  //   data() {
  //     return {
  //       msg: 'Welcome to Your Vue.js mobile App',
  //       list: [{src:'https://tse3-mm.cn.bing.net/th/id/OIP.yaPUIGRPtnAOa_gP4R6iWAHaGl?pid=Api&rs=1'},
  //       {src:'https://pic4.zhimg.com/v2-588b5a5dd202c4ec9c7f258df5df2f79_r.jpg'},
  //       {src:'https://tse1-mm.cn.bing.net/th/id/OIP.yPEBi69raqV5QW3aTmEQsgHaFj?pid=Api&rs=1'}]
  //     }
  //   },
  //   computed:{
  //     getCount(){
  //       return this.$store.getters.getState;
  //     }
  //   },
  //   mounted(){

  //   },
  //   created() {
  //     this.$axios.post('getActive', {
  //         // id: 'AB01b19a851bB74311864A1',
  //         // code: 1111
  //       })
  //       .then(function(res) {
  //         console.log(res);
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   },
  //   methods:{
  //     add(){
  //       this.$store.dispatch("increment")
  //     },
  //     min(){
  //       this.$store.commit("decrease")
  //     }
  //   }
  // }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* h1,
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
  } */
</style>
