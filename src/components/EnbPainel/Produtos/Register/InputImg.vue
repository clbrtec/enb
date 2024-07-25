<template>
  <div class='InputImg'>
    <div>
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
  width: 28%;
  padding: 2%;
  padding-top: 0;
}
</style>
