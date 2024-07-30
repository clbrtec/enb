<template>
  <div class='PedidoView'>
    <div class="numero-status">
      <div>Pedido #{{ PedidoView.id }}</div>
      <div class="status">{{ status }}</div>
    </div>
    <div class="title">
      Informações do cliente
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="PedidoView.usuario.usuario"
      text="Usuário"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="PedidoView.usuario.email"
      text="Email"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="PedidoView.usuario.nome"
      text="Primeiro nome"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="PedidoView.usuario.sobrenome"
      text="Sobrenome"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="PedidoView.usuario.cpf"
      text="CPF"
      :cont="{ width: '30%', paddingLeft: '0.6%' }"
      :label="{ textAlign: 'left', marginLeft: '1%' }"
      :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="PedidoView.usuario.celular"
      text="Celular"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '3%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="PedidoView.usuario.cep"
      text="CEP"
      :cont="{ width: '18.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="PedidoView.usuario.bairro"
      text="Bairro"
      :cont="{ width: '30%', paddingLeft: '0.6%' }"
      :label="{ textAlign: 'left', marginLeft: '1%' }"
      :input="{ fontSize: '20px', padding: '2.4%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="PedidoView.usuario.endereco"
      text="Endereço"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '3%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="PedidoView.usuario.numero"
      text="Número"
      :cont="{ width: '18.5%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '4%', width: '92%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="block">
      <input-reg
      disabled
      :value="PedidoView.usuario.cidade"
      text="Cidade"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
      <input-reg
      disabled
      :value="PedidoView.usuario.uf"
      text="Estado(UF)"
      :cont="{ width: '50%' }"
      :label="{ textAlign: 'left', marginLeft: '2%' }"
      :input="{ fontSize: '20px', padding: '1.5%', width: '94%', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="title">
      Itens do pedido
    </div>
    <pedido-header-view/>
    <pedido-item-view
    v-for="(i, k) in PedidoView.itens"
    :key="k"
    :data="i"
    />
    <div class="values">
      <div class="desc">Desconto:</div>
      <div class="valor">R$ 0.00</div>
    </div>
    <div class="values bold">
      <div class="desc">Total do pedido:</div>
      <div class="valor">R$ {{ total }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputReg from '../Produtos/Register/InputReg'
import PedidoHeaderView from './Itens/PedidoHeaderView'
import PedidoItemView from './Itens/PedidoItemView'
export default {
  name: 'PedidoView',
  components: { InputReg, PedidoHeaderView, PedidoItemView },
  computed: {
    ...mapGetters(['PedidoView']),
    status () {
      if (this.PedidoView.status === 1) {
        return 'Concluído'
      }
      return 'Recebido'
    },
    total () {
      return this.PedidoView.itens.map(i => i.preco * i.qtda).reduce((p, c) => c + p, 0)
    }
  }
}
</script>

<style scoped>
.PedidoView {
  width: 100%;
  height: 84%;
  padding-bottom: 7%;
  overflow: auto;
}

.numero-status {
  display: flex;
  align-items: center;
  padding: 1.5%;
  font-size: 20px;
  color: #a50201;
}

.status {
  background-color: #20c997;
  color: #FFFFFF;
  font-size: 16px;
  padding: 0.4%;
  border-radius: 5px;
  margin-left: 1%;
}

.title {
  text-align: left;
  padding: 1.5%;
  font-size: 20px;
  font-weight: bold;
}

.block {
  display: flex;
  padding: 0.5%;
}

.values {
  display: flex;
  justify-content: end;
  padding: 1%;
}

.desc {
  width: 15%;
  text-align: right;
}

.valor {
  width: 15%;
}

.bold {
  font-size: 18px;
  font-weight: bold;
}
</style>
