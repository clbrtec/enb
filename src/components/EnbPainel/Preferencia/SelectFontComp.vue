<template>
  <div class='SelectFont'>
    <input-select
    text="Fonte"
    :data="Fonts"
    :value="value"
    @update:modelValue="newValue => $emit('update:modelValue', newValue)"
    :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '2px', fontSize: '16px' }"
    :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputSelect from '../Produtos/Register/InputSelect'
export default {
  name: 'SelectFont',
  components: { InputSelect },
  emits: ['update:modelValue'],
  props: ['value'],
  computed: {
    ...mapGetters(['Fonts'])
  } 
}
</script>