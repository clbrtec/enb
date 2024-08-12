<template>
  <div class='UpdateQtde'>
    <input v-model="qtde" type="text">
    <div class="cont-btn-edit">
      <edit-icon
      @click="UpdateEstoqueQtde({ id: data.id, quantidade: qtde });qtde=0"
      :options="{ width: '25px', height: '25px' }" color="#FFFFFF"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EditIcon from '../Icons/EditIcon'
export default {
  name: 'UpdateQtde',
  components: { EditIcon },
  props: ['data'],
  methods: {
    ...mapActions(['UpdateEstoqueQtde'])
  },
  data () {
    return {
      qtde: 0
    }
  }
}
</script>

<style scoped>
.UpdateQtde {
  display: flex;
  width: 50%;
  border: thin solid #CCCCCC;
  background-color: green;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
}
.cont-btn-edit {
  background-color: #000000;
}

input {
  border: 0;
  width: 100%;
  text-align: center
}

input:focus {
  outline: none;
}
</style>
