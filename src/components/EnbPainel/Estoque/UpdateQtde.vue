<template>
  <div class='UpdateQtde'>
    <input type="text">
    <div class="cont-btn-edit">
      <edit-icon :options="{ width: '25px', height: '25px' }" color="#FFFFFF"/>
    </div>
  </div>
</template>

<script>
import EditIcon from '../Icons/EditIcon'
export default {
  name: 'UpdateQtde',
  components: { EditIcon }
}
</script>

<style scoped>
.UpdateQtde {
  display: flex;
  width: 50%;
  border: thin solid #CCCCCC;
  background-color: green;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
}
.cont-btn-edit {
  background-color: #000000;
}

input {
  border: 0;
  width: 100%;
  text-align: right;
  padding-right: 10%;
}

input:focus {
  outline: none;
}
</style>
