<template>
  <div class='EnbSidebar'>
    <link-sidebar
    v-for="(links, k) in LinkSidebar"
    :key="k"
    :data="links"
    />
  </div>
</template>

<script>
import LinkSidebar from '@/components/EnbPainel/LinkSidebar.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'EnbSidebar',
  components: { LinkSidebar },
  computed: {
    ...mapGetters(['LinkSidebar'])
  }
}
</script>

<style scoped>
.EnbSidebar {
  width: 20%;
  padding-top: 2%;
  background-color: #FFFFFF
}
</style>
