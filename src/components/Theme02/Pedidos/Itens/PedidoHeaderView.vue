<template>
  <div class='PedidoHeaderView'>
    <div style="width: 70%; text-align: left">Item</div>
    <div style="width: 10%">Custo</div>
    <div style="width: 10%">Qtde</div>
    <div style="width: 10%">Total</div>
  </div>
</template>

<script>
export default {
  name: 'PedidoHeaderView'
}
</script>

<style scoped>
.PedidoHeaderView {
  display: flex;
  border-bottom: thin solid #CCCCCC;
  width: 95%;
  padding: 1%;
  padding-top: 0;
  margin: auto;
}
</style>
