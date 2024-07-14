<template>
  <div class='SelectImgHeader'>
    <div @click="$emit('update:view', 'UploadImg')" class="link">Biblioteca de Imagens</div>
    <div class="btn">
      <close-icon @click="SetModal({ component: '', active: false })"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CloseIcon from '../../Icons/CloseIcon'
export default {
  name: 'SelectImgHeader',
  components: { CloseIcon },
  props: ['view'],
  emits: ['update:view'],
  methods: {
    ...mapActions(['SetModal'])
  }
}
</script>

<style scoped>
.SelectImgHeader {
  display: flex;
  padding: 2%;
}

.link {
  width: 30%;
  cursor: pointer;
}

.btn {
  width: 85%;
  display: flex;
  justify-content: end;
}
</style>
