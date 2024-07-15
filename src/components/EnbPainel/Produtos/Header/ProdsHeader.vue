<template>
  <div class='ProdsHeader'>
    <div style="width: 4%">
      <input type="checkbox" name="" id="">
    </div>
    <div style="width: 8%">
      <img-icon/>
    </div>
    <div style="width: 35%; text-align: left">Nome</div>
    <div style="width: 8%">Status</div>
    <div style="width: 10%">Qtde</div>
    <div style="width: 8%">Preço</div>
    <div style="width: 10%">Categoria</div>
    <div style="width: 4%">
      <box-icon/>
    </div>
    <div style="width: 4%">
      <eyes-icon/>
    </div>
    <div style="width: 10%">Data</div>
  </div>
</template>

<script>
import ImgIcon from '../../Icons/ImgIcon'
import BoxIcon from '../../Icons/BoxIcon.vue'
import EyesIcon from '../../Icons/EyesIcon.vue'
export default {
  name: 'ProdsHeader',
  components: { ImgIcon, BoxIcon, EyesIcon }
}
</script>

<style scoped>
.ProdsHeader {
  height: 6%;
  display: flex;
  align-items: center;
}
</style>
