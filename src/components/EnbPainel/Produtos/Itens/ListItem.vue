<template>
  <div class='ListItem'>
    <div style="width: 4%">
      <input :checked="checked" @change="toggle" type="checkbox">
    </div>
    <div style="width: 8%">
      <img :src="data.img[0]">
    </div>
    <div style="width: 35%; text-align: left">{{ data.name }}</div>
    <div style="width: 8%">
      <div v-if="data.status" class="pub">Publicado</div>
      <div v-if="!data.status" class="arq">Arquivado</div>
    </div>
    <div style="width: 10%">{{ data.statusEstoque }}</div>
    <div style="width: 8%">{{ data.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</div>
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
import { mapActions, mapGetters } from 'vuex'
import BoxIcon from '../../Icons/BoxIcon'
export default {
  name: 'ListItem',
  props: ['data'],
  components: { BoxIcon },
  computed: {
    ...mapGetters(['SelectedProds']),
    status () {
      return this.data.visibilidade !== 'Oculto'
    },
    checked () {
      return this.SelectedProds.filter(s => s.id === this.data.id).length
    }
  },
  methods: {
    ...mapActions(['PushProdEdit', 'DeleteProdEdit']),
    toggle () {
      if(this.checked) {
        this.DeleteProdEdit(this.data)
      } else {
        this.PushProdEdit(this.data)
      }
    }
  }
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
</style>
