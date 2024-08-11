<template>
  <div class='EstoqueVariavel'>
    <div style="width: 8%">
      <img :src="data.img[0]">
    </div>
    <div style="width: 35%; text-align: left">{{ data.name }}</div>
    <div style="width: 8%">
      <div v-if="data.status" class="pub">Publicado</div>
      <div v-if="!data.status" class="arq">Arquivado</div>
    </div>
    <div style="width: 10%">{{ data.statusEstoque }}</div>
    <div style="width: 8%">
      <span :class="{ disabled: data.oferta > 0 }" style="display: block">{{ data.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
      <span v-if="data.oferta > 0" style="display: block; color: #20c997">{{ data.oferta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
    </div>
    <div style="width: 10%">{{ data.categoria }}</div>
    <div style="width: 4%">
      <box-icon
      :options="{ width: '13px', height: '13px' }"
      :text="data.tipo"
      :active="true"
      />
    </div>
    <div style="width: 4%">
      {{ data.visualizacao }}
    </div>
    <div style="width: 10%">{{ data.dateCreate }}</div>
  </div>
</template>

<script>
import BoxIcon from '../Icons/BoxIcon.vue'
export default {
  name: 'EstoqueVariavel',
  props: ['data'],
  components: { BoxIcon }
}
</script>

<style scoped>
.EstoqueVariavel {
  height: 10%;
  display: flex;
  align-items: center;
}

img {
  width: 30px;
  height: 30px;
}

.pub {
  width: 80%;
  margin: auto;
  background-color: #20c997;
  color: #FFFFFF;
  padding: 3px;
  font-size: 12px;
  border-radius: 3px;
}

.arq {
  width: 80%;
  margin: auto;
  background-color: #f86c6b;
  color: #FFFFFF;
  padding: 3px;
  font-size: 12px;
  border-radius: 3px;
}

.disabled {
  color: red;
  text-decoration: line-through;
}
</style>
