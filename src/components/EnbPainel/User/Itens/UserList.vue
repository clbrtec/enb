<template>
  <div class='UserList'>
    <div style="width: 18%">
      {{ data.usuario }}
    </div>
    <div style="width: 16%">
      {{ data.nome }}
    </div>
    <div style="width: 16%">
      {{ data.sobrenome }}
    </div>
    <div style="width: 16%">
      {{ data.email }}
    </div>
    <div class="cont-status" style="width: 18%">
      <div :class="{ status: data.status, disable: !data.status }">{{ data.status ? 'Ativo' : 'Desativado' }}</div>
    </div>
    <div class="action" style="width: 16%">
      <disable-icon @click="UpdateStatusUser({ id: data.id, status: false })" v-if="data.status"/>
      <checked-icon @click="UpdateStatusUser({ id: data.id, status: true })" v-if="!data.status"/>
      <edit-icon @click="update"/>
      <delete-icon @click="del"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EditIcon from '../../Icons/EditIcon'
import DeleteIcon from '../../Icons/DeleteIcon'
import DisableIcon from '../../Icons/DisableIcon'
import CheckedIcon from '../../Icons/CheckedIcon'
export default {
  name: 'UserList',
  props: ['data'],
  components: { EditIcon, DeleteIcon, DisableIcon, CheckedIcon },
  methods: {
    ...mapActions(['SetModal', 'UpdateStatusUser', 'SetUserEdit']),
    del () {
      this.SetModal({ 
        component: 'AskAction',
        active: true,
        ask: 'Tem certeza que deseja excluir o usuário?',
        action: 'DeleteUser',
        payload: this.data
      })
    },
    update () {
      this.SetUserEdit(this.data)
        .then(() => this.$router.push('/painel/user/edit'))
    }
  }
}
</script>

<style scoped>
.UserList {
  display: flex;
  align-items: center;
  border-bottom: thin solid #CCCCCC;
  padding: 1%;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cont-status {
  display: flex;
  justify-content: center;
}

.status {
  width: 50%;
  background-color: green;
  padding: 2%;
  border-radius: 3px;
  color: #FFFFFF;
}

.disable {
  width: 50%;
  background-color: red;
  padding: 2%;
  border-radius: 3px;
  color: #FFFFFF;
}
</style>
