<template>
  <div>
    <Header />
    中心内容
    <Footer />
  </div>
</template>

<script>
  import Header from '@/pc/components/Header'
  import Footer from '@/pc/components/Footer'
  export default{
    name: "layout",
    components: {
      Header,
      Footer
    },
    data(){
      return{

      }
    }
  }
</script>

<style>
</style>
