<template>
  <div class='UploadImg'>
    <div class="cont-img">
      <view-img
      v-for="(img, key) in UploadImg"
      :key="key"
      :data="img"
      />
    </div>
    <div class="cont-btn">
      <button @click="$refs.in.click()">Adicionar arquivos</button>
      <button @click="SetModal({ component: '', active: false })">Selecionado</button>
      <input ref="in" v-show="false" type="file" @change="inFile" multiple/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ViewImg from './ViewImg'
export default {
  name: 'UploadImg',
  components: { ViewImg },
  computed: {
    ...mapGetters(['UploadImg'])
  },
  methods: {
    ...mapActions(['PushImg', 'SetModal']),
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
.UploadImg {
  width: 100%;
  height: 78%;
}

.cont-btn {
  width: 96%;
  position: absolute;
  padding: 2%;
  bottom: 0;
}

.cont-img {
  width: 98%;
  padding: 1%;
  display: flex;
  align-items: first baseline;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
}

button {
  border: 0;
  font-size: 16px;
  padding: 2%;
  margin: 1%;
  border-radius: 5px;
  background-color: #333333;
  color: #FFFFFF;
  cursor: pointer;
}
</style>
