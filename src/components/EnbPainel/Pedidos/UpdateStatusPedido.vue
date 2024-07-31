<template>
  <div class='UpdateStatusPedido'>
    <div class="status">
      Status:
    </div>
    <div class="select">
      <select @change="select">
        <option
        :selected="data.status === s.value"
        v-for="(s, k) in status"
        :key="k"
        :value="s.value">
          {{ s.description }}
        </option>
      </select>
    </div>
    <button @click="UpdateStatusPedido({ id: data.id, status: value })">Atualizar</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UpdateStatusPedido',
  props: ['data'],
  data () {
    return {
      status: [
        {
          value: 0,
          description: 'Recebido'
        },
        {
          value: 1,
          description: 'Concluído'
        }
      ],
      value: null
    }
  },
  created () {
    this.value = this.data.status
  },
  methods: {
    ...mapActions(['UpdateStatusPedido']),
    select (e) {
      this.value = parseInt(e.target.value)
    }
  }
}
</script>

<style scoped>
.UpdateStatusPedido {
  display: flex;
  align-items: center;
  padding-left: 1.5%;
}

.status {
  font-size: 20px;
}

.select {
  margin-left: 1%;
  width: 20%;
}

select {
  width: 100%;
  padding: 3%;
  font-size: 18px;
  border: thin solid #CCCCCC;
  border-radius: 5px;
}

button {
  margin-left: 1%;
  border: 0;
  padding: 0.8%;
  border-radius: 5px;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #000000;
  cursor: pointer;
}
</style>
