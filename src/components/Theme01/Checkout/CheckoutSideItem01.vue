<template>
  <div class='CheckoutSideItem01'>
    <div class="cont-img">
      <img src="img.png">
    </div>
    <div class="cont">
      <div class="desc">Nome no produto silva</div>
      <div class="qtda-valor">
        <div class="qtda">
        </div>
        <div class="valor">
          R$ 3,99
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutSideItem01'
}
</script>

<style scoped>
.CheckoutSideItem01 {
  display: flex;
}

.cont-img {
  width: 20%;
  padding: 2%;
}

img {
  width: 40px;
  height: 40px;
}

.cont {
  width: 80%;
}

.desc {
  text-align: left;
}

.qtda-valor {
  display: flex;
  justify-content: center;
}

.qtda {
  width: 40%;
  padding-left: 5%;
}

.valor {
}
</style>
