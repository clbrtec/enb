<template>
  <div class='EnbPreference'>
    <div class="left">
      <input-select
      text="Modelos"
      :value="Themes.filter(t => t.active)[0].name"
      :data="Themes"
      @update:modelValue="newValue => ChangeTheme(newValue)"
      :label="{ textAlign: 'left', marginTop: '5px', marginLeft: '5px' }"
      :input="{ width: '100%', padding: '2%', fontSize: '16px', border: 'thin solid #CCCCCC', borderRadius: '5px' }"
      />
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InputSelect from '../Produtos/Register/InputSelect'
export default {
  name: 'EnbPreference',
  components: { InputSelect },
  computed: {
    ...mapGetters(['Themes'])
  },
  methods: {
    ...mapActions(['ChangeTheme'])
  }
}
</script>

<style scoped>
.EnbPreference {
  width: 96%;
  height: 96%;
  padding: 2%;
  display: flex;
}

.left {
  width: 50%;
}
</style>
