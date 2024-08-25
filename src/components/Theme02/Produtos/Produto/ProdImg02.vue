<template>
  <div class='ProdImg02'>
    <img :src="data.img[0]">
    <div class="oferta" v-if="data.oferta > 0">
      <div style="width: 50%; text-align: left; color: #FFFFFF">Promoção</div>
      <div style="width: 50%; text-align: right; font-weight: bold;">R$ {{ data.oferta }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdImg02',
  props: ['data']
}
</script>

<style scoped>
.ProdImg02 {
  width: 100%;
  height: 230px;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
}

.oferta {
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 2%;
  width: 96%;
  background-color: rgb(11, 141, 109);
}
</style>
