<template>
  <div class='PedidoItemView'>
    <div class="img-desc">
      <img :src="data.img[0]">
      <span style="margin-left: 2%;display: block">{{ data.name }}</span>
    </div>
    <div style="width: 10%">R$ {{ data.preco }}</div>
    <div style="width: 10%">{{ data.qtda }}</div>
    <div style="width: 10%">R$ {{ data.preco * data.qtda }}</div>
  </div>
</template>

<script>
export default {
  name: 'PedidoItemView',
  props: ['data']
}
</script>

<style scoped>
.PedidoItemView {
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  width: 95%;
  padding: 1%;
  margin: auto;
}

.img-desc {
  width: 69%;
  text-align: left;
  display: flex;
  align-items: center;
  padding-left: 1%;
}

img {
  width: 50px;
  height: 50px;
}
</style>
