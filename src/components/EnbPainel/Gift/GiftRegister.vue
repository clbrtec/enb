<template>
  <div class='GiftRegister'>
    <div class="cont-btn">
      <button v-if="$route.path !== '/painel/gift/update'" @click="push">Adicionar</button>
      <button v-if="$route.path === '/painel/gift/update'" @click="update">Atualizar</button>
    </div>
    <div class="cont-form">
      <div class="block-left">
        <input-reg
        text="Código"
        :value="SelectedGiftEdit.codigo"
        @update:modelValue="newValue => ChangeGiftEdit({ codigo: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-select
        text="Tipo de desconto"
        :value="SelectedGiftEdit.tipo"
        @update:modelValue="newValue => ChangeGiftEdit({ tipo: newValue })"
        :data="tipo"
        :label="{ textAlign: 'left', marginTop: '10px', marginLeft: '5px' }"
        :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Valor do cupom"
        :value="SelectedGiftEdit.valor"
        @update:modelValue="newValue => ChangeGiftEdit({ valor: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <div>
          <div class="label">Validade do cupom:</div>
          <VueDatePicker
          teleport-center
          locale="pt-br"
          select-text="Selecionar"
          cancel-text="Cancelar"
          @update:model-value="newValue => ChangeGiftEdit({ validade: newValue })"
          >
            <template #trigger>
              <input :value="format(SelectedGiftEdit.validade)" class="date-select">
            </template>
          </VueDatePicker>
        </div>
        <input-reg
        text="Limite por cupom"
        :value="SelectedGiftEdit.limiteCupom"
        @update:modelValue="newValue => ChangeGiftEdit({ limiteCupom: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Limite por N produtos"
        :value="SelectedGiftEdit.limiteNprodutos"
        @update:modelValue="newValue => ChangeGiftEdit({ limiteNprodutos: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Limite por usuário"
        :value="SelectedGiftEdit.limiteUser"
        @update:modelValue="newValue => ChangeGiftEdit({ limiteUser: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <div class="cont-check">
          <input
          :checked="SelectedGiftEdit.freteGratis"
          @change="e => ChangeGiftEdit({ freteGratis: !SelectedGiftEdit.freteGratis })"
          type="checkbox">
          <span>Permitir fréte grátis</span>
        </div>
        <div class="cont-check">
          <input
          :checked="SelectedGiftEdit.individual"
          @change="e => ChangeGiftEdit({ individual: !SelectedGiftEdit.individual })"
          type="checkbox">
          <span>Uso individual</span>
        </div>
        <div class="cont-check">
          <input
          :checked="SelectedGiftEdit.itensVendaDel"
          @change="e => ChangeGiftEdit({ itensVendaDel: !SelectedGiftEdit.itensVendaDel })"
          type="checkbox">
          <span>Excluir Itens de Venda</span>
        </div>
        <div class="foo"></div>
      </div>
      <div class="block-right">
        <input-reg
        text="Gasto mínimo"
        :value="SelectedGiftEdit.gastoMin"
        @update:modelValue="newValue => ChangeGiftEdit({ gastoMin: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <input-reg
        text="Gasto máximo"
        :value="SelectedGiftEdit.gastoMax"
        @update:modelValue="newValue => ChangeGiftEdit({ gastoMax: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
        <multi-select
        label="Produtos"
        store="ProdutosGift"
        :src="ProdutosTotal01.map(p => ({ id: p.id, name: p.name }))"
        />
        <multi-select
        label="Excluir produtos"
        store="DelProdutosGift"
        :src="ProdutosTotal01.map(p => ({ id: p.id, name: p.name }))"
        />
        <multi-select
        label="Categorias"
        store="CategoriasGift"
        :noSearch="true"
        :srcFixed="Categorias.filter(c => c.name !== '')"
        />
        <multi-select
        label="Excluir categorias"
        store="DelCategoriasGift"
        :noSearch="true"
        :srcFixed="Categorias.filter(c => c.name !== '')"
        />
        <input-reg
        text="Emails restritos"
        :value="SelectedGiftEdit.emailsDel"
        @update:modelValue="newValue => ChangeGiftEdit({ emailsDel: newValue })"
        :cont="{ width: '100%', textAlign: 'left' }"
        :label="{ marginLeft: '3px', marginTop: '10px' }"
        :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InputReg from '@/components/EnbPainel/Produtos/Register/InputReg'
import InputSelect from '@/components/EnbPainel/Produtos/Register/InputSelect'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import MultiSelect from './Register/MultiSelect'
export default {
  name: 'GiftRegister',
  components: { InputReg, InputSelect, VueDatePicker, MultiSelect },
  computed: {
    ...mapGetters(['ProdutosTotal01', 'Categorias', 'SelectedGiftEdit'])
  },
  data () {
    return {
      tipo: [
        {
          id: 0,
          name: 'Desconto Percentual'
        },
        {
          id: 1,
          name: 'Desconto de carrinho fixo'
        },
        {
          id: 1,
          name: 'Desconto de produto fixo'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['ChangeGiftEdit', 'PushGift', 'PushMsg']),
    format (date) {
      if (date === '') {
        return ''
      }
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    },
    push () {
      console.log(this.$store.state.System.ProdutosGift)
      this.PushGift({
        gift: this.SelectedGiftEdit,
        produtos: this.$store.state.System.ProdutosGift,
        produtoDel: this.$store.state.System.DelProdutosGift,
        categorias: this.$store.state.System.CategoriasGift,
        categoriasDel: this.$store.state.System.DelCategoriasGift
      })
        .then(() => {
          this.PushMsg({ msg: 'Cupom cadastrado com sucesso.', color: 'green' })
        })
    },
    update () {
      this.ChangeGiftEdit({
        produtos: this.$store.state.System.ProdutosGift,
        produtoDel: this.$store.state.System.DelProdutosGift,
        categorias: this.$store.state.System.CategoriasGift,
        categoriasDel: this.$store.state.System.DelCategoriasGift
      })
      .then(() => {
        this.PushMsg({ msg: 'Cupom atualizado com sucesso.', color: 'green' })
      })
    }
  }
}
</script>

<style scoped>
.GiftRegister {
  width: 98%;
  height: 95%;
  padding: 1%;
  overflow: auto;
}

.cont-form {
  display: flex;
}

.block-left {
  width: 50%;
  padding: 1%;
}

.block-right {
  width: 50%;
  padding: 1%;
}

.label {
  font-size: 12px;
  text-align: left;
  margin-left: 3px;
  margin-top: 10px;
  padding-bottom: 1%;
}

.date-select {
  width: 95.5%;
  padding: 2.4%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
  font-size: 18px;
}

.cont-check {
  text-align: left;
  padding-top: 3%;
}

.foo {
  width: 100%;
  height: 15%;
}

.cont-btn {
  padding-bottom: 1%;
  text-align: right;
}

button {
  border: 0;
  font-size: 18px;
  padding: 1%;
  background-color: #000000;
  color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 2%
}
</style>
