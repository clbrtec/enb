<template>
  <div class='EnbGift'>
    <div class="cont-btn">
      <button @click="$router.push('/painel/gift/register')">Adicionar</button>
    </div>
    <gift-header/>
  </div>
</template>

<script>
import GiftHeader from './header/GiftHeader'
export default {
  name: 'EnbGift',
  components: { GiftHeader }
}
</script>

<style scoped>
.EnbGift {
  width: 96%;
  height: 96%;
  padding: 2%;
}

.cont-btn {
  padding-bottom: 1%;
  text-align: right;
}

button {
  border: 0;
  font-size: 18px;
  padding: 1.5%;
  background-color: #000000;
  color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
}
</style>
