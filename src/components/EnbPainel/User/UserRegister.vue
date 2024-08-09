<template>
  <div class='UserRegister'>
    <div class="cont-form">
      <div class="block-left">
        <user-permission/>
      </div>
      <div class="block-right">right</div>
    </div>
  </div>
</template>

<script>
import UserPermission from './Register/UserPermission'
export default {
  name: 'UserRegister',
  components: { UserPermission }
}
</script>

<style scoped>
.UserRegister {
  width: 98%;
  height: 95%;
  padding: 1%;
  overflow: auto;
}

.cont-form {
  display: flex;
}

.block-left {
  width: 50%;
  padding: 1%;
}

.block-right {
  width: 50%;
  padding: 1%;
}
</style>
