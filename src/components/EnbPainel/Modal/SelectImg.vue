<template>
  <div class='SelectImg'>
    <select-img-header v-model:view="currentView"/>
    <component :is="currentView"/>
  </div>
</template>

<script>
import SelectImgHeader from './SelectImg/SelectImgHeader'
import UploadImg from './SelectImg/UploadImg'
export default {
  name: 'SelectImg',
  components: { SelectImgHeader, UploadImg },
  data () {
    return {
      currentView: 'UploadImg'
    }
  }
}
</script>

<style scoped>
.SelectImg {
  width: 50%;
  height: 70%;
  position: absolute;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 5px;
}
</style>
