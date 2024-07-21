<template>
  <div class='EnbLink01'>
    <component :is="data.icon"/>
    <div class="cont" @click="$router.push(data.path)">{{ data.text }}</div>
  </div>
</template>

<script>
import StoreIcon01 from '../Icons/StoreIcon01'
import CartShopIcon01 from '../Icons/CartShopIcon01'
import LikeIcon01 from '../Icons/LikeIcon01'
import ListIcon01 from '../Icons/ListIcon01'
export default {
  name: 'EnbLink01',
  components: { StoreIcon01, CartShopIcon01, LikeIcon01, ListIcon01 },
  props: {
    data: {
      text: Object,
      default: () => ({ text: 'Link', path: '' })
    }
  }
}
</script>

<style scoped>
.EnbLink01 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
}

.cont {
  cursor: pointer;
}
</style>
