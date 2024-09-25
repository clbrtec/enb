<template>
  <div class='EnbProdImg'>
    <img :src="data.img[0]" @click="$router.push('/produtoview')">
  </div>
</template>

<script>
export default {
  name: 'EnbProdImg',
  props: ['data']
}
</script>

<style scoped>
.EnbProdImg {
  width: 100%;
  height: 250px;
  background-color: red;
}

img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
