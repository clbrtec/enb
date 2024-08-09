<template>
  <div class='GiftList'>
    <div style="width: 18%">
      {{ data.codigo }}
    </div>
    <div style="width: 16%">
      <div class="tipo">{{ data.tipo }}</div>
    </div>
    <div style="width: 16%">
      {{ data.valor }}
    </div>
    <div style="width: 16%">
      {{ data.limiteCupom === 0 ? '-' : data.limiteCupom }}
    </div>
    <div style="width: 18%">
      {{ format(data.validade) }}
    </div>
    <div class="action" style="width: 16%">
      <edit-icon @click="select"/>
      <delete-icon @click="del"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EditIcon from '../../Icons/EditIcon'
import DeleteIcon from '../../Icons/DeleteIcon'
export default {
  name: 'GiftList',
  props: ['data'],
  components: { EditIcon, DeleteIcon },
  methods: {
    ...mapActions(['SetGiftEdit', 'SetMultiSelect', 'SetModal']),
    select () {
      this.SetMultiSelect({ store: 'ProdutosGift', list: this.data.produtos })
        .then(() => this.SetMultiSelect({ store: 'DelProdutosGift', list: this.data.produtoDel }))
        .then(() => this.SetMultiSelect({ store: 'CategoriasGift', list: this.data.categorias }))
        .then(() => this.SetMultiSelect({ store: 'DelCategoriasGift', list: this.data.categoriasDel }))
        .then(() => this.SetGiftEdit(this.data))
        .then(() => this.$router.push('/painel/gift/update'))
    },
    format (date) {
      if (date === '') {
        return ''
      }
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    },
    del () {
      this.SetModal({ 
        component: 'AskAction',
        active: true,
        ask: 'Tem certeza que deseja excluir o cupom?',
        action: 'DeleteGift',
        payload: this.data
      })
    }
  }
}
</script>

<style scoped>
.GiftList {
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding: 1%;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tipo {
  background-color: green;
  padding: 2%;
  border-radius: 3px;
  color: #FFFFFF;
}
</style>
