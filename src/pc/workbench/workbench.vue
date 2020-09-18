<template>
  <div id="publishDemandBox">
    <Header :bg="'black'" />
    <div class="containerBox">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/pc/components/Header'
  import Footer from '@/pc/components/Footer'
  export default {
    components: {
      Header,
      Footer,
    },
    name: 'publishDemand',
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style scoped>
  .containerBox {
    width: 100%;
    padding-top:62px ;
    border-top:1px solid transparent ;
    border-bottom:1px solid transparent ;
  }
</style>
