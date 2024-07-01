<template>
  <div class='CheckoutSideHead01'>
    <div class="label">Carrinho de Compras</div>
    <div class="x" @click="$emit('update:out', true)">X</div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutSideHead01',
  props: ['out'],
  emits: ['update:out']
}
</script>

<style scoped>
.CheckoutSideHead01 {
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange
}

.label {
  width: 40%;
  text-align: left;
  color: #FFFFFF;
  text-wrap: nowrap;
}

.x {
  width: 40%;
  text-align: right;
  color: #FFFFFF;
  cursor: pointer;
}
</style>
