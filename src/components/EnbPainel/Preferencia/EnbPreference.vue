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
      <select-logo/>
      <select-font/>
      <pref-comp
      comp="nave"
      label="Topo(Navegação)"
      @update:corBackground="newValue => UpdatePrefComp({ comp: 'nave', prop: 'corBackground', value: newValue })"
      @update:corFont="newValue => UpdatePrefComp({ comp: 'nave', prop: 'corFont', value: newValue })"
      @update:font="newValue => UpdatePrefComp({ comp: 'nave', prop: 'font', value: newValue })"
      />
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import InputSelect from '../Produtos/Register/InputSelect'
import SelectLogo from './SelectLogo'
import SelectFont from './SelectFont'
import PrefComp from './PrefComp'
export default {
  name: 'EnbPreference',
  components: { InputSelect, SelectLogo, SelectFont, PrefComp },
  computed: {
    ...mapGetters(['Themes'])
  },
  methods: {
    ...mapActions(['ChangeTheme', 'UpdatePrefComp'])
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
