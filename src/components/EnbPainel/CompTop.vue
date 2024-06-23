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
    <div class="edit-position-logo">
      <enb-label text="Posição logo" config="font-weight:bold"/>
      <enb-check
      :options="{
        key: '',
        value: '',
        text: 'Centro',
        disabled: false,
        style: { border: 0, borderBottom: 'thin solid #CCCCCC', marginTop: '5%', marginBottom: '5%' },
        processing: false 
      }"
      />
      <enb-check
      :options="{
        key: '',
        value: '',
        text: 'Esqueda',
        disabled: false,
        style: { border: 0, borderBottom: 'thin solid #CCCCCC', marginTop: '5%', marginBottom: '5%' },
        processing: false 
      }"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EnbCheck from '@/components/EnbCheck.vue'
import EnbLabel from '../EnbLabel.vue';
import EnbButton from '../EnbButton.vue';
export default {
  name: 'CompTop',
  components: { EnbCheck, EnbLabel, EnbButton },
  computed: {
    ...mapGetters(['checkThemes'])
  },
  methods: {
    ...mapActions(['selectTheme']),
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
  background-color: #FFFFFF
}

.edit-logo {
  width: 200px;
  height: 200px;
  padding: 1%;
  border-radius: 3px;
  margin: 1%;
  background-color: #FFFFFF
}

.edit-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.edit-position-logo {
  width: 200px;
  height: 200px;
  padding: 1%;
  border-radius: 3px;
  margin: 1%;
  background-color: #FFFFFF
}
</style>
