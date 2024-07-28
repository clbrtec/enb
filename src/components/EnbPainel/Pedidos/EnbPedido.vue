<template>
  <div class='EnbPedido'>
    <div class="header">
      <pedidos-header/>
    </div>
    <div class="cont">
      <pedidos-list
      v-for="(p, key) in Pedidos"
      :key="key"
      :data="p"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PedidosHeader from './header/PedidosHeader'
import PedidosList from './Itens/PedidosList'
export default {
  name: 'EnbPedido',
  components: { PedidosHeader, PedidosList },
  computed: {
    ...mapGetters(['Pedidos'])
  }
}
</script>

<style scoped>
.EnbPedido {
  width: 96%;
  height: 96%;
  padding: 2%;
  padding-top: 0%;
}

.cont {
  width: 100%;
  height: 84%;
  overflow: auto;
}
</style>
