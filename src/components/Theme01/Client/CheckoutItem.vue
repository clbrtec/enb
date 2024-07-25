<template>
  <div class='CheckoutItem'>
    <div class="img">
      <img :src="data.img[0]">
      <div class="qtde">{{ data.qtda }}</div>
    </div>
    <div class="desc">
      {{ data.name }}
    </div>
    <div class="valor">
      R$ {{ data.preco * data.qtda }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutItem',
  props: ['data']
}
</script>

<style scoped>
.CheckoutItem {
  display: flex;
  height: 20%;
}

.img {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

img {
  width: 70%;
  height: 70%;
}

.qtde {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background-color: #000000;
  position: absolute;
  margin-top: -48%;
  margin-left: 40%;
}

.desc {
  width: 60%;
  display: flex;
  align-items: center;
}

.valor {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
