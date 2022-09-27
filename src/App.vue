<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>
<script>
import Header from './components/Header/index.vue';
import Footer from './components/Footer/index.vue';
export default {
  name: 'APP',
  components: {
    Header,
    Footer,
},
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
}
</script>
<style lang="scss" scoped>

</style>
