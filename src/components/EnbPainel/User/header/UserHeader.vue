<template>
  <div class='UserHeader'>
    <div style="width: 18%">
      Usuário
    </div>
    <div style="width: 16%">
      Nome
    </div>
    <div style="width: 16%">
      Sobrenome
    </div>
    <div style="width: 16%">
      Email
    </div>
    <div style="width: 18%">
      Status
    </div>
    <div style="width: 16%">
      Ações
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHeader'
}
</script>

<style scoped>
.UserHeader {
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding: 1%;
}
</style>
