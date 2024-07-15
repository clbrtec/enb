<template>
  <div class='VisibProd'>
    <input-select
    :data="visibilidade"
    text="Visibilidade no Catálogo"
    :label="{ textAlign: 'left', marginTop: '9%', marginLeft: '2%' }"
    :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
  </div>
</template>

<script>
import InputSelect from './InputSelect'
export default {
  name: 'VisibProd',
  components: { InputSelect },
  data () {
    return {
      visibilidade: [
        'Loja e resultado de pesquisa',
        'Apenas na loja',
        'Apenas nos resultados de pesquisa',
        'Oculto'
      ]
    }
  }
}
</script>

<style scoped>
.VisibProd {
  width: 50%;
}
</style>
