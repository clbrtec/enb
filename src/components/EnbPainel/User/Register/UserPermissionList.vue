<template>
  <div
  class='UserPermissionList'
  :class="{ nivel1: data.nivel === 1 }"
  >
    <div><input @change="e => ChangeUserPermission(data)" type="checkbox" :checked="data.active"></div>
    <div :class="{ parent: data.parent === 0 }">{{ data.name }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UserPermissionList',
  props: ['data'],
  methods: {
    ...mapActions(['ChangeUserPermission'])
  }
}
</script>

<style scoped>
.UserPermissionList {
  display: flex;
  align-items: center;
  padding: 1%;
}

.nivel1 {
  padding-left: 3%;
}

.parent {
  font-weight: bold;
}
</style>
