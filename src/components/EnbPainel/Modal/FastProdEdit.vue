<template>
  <div class='FastProdEdit'>
    <div class="header">
      <div class="label">Edição rápida produto</div>
      <div class="close">
        <close-icon @click="close"/>
      </div>
    </div>
    <div class="cont">
      <input-reg
      :value="SelectedProdEdit.name"
      @update:model-value="newValue => ChangeProdEdit({ name: newValue })"
      text="Nome do produto"
      :cont="{ textAlign: 'left' }"
      :label="{ marginLeft: '3px' }"
      :input="{ fontSize: '26px', padding: '1.5%', width: '96%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedProdEdit.preco"
      @update:model-value="newValue => ChangeProdEdit({ preco: parseFloat(newValue) })"
      text="Preço (R$)"
      :cont="{ textAlign: 'left' }"
      :label="{ marginLeft: '3px', marginTop: '8px' }"
      :input="{ fontSize: '26px', padding: '1.5%', width: '96%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      :value="SelectedProdEdit.oferta"
      @update:model-value="newValue => ChangeProdEdit({ oferta: parseFloat(newValue) })"
      text="Preço de oferta (R$)"
      :cont="{ textAlign: 'left' }"
      :label="{ marginLeft: '3px', marginTop: '8px' }"
      :input="{ fontSize: '26px', padding: '1.5%', width: '96%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-select
      :value="SelectedProdEdit.visibilidade"
      @update:model-value="newValue => ChangeProdEdit({ visibilidade: newValue })"
      :data="visibilidade"
      text="Visibilidade no Catálogo"
      :label="{ textAlign: 'left', marginTop: '8px', marginLeft: '3px' }"
      :input="{ width: '99.5%', padding: '2.8%', paddingLeft: '1.2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <button @click="update">Atualizar</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CloseIcon from '../Icons/CloseIcon'
import InputReg from '../Produtos/Register/InputReg'
import InputSelect from '../Produtos/Register/InputSelect'
export default {
  name: 'FastProdEdit',
  components: { CloseIcon, InputReg, InputSelect },
  data () {
    return {
      visibilidade: [
        { name: 'Loja e resultado de pesquisa' },
        { name: 'Apenas na loja' },
        { name: 'Apenas nos resultados de pesquisa' },
        { name: 'Oculto' }
      ]
    }
  },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  },
  methods: {
    ...mapActions(['SetModal', 'ChangeProdEdit', 'SetModal01', 'PushMsg']),
    close () {
      this.SetModal({ component: '', active: false })
      this.SetModal01({ component: '', active: false })
    },
    update () {
      this.PushMsg({ msg: 'Produto atualizado com sucesso', color: '#326e3d' })
        .then(() => this.close())
    }
  }
}
</script>

<style scoped>
.FastProdEdit {
  width: 40%;
  height: 65%;
  position: absolute;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding-bottom: 2.5%;
}

.header {
  display: flex;
  padding: 3%;
}

.label {
  width: 50%;
  text-align: left;
  font-weight: bold;
}

.close {
  width: 50%;
  text-align: right;
}

.cont {
  padding: 3%;
  padding-top: 0%;
}

button {
  border: 0;
  font-size: 16px;
  padding: 2%;
  border-radius: 5px;
  background-color: #333333;
  color: #FFFFFF;
  cursor: pointer;
}
</style>
