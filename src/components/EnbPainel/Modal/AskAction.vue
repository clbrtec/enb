<template>
  <div class='FastProdEdit'>
    <div class="header">
      <div class="label">Atenção</div>
      <div class="close">
        <close-icon @click="close"/>
      </div>
    </div>
    <div class="cont">
      {{ EnbModal.ask }}
    </div>
    <div class="cont-btn">
      <button @click="close">Não</button>
      <button @click="action">Sim</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CloseIcon from '../Icons/CloseIcon'
export default {
  name: 'FastProdEdit',
  components: { CloseIcon },
  computed: {
    ...mapGetters(['EnbModal'])
  },
  methods: {
    ...mapActions(['SetModal', 'SetModal01', 'DeleteProd', 'DeletePedido', 'DeleteGift', 'DeleteUser']),
    close () {
      this.SetModal({ component: '', active: false })
      this.SetModal01({ component: '', active: false })
    },
    action () {
      this[this.EnbModal.action](this.EnbModal.payload)
      this.close()
    }
  }
}
</script>

<style scoped>
.FastProdEdit {
  width: 40%;
  position: absolute;
  margin: auto;
  background-color: #FFFFFF;
  border-radius: 5px;
}

.header {
  display: flex;
  padding: 3%;
}

.label {
  width: 50%;
  text-align: left;
  font-weight: bold;
}

.close {
  width: 50%;
  text-align: right;
}

.cont {
  padding: 3%;
  padding-top: 0%;
  font-size: 22px;
}

.cont-btn {
  padding: 3%;
}

button {
  border: 0;
  margin: 2%;
  padding: 2%;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
