<template>
  <div class='EnbPedidos'>
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
  name: 'EnbPedidos',
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
.EnbPedidos {
  width: 80%;
  min-height: 462px;
  margin: auto;
  padding-top: 6%;
}

.cont {
  width: 100%;
}
</style>
