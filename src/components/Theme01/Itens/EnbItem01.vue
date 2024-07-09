<template>
  <div class='EnbItem01'>
    <div class="cont-img">
      <enb-itemImg01 :data="data"/>
    </div>
    <div class="cont-desc">
      {{ data.name }} - {{ data.un }}
    </div>
    <div class="cont-valor">
      R$ {{ data.preco.toFixed(2).replace('.', ',') }}
    </div>
    <div class="cont-btn">
      <enb-itemBtn01 :data="data"/>
    </div>
  </div>
</template>

<script>
import EnbItemImg01 from './EnbItemImg01'
import EnbItemBtn01 from './EnbItemBtn01.vue'
export default {
  name: 'EnbItem01',
  components: { EnbItemImg01, EnbItemBtn01 },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
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
  margin: 2%;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-valor {
  width: 100%;
  height: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-btn {
  width: 100%;
  height: 50px;
}
</style>
