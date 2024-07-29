<template>
  <div class='SubNave'
  v-if="show || meShow"
  @mouseenter="meShow=true" @mouseleave="meShow=false"
  >
    <sub-link-nave
    v-for="(c, k) in Categs"
    :key="k"
    :data="c"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SubLinkNave from './SubLinkNave'
export default {
  name: 'SubNave',
  components: { SubLinkNave },
  computed: {
    ...mapGetters(['Categorias']),
    Categs () {
      return this.Categorias.filter(c => c.name !== '')
    }
  },
  props: ['show', 'data'],
  data () {
    return {
      meShow: false
    }
  }
}
</script>

<style scoped>
.SubNave {
  width: 200px;
  margin-top: 5%;
  margin-left: 17%;
  position: absolute;
  background-color: #FFFFFF;
  box-shadow: 1px 1px 1px 1px #CCCCCC;
  cursor: pointer;
  z-index: 999;
}
</style>
