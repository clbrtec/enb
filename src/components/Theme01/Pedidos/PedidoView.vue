<template>
  <div class='PedidoView'>
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
import PedidoHeaderView from './Itens/PedidoHeaderView'
import PedidoItemView from './Itens/PedidoItemView'
export default {
  name: 'PedidoView',
  components: { PedidoHeaderView, PedidoItemView },
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
  width: 75%;
  height: 80%;
  padding-bottom: 7%;
  margin: auto;
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
