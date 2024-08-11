<template>
  <div class='EstoqueHeader'>
    <div style="width: 8%">
      <img-icon
      text="Imagem"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div style="width: 35%; text-align: left">Nome</div>
    <div style="width: 8%">Status</div>
    <div style="width: 10%">Qtde</div>
    <div style="width: 8%">Preço</div>
    <div style="width: 10%">Categoria</div>
    <div style="width: 4%">
      <box-icon
      text="Tipo"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div style="width: 4%">
      <eyes-icon
      text="Visualizações"
      :active="true"
      :optionsLabel="{ marginTop: '65px' }"
      />
    </div>
    <div style="width: 10%">Data</div>
  </div>
</template>

<script>
import ImgIcon from '../Icons/ImgIcon.vue'
import BoxIcon from '../Icons/BoxIcon.vue'
import EyesIcon from '../Icons/EyesIcon.vue'
export default {
  name: 'EstoqueHeader',
  components: { ImgIcon, BoxIcon, EyesIcon }
}
</script>

<style scoped>
.EstoqueHeader {
  height: 6%;
  display: flex;
  align-items: center;
}
</style>
