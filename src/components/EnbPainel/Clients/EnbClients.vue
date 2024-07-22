<template>
  <div class='EnbClients'>
    <div class="header">
      <client-action/>
      <clients-header/>
    </div>
    <div class="cont">
      <clients-list
      v-for="(c, key) in 3"
      :key="key"
      />
    </div>
  </div>
</template>

<script>
import ClientsHeader from './Header/ClientsHeader'
import ClientAction from './Header/ClientAction'
import ClientsList from './Itens/ClientsList'
export default {
  name: 'EnbClients',
  components: { ClientsHeader, ClientAction, ClientsList }
}
</script>

<style scoped>
.EnbClients {
  width: 96%;
  height: 96%;
  padding: 2%;
  padding-top: 0%;
}

.header {
}

.cont {
  width: 100%;
  height: 84%;
  overflow: auto;
}
</style>
