<template>
  <div class='ClientView'>
    <div class="title">
      {{ ClientView.nome }} {{ ClientView.sobrenome }} ({{ ClientView.email }})
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.usuario"
      text="Usuário"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.email"
      text="Email"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.nome"
      text="Primeiro nome"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.sobrenome"
      text="Sobrenome"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.cpf"
      text="CPF"
      :cont="{ width: '30%', paddingLeft: '0.6%' }"
      :label="{ textAlign: 'left', marginLeft: '1%' }"
      :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.celular"
      text="Celular"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '3%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.cep"
      text="CEP"
      :cont="{ width: '18.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.bairro"
      text="Bairro"
      :cont="{ width: '30%', paddingLeft: '0.6%' }"
      :label="{ textAlign: 'left', marginLeft: '1%' }"
      :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.endereco"
      text="Endereço"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '3%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.numero"
      text="Número"
      :cont="{ width: '18.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="ClientView.cidade"
      text="Cidade"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="ClientView.uf"
      text="Estado(UF)"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="title">
      Pedidos
    </div>
    <div class="cont-pedidos">
      <pedidos-header/>
    </div>
    <div class="cont">
      <pedidos-list
      v-for="(p, key) in PedidosClient"
      :key="key"
      :data="p"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputReg from '../Produtos/Register/InputReg'
import PedidosHeader from '../Pedidos/header/PedidosHeader'
import PedidosList from '../Pedidos/Itens/PedidosList'
export default {
  name: 'ClientView',
  components: { InputReg, PedidosHeader, PedidosList },
  computed: {
    ...mapGetters(['ClientView', 'Pedidos']),
    PedidosClient () {
      return this.Pedidos.filter(p => p.usuario.id === this.ClientView.id)
    }
  }
}
</script>

<style scoped>
.ClientView {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.title {
  display: flex;
  padding: 1.5%;
  font-size: 22px;
}

.block {
  display: flex;
  padding: 0.5%;
}

.cont-pedidos {
  width: 95%;
  margin: auto;
}

.cont {
  width: 95%;
  margin: auto;
  padding-bottom: 10%;
}
</style>
