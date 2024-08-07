<template>
  <div class='GiftList'>
    <div style="width: 18%">
      Código
    </div>
    <div style="width: 16%">
      Tipo
    </div>
    <div style="width: 16%">
      Montante
    </div>
    <div style="width: 16%">
      Limite de uso
    </div>
    <div style="width: 18%">
      Data de validade
    </div>
    <div style="width: 16%">
      Ações
    </div>
  </div>
</template>

<script>
export default {
  name: 'GiftList'
}
</script>

<style scoped>
.GiftList {
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding: 1%;
}
</style>
