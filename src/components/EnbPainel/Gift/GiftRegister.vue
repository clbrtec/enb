<template>
  <div class='GiftRegister'>
    <div class="block-left">
      <input-reg
      text="Código"
      :cont="{ width: '100%', textAlign: 'left' }"
      :label="{ marginLeft: '3px' }"
      :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-select
      text="Tipo de desconto"
      :data="tipo"
      :label="{ textAlign: 'left', marginTop: '10px', marginLeft: '5px' }"
      :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      text="Valor do cupom"
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
        cancel-text="Cancelar">
          <template #trigger>
            <input class="date-select">
          </template>
        </VueDatePicker>
      </div>
      <div class="cont-check">
        <input type="checkbox">
        <span>Permitir fréte grátis</span>
      </div>
      <div class="cont-check">
        <input type="checkbox">
        <span>Uso individual</span>
      </div>
      <div class="cont-check">
        <input type="checkbox">
        <span>Excluir Itens de Venda</span>
      </div>
    </div>
    <div class="block-right">
      <input-reg
      text="Gasto mínimo"
      :cont="{ width: '100%', textAlign: 'left' }"
      :label="{ marginLeft: '3px' }"
      :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      text="Gasto máximo"
      :cont="{ width: '100%', textAlign: 'left' }"
      :label="{ marginLeft: '3px', marginTop: '10px' }"
      :input="{ fontSize: '26px', padding: '1.5%', width: '97%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <multi-select
      label="Produtos"
      />
    </div>
  </div>
</template>

<script>
import InputReg from '@/components/EnbPainel/Produtos/Register/InputReg'
import InputSelect from '@/components/EnbPainel/Produtos/Register/InputSelect'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import MultiSelect from './Register/MultiSelect'
export default {
  name: 'GiftRegister',
  components: { InputReg, InputSelect, VueDatePicker, MultiSelect },
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
  }
}
</script>

<style scoped>
.GiftRegister {
  width: 98%;
  height: 98%;
  display: flex;
  padding: 1%;
  overflow: auto;
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
</style>
