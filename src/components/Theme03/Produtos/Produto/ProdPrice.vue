<template>
  <div class='ProdPrice'>
    <div class="price" :class="{ disablePrice: data.oferta > 0 }">
      R${{ data.preco }}
    </div>
    <div class="promo" v-if="data.oferta > 0">
      R${{ data.oferta }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdPrice',
  props: ['data']
}
</script>

<style scoped>
.ProdPrice {
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.price {
  padding: 2%;
}
.promo {
  padding: 2%;
}

.disablePrice {
  text-decoration: line-through;
  color: #CCCCCC;
}
</style>
