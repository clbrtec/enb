<template>
  <div class='CheckoutItem'>
    <div class="img">
      <img src="img.png">
      <div class="qtde">1</div>
    </div>
    <div class="desc">
      desc
    </div>
    <div class="valor">
      valor
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutItem'
}
</script>

<style scoped>
.CheckoutItem {
  display: flex;
  height: 20%;
  background-color: yellow;
}

.img {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: -4%;
  margin-left: 3%;
}

.desc {
  width: 60%;
  display: flex;
  align-items: center;
  background-color: green;
}

.valor {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
