<template>
  <div class='EnbSidebar'>
    <div class="logo">
      <img :src="logo">
    </div>
    <link-sidebar
    v-for="(links, k) in LinkSidebar"
    :key="k"
    :data="links"
    />
  </div>
</template>

<script>
import logo from '../../assets/logo'
import LinkSidebar from '@/components/EnbPainel/LinkSidebar'
import { mapGetters } from 'vuex'
export default {
  name: 'EnbSidebar',
  components: { LinkSidebar },
  computed: {
    ...mapGetters(['LinkSidebar'])
  },
  data () {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped>
.EnbSidebar {
  width: 20%;
  background-color: #FFFFFF
}

.logo {
  display: flex;
  padding-left: 6%;
  padding-top: 5%;
  padding-bottom: 4%;
}

img {
  width: 60%;
}
</style>
