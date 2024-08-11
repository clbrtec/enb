<template>
  <div class='UserPermission'>
    <div class="cont-label">Permissões do usuário:</div>
    <div class="cont">
      <user-permission-list
      v-for="(data, key) in SelectedUserEdit.permission"
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
    ...mapGetters(['SelectedUserEdit'])
  }
}
</script>

<style scoped>
.cont-label {
  text-align: left;
  padding: 1%;
  font-size: 12px
}

.cont {
  padding: 2%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
}
</style>
