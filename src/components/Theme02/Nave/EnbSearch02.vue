<template>
  <div class='EnbSearch02'>
    <input type="text">
    <button>Buscar</button>
  </div>
</template>

<script>
export default {
  name: 'EnbSearch02'
}
</script>

<style scoped>
.EnbSearch02 {
  width: 40%;
  display: flex;
}

input {
  border: 0;
  font-size: 16px;
  padding: 2%;
  background-color: #CCCCCC;
}

input:focus {
  outline: none;
}

button {
  border: 0;
  font-size: 12px;
  width: 18%;
  cursor: pointer;
}
</style>
