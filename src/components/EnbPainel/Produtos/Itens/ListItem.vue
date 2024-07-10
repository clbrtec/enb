<template>
  <div class='ListItem'>
    <div style="width: 4%">
      <input type="checkbox" name="" id="">
    </div>
    <div style="width: 8%">
    </div>
    <div style="width: 35%; text-align: left">Nome</div>
    <div style="width: 8%">Status</div>
    <div style="width: 10%">Qtda</div>
    <div style="width: 8%">Preço</div>
    <div style="width: 10%">Categoria</div>
    <div style="width: 4%">
    </div>
    <div style="width: 4%">
    </div>
    <div style="width: 10%">Data</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem'
}
</script>

<style scoped>
.ListItem {
  height: 15%;
  display: flex;
  align-items: center;
  background-color: red;
}
</style>
