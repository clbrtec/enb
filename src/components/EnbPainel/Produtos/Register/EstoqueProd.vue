<template>
  <div class='EstoqueProd'>
    <div class="check">
      <input type="checkbox" @change="toggleView=!toggleView">
      <label>Gerenciar estoque?</label>
    </div>
    <input-select
    v-if="toggleView"
    :data="status"
    text="Status do estoque"
    :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '7%' }"
    :input="{ width: '90%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <input-reg
    v-if="!toggleView"
    text="Quantidade de estoque"
    type="number"
    :label="{ textAlign: 'left', marginLeft: '7%', marginTop: '8px' }"
    :input="{ fontSize: '18px', padding: '2%', width: '85%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <input-select
    v-if="!toggleView"
    :data="pendentes"
    text="Permitir Pedidos pendentes?"
    :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '7%' }"
    :input="{ width: '90%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
    <div class="check end">
      <input type="checkbox">
      <label>Vendido individualmente</label>
    </div>
  </div>
</template>

<script>
import InputSelect from './InputSelect'
import InputReg from './InputReg'
export default {
  name: 'EstoqueProd',
  components: { InputSelect, InputReg },
  data () {
    return {
      toggleView: true,
      status: [
        'Em estoque',
        'Fora de estoque',
        'Em atraso'
      ],
      pendentes: [
        'Não permitir',
        'Permitir mas informe ao cliente',
        'Permitir'
      ]
    }
  }
}
</script>

<style scoped>
.EstoqueProd {
  width: 50%;
}

.check {
  width: 87%;
  margin: auto;
  text-align: left;
}

label {
  padding-left: 1%;
}

.end {
  padding-top: 7%;
} 
</style>
