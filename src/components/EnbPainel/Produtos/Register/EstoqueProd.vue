<template>
  <div class='EstoqueProd'>
    <div class="check">
      <input
      type="checkbox"
      :checked="SelectedProdEdit.gerEstoque"
      @change="ChangeProdEdit({ gerEstoque: !SelectedProdEdit.gerEstoque })">
      <label>Gerenciar estoque?</label>
    </div>
    <input-select
    v-if="!SelectedProdEdit.gerEstoque"
    :value="SelectedProdEdit.statusEstoque"
    @update:model-value="newValue => ChangeProdEdit({ statusEstoque: newValue })"
    :data="status"
    text="Status do estoque"
    :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '5px' }"
    :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <input-reg
    v-if="SelectedProdEdit.gerEstoque"
    :value="SelectedProdEdit.estoque"
    @update:model-value="newValue => ChangeProdEdit({ estoque: newValue })"
    text="Quantidade de estoque"
    type="number"
    :label="{ textAlign: 'left', marginLeft: '7%', marginTop: '8px' }"
    :input="{ fontSize: '18px', padding: '2%', width: '95.5%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <input-select
    v-if="SelectedProdEdit.gerEstoque"
    :value="SelectedProdEdit.pendencia"
    @update:model-value="newValue => ChangeProdEdit({ pendencia: newValue })"
    :data="pendentes"
    text="Permitir Pedidos pendentes?"
    :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '7%' }"
    :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InputSelect from './InputSelect'
import InputReg from './InputReg'
export default {
  name: 'EstoqueProd',
  components: { InputSelect, InputReg },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  },
  data () {
    return {
      toggleView: true,
      status: [
        { name: 'Em estoque' },
        { name:'Fora de estoque' },
        { name: 'Em atraso' }
      ],
      pendentes: [
        { name: 'Não permitir' },
        { name: 'Permitir mas informe ao cliente' },
        { name: 'Permitir' }
      ]
    }
  },
  methods: {
    ...mapActions(['ChangeProdEdit'])
  }
}
</script>

<style scoped>
.EstoqueProd {
  width: 100%;
}

.check {
  width: 100%;
  margin: auto;
  text-align: left;
  margin-top: 8px;
}

label {
  padding-left: 1%;
}

.end {
  padding-top: 7%;
} 
</style>
