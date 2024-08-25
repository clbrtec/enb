<template>
  <div :class="{ desabled: data.oferta > 0 }" class='ProdValor02'>
    R$ {{ data.preco }}
  </div>
</template>

<script>
export default {
  name: 'ProdValor02',
  props: ['data']
}
</script>

<style scoped>
.ProdValor02 {
  width: 50%;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: orange;
}

.desabled {
  text-decoration: line-through;
  color: #CCCCCC;
}
</style>
