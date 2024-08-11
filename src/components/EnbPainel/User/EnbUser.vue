<template>
  <div class='EnbUser'>
    <div class="cont-btn">
      <button @click="$router.push('/painel/users/register')">Adicionar</button>
    </div>
    <user-header/>
    <user-list
    v-for="(data, key) in Users"
    :key="key"
    :data="data"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserHeader from './header/UserHeader'
import UserList from './Itens/UserList'
export default {
  name: 'EnbUser',
  components: { UserHeader, UserList },
  computed: {
    ...mapGetters(['Users'])
  }
}
</script>

<style scoped>
.EnbUser {
  width: 98%;
  height: 98%;
  padding: 1%;
}

.cont-btn {
  padding-bottom: 1%;
  text-align: right;
}

button {
  border: 0;
  font-size: 18px;
  padding: 1%;
  background-color: #000000;
  color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 2%
}
</style>
