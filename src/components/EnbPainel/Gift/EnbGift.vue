<template>
  <div class='EnbGift'>
    <div class="cont-btn">
      <button @click="$router.push('/painel/gift/register')">Adicionar</button>
    </div>
    <gift-header/>
    <gift-list
    v-for="(data, key) in Gifts"
    :key="key"
    :data="data"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GiftHeader from './header/GiftHeader'
import GiftList from './Itens/GiftList'
export default {
  name: 'EnbGift',
  components: { GiftHeader, GiftList },
  computed: {
    ...mapGetters(['Gifts'])
  }
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
  padding: 1%;
  background-color: #000000;
  color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1%;
}
</style>
