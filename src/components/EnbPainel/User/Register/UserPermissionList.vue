<template>
  <div
  class='UserPermissionList'
  :class="{ nivel1: data.nivel === 1 }"
  >
    <div><input type="checkbox"></div>
    <div :class="{ parent: data.parent === 0 }">{{ data.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserPermissionList',
  props: ['data']
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
