<template>
  <div class='VisibProd'>
    <input-select
    :value="SelectedProdEdit.visibilidade"
    @update:model-value="newValue => ChangeProdEdit({ visibilidade: newValue })"
    :data="visibilidade"
    text="Visibilidade no Catálogo"
    :label="{ textAlign: 'left', marginTop: '9%', marginLeft: '2%' }"
    :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import InputSelect from './InputSelect'
export default {
  name: 'VisibProd',
  components: { InputSelect },
  data () {
    return {
      visibilidade: [
        { name: 'Loja e resultado de pesquisa' },
        { name: 'Apenas na loja' },
        { name: 'Apenas nos resultados de pesquisa' },
        { name: 'Oculto' }
      ]
    }
  },
  computed: {
    ...mapGetters(['SelectedProdEdit'])
  },
  methods: {
    ...mapActions(['ChangeProdEdit'])
  }
}
</script>

<style scoped>
.VisibProd {
  width: 50%;
}
</style>
