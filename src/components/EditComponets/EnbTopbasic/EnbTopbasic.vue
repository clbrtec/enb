<template>
  <div class='EnbTop' :style="{ backgroundColor: barColor }">
    <div class="cont">
      <logo-top/>
    </div>
    <nave-top/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LogoTop from '@/components/EditComponets/EnbTopbasic/LogoTop.vue'
import NaveTop from '@/components/EditComponets/EnbTopbasic/NaveTop.vue'
export default {
  name: 'EnbTop',
  components: { LogoTop, NaveTop },
  computed: {
    ...mapGetters(['selectedThemeTop']),
    barColor () {
      return this.selectedThemeTop.config.barColor
    }
  }
}
</script>

<style scoped>
.EnbTop {
  width: 100%;
  height: 20%;
  background-color: #000000;
}

.cont {
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  margin: auto;
}

.nav {
  width: 100%;
  height: 30%;
  margin: auto;
}
</style>
