<template>
  <div class='InputIconCateg'>
    <button @click="$refs.in.click()">Selecionar ícone</button>
    <input ref="in" v-show="false" type="file" @change="inFile"/>
  </div>
</template>

<script>
export default {
  name: 'InputIconCateg',
  emits: ['update:modelValue'],
  methods: {
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
        this.PushImg(reader.result)
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
.InputIconCateg {
  margin-top: 15px;
}

button {
  width: 99%;
  padding: 2%;
  border: 0;
  border-radius: 5px;
  background-color: #CCCCCC;
  cursor: pointer;
}
</style>
