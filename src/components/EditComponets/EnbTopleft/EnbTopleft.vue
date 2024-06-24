<template>
  <div class='EnbTopleft' :style="{ backgroundColor: barColor }">
    <logo-top/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LogoTop from './LogoTop.vue'
export default {
  name: 'EnbTopleft',
  components: { LogoTop },
  computed: {
    ...mapGetters(['selectedThemeTop']),
    barColor () {
      return this.selectedThemeTop.config.barColor
    }
  }
}
</script>

<style scoped>
.EnbTopleft {
  width: 10%;
  height: 100%;
  color: #FFFFFF;
  background-color: #000000;
}

.logo {
  padding-top: 40%;
}
</style>
