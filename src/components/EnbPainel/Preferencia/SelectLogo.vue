<template>
  <div class='SelectLogo'>
    <div class="label">
      Logomarca:
    </div>
    <div class="button">
      <input ref="in" v-show="false" type="file" @change="inFile"/>
      <button @click="$refs.in.click()">Selecione a logomarca</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SelectLogo',
  methods: {
    ...mapActions(['UpdateLogo']),
    inFile (e) {
      for (let key in e.target.files) {
        if (key !== 'length' && key !== 'item') {
          this.getBase64(e.target.files[key])
        }
      }
    },
    getBase64 (file) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.UpdateLogo(reader.result)
        // console.log(reader.result)
      }
      reader.onerror = (error) => {
        console.log('Error: ', error)
      }
    }
  }
}
</script>

<style scoped>
.SelectLogo {
  margin-top: 7px;
}

.label {
  font-size: 12px;
  text-align: left;
  margin-left: 5px;
}

button {
  border: 0;
  width: 100%;
  padding: 2%;
  border-radius: 5px;
  cursor: pointer;
  background-color: #CCCCCC;
  margin-top: 5px;
}
</style>
