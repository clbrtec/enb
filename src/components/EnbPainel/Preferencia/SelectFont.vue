<template>
  <div class='SelectFont'>
    <input-select
    text="Fonte Padrão"
    :value="'teste'"
    :data="Fonts"
    @update:modelValue="newValue => UpdateFontDefault(newValue)"
    :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '5px' }"
    :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InputSelect from '../Produtos/Register/InputSelect'
export default {
  name: 'SelectFont',
  components: { InputSelect },
  computed: {
    ...mapGetters(['Fonts'])
  },
  methods: {
    ...mapActions(['UpdateFontDefault'])
  }
}
</script>