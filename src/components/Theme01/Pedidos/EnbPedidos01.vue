<template>
  <div class='EnbPedidos01'>
    <pedidos-header/>
    <div class="cont">
      <pedidos-list
      v-for="(p, key) in pedidosProfile"
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
  name: 'EnbPedidos01',
  components: { PedidosHeader, PedidosList },
  computed: {
    ...mapGetters(['Pedidos', 'Profile']),
    pedidosProfile () {
      return this.Pedidos.filter(p => p.usuario.id === this.Profile.id)
    }
  }
}
</script>

<style scoped>
.EnbPedidos01 {
  width: 80%;
  margin: auto;
}

.cont {
  width: 100%;
}
</style>
