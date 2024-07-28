<template>
  <div class='EnbClients'>
    <div class="header">
      <client-action/>
      <clients-header/>
    </div>
    <div class="cont">
      <clients-list
      v-for="(c, key) in Clients"
      :key="key"
      :data="c"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClientsHeader from './Header/ClientsHeader'
import ClientAction from './Header/ClientAction'
import ClientsList from './Itens/ClientsList'
export default {
  name: 'EnbClients',
  components: { ClientsHeader, ClientAction, ClientsList },
  computed: {
    ...mapGetters(['Clients'])
  }
}
</script>

<style scoped>
.EnbClients {
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
