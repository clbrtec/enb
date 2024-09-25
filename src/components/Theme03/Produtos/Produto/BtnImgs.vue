<template>
  <div class='BtnImgs'>
    <button @click="$router.push('/produtoview')">Ver Fotos</button>
  </div>
</template>

<script>
export default {
  name: 'BtnImgs'
}
</script>

<style scoped>
.BtnImgs {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
}

button {
  border: 0;
  background-color: orange;
  padding: 2%;
  border-radius: 8px;
  cursor: pointer;
}
</style>
