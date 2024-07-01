<template>
  <div class='EnbItem01' @click="ToggleCheckout01(true)">
    <div class="cont-img">
      <enb-itemImg01/>
    </div>
    <div class="cont-desc"></div>
    <div class="cont-valor"></div>
    <div class="cont-btn"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EnbItemImg01 from './EnbItemImg01'
export default {
  name: 'EnbItem01',
  components: { EnbItemImg01 },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions(['ToggleCheckout01'])
  }
}
</script>

<style scoped>
.EnbItem01 {
  width: 200px;
  height: 300px;
  /* border: thin solid #CCCCCC; */
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px #CCCCCC;
  margin: 1%;
}

.cont-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
}
.cont-desc {
  width: 100%;
  height: 40px;
}
.cont-valor {
  width: 100%;
  height: 30px;
}
.cont-btn {width: 100%;
  height: 50px;
}
</style>
