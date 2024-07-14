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
      <button @click="$refs.in.click()">Selecionar arquivos</button>
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
    ...mapActions(['PushImg']),
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
}
</style>
