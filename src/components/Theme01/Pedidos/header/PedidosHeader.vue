<template>
  <div class='PedidosHeader'>
    <div style="width: 5%">
      <status-icon
      :options="{ width: '15px', height: '15px' }"
      text="Status"
      :active="true"
      :optionsLabel="{ marginTop: '50px' }"
      />
    </div>
    <div style="width: 10%">
      Pedido
    </div>
    <div style="width: 25%">
      Comprado
    </div>
    <div style="width: 30%">
      Endereço de entrega
    </div>
    <div style="width: 15%">
      Vendas brutas
    </div>
    <div style="width: 10%">
      data
    </div>
    <div style="width: 6%">
      Ações
    </div>
  </div>
</template>

<script>
import StatusIcon from '@/components/EnbPainel/Icons/StatusIcon'
export default {
  name: 'PedidosHeader',
  components: { StatusIcon }
}
</script>

<style scoped>
.PedidosHeader {
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding: 1%;
}
</style>
