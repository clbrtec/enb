<template>
  <div class='EnbCheckoutItens01'>
    <div class="label">
      <div class="cont p">Produto</div>
      <div class="cont">Preço</div>
      <div class="cont">Quantidade</div>
      <div class="cont">SubTotal</div>
    </div>
    
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EnbCheckoutItens01'
}
</script>

<style scoped>
.EnbCheckoutItens01 {
  width: 60%;
  border-bottom: thin solid #EEEEEE;
}

.label {
  display: flex;
}

.cont {
  width: 20%;
  padding-top: 3%;
  padding-bottom: 3%;
  font-weight: bold;
  font-size: 14px;
}

.p {
  width: 40%;
}
</style>
