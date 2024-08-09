<template>
  <div class='UserPermission'>
    <div class="cont-label">Permisssões do usuário:</div>
    <div class="cont">
      <user-permission-list
      v-for="(data, key) in UsersPermission"
      :key="key"
      :data="data"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserPermissionList from './UserPermissionList'
export default {
  name: 'UserPermission',
  components: { UserPermissionList },
  computed: {
    ...mapGetters(['UsersPermission'])
  }
}
</script>

<style scoped>
.cont-label {
  text-align: left;
  padding: 1%;
}

.cont {
  padding: 2%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
}
</style>
