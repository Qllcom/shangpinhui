<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>
<script>

import Recommend from './Recommend/index.vue';
import ListContainer from './ListContainer/index.vue';
import Rank from './Rank/Rank.vue';
import Like from './Like/Like.vue';
import Floor from './Floor/Floor.vue';
import Brand from './Brand/Brand.vue';


export default {

  name: 'Home',
  components: {
    Recommend,
    ListContainer,
    Rank,
    Like,
    Floor,
    Brand
},
  data () {
    return {};
  },
  methods: {},
  created () {
  },
  mounted () {
  },
}
</script>
<style lang="scss" scoped>

</style>
