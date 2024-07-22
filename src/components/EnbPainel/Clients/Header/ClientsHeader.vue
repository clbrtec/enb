<template>
  <div class='ClientsHeader'>
    <div style="width: 12%">
      Nome
    </div>
    <div style="width: 12%">
      Usuário
    </div>
    <div style="width: 26%">
      Email
    </div>
    <div style="width: 10%">
      Localização
    </div>
    <div style="width: 10%">
      Pedidos
    </div>
    <div style="width: 10%">
      Dinheiro gasto
    </div>
    <div style="width: 14%">
      Último pedido
    </div>
    <div style="width: 6%">
      Ações
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsHeader',
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.ClientsHeader {
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding: 1%;
}
</style>
