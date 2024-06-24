<template>
  <div class='CompTop'>
    <div class="edit-theme">
      <enb-label text="Tema" config="font-weight:bold"/>
      <enb-check
      :start-state="checkThemes[0]"
      :options="{
        key: '',
        value: '',
        text: 'Basic',
        disabled: false,
        style: { border: 0, borderBottom: 'thin solid #CCCCCC', marginTop: '5%', marginBottom: '5%' },
        processing: false 
      }"
      @return-value="(e) => selectTheme('Basic')"
      />
      <enb-check
      :start-state="checkThemes[1]"
      :options="{
        key: '',
        value: '',
        text: 'Left',
        disabled: false,
        style: { border: 0, borderBottom: 'thin solid #CCCCCC', marginTop: '5%', marginBottom: '5%' },
        processing: false 
      }"
      @return-value="(e) => selectTheme('Left')"
      />
    </div>
    <div class="edit-logo">
      <enb-label text="Logo" config="font-weight:bold"/>
      <div class="edit-image">
        <enb-button text="Selecione a imagem" @click="file"/>
      </div>
    </div>
    <div class="edit-color-top">
      <enb-label text="Cor da barra" config="font-weight:bold"/>
      <div class="edit-color">
        <color-picker
        format="hex"
        v-model:pureColor="pureColor"
        @pure-color-change="(c) => selectTopColor({ name: selectedThemeTop.name, color: c })"
        pickerType="chrome"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EnbCheck from '@/components/EnbCheck.vue'
import EnbLabel from '../EnbLabel.vue';
import EnbButton from '../EnbButton.vue';
import { ColorPicker } from "vue3-colorpicker"
import "vue3-colorpicker/style.css"
export default {
  name: 'CompTop',
  components: { EnbCheck, EnbLabel, EnbButton, ColorPicker },
  computed: {
    ...mapGetters(['checkThemes', 'selectedThemeTop']),
    pureColor () {
      return this.selectedThemeTop.config.barColor
    }
  },
  methods: {
    ...mapActions(['selectTheme', 'selectTopColor']),
    file () {
      let file = document.createElement('input')
      file.type = 'file'
      file.click()
    }
  }
}
</script>

<style scoped>
.CompTop {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1%;
}

.edit-theme {
  width: 200px;
  height: 200px;
  padding: 1%;
  border-radius: 3px;
  margin: 1%;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 4px 1px #CCCCCC;
}

.edit-logo {
  width: 200px;
  height: 200px;
  padding: 1%;
  border-radius: 3px;
  margin: 1%;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 4px 1px #CCCCCC;
}

.edit-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.edit-color-top {
  width: 200px;
  height: 200px;
  padding: 1%;
  border-radius: 3px;
  margin: 1%;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 4px 1px #CCCCCC;
}

.edit-color {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}
</style>
