<template>
  <div class='InputImg'>
    <div style="display: flex">
      <input-img-prod/>
      <select-categ/>
    </div>
  </div>
</template>

<script>
import InputImgProd from './InputImgProd'
import SelectCateg from './SelectCateg'
export default {
  name: 'InputImg',
  components: { InputImgProd, SelectCateg }
}
</script>

<style scoped>
.InputImg {
  width: 50%;
}
</style>
