<template>
  <div class='ListItem'>
    <div style="width: 4%">
      <input type="checkbox" name="" id="">
    </div>
    <div style="width: 8%">
      <img :src="data.img">
    </div>
    <div style="width: 35%; text-align: left">{{ data.name }}</div>
    <div style="width: 8%">{{ data.status }}</div>
    <div style="width: 10%">{{ data.qtda }}</div>
    <div style="width: 8%">{{ data.preco }}</div>
    <div style="width: 10%">{{ data.categoria }}</div>
    <div style="width: 4%">
      {{ data.tipo }}
    </div>
    <div style="width: 4%">
      {{ data.visualizacao }}
    </div>
    <div style="width: 10%">{{ data.data }}</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['data']
}
</script>

<style scoped>
.ListItem {
  height: 10%;
  display: flex;
  align-items: center;
}

img {
  width: 30px;
  height: 30px;
}
</style>
