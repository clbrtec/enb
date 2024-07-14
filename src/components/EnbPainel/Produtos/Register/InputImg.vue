<template>
  <div class='InputImg'>
    <div style="display: flex">
      <input-img-prod/>
      <select-categ/>
    </div>
    <div style="display: flex">
      <visib-prod/>
      <estoque-prod/>
    </div>
  </div>
</template>

<script>
import InputImgProd from './InputImgProd'
import SelectCateg from './SelectCateg'
import VisibProd from './VisibProd'
import EstoqueProd from './EstoqueProd'
export default {
  name: 'InputImg',
  components: { InputImgProd, SelectCateg, VisibProd, EstoqueProd }
}
</script>

<style scoped>
.InputImg {
  width: 50%;
}
</style>
