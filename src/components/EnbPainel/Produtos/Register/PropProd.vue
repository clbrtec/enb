<template>
  <div class='PropProd'>
    <div><input type="checkbox" @change="updateActive" :checked="data.active">{{ data.name }}</div>
    <div>
      <label style="font-size: 12px; padding: 3px;" v-if="data.values.length">Valores:</label>
      <div class="cont-values" v-if="data.values.length">
        <div
        class="value"
        v-for="(value, k) in data.values"
        :key="k"
        >
          <input type="checkbox" @change="updateValue(value.id)" :checked="value.active">
          {{ value.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PropProd',
  props: ['data'],
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters(['PropsProd', 'SelectedProdEdit'])
  },
  created () {
    this.SyncProps({ PropsProd: this.PropsProd, SelectedProdEdit: this.SelectedProdEdit })
  },
  methods: {
    ...mapActions(['ChangePropProd', 'ChangeProdEdit', 'SyncProps']),
    updateValue (valueID) {
      let values = this.PropsProd.filter(p => p.id === this.data.id)[0].values
      values.map(v => {
        if(v.id === valueID) {
          v.active = !v.active
        }
      })
      this.ChangePropProd({ id: this.data.id, prop: { values: values } })
        .then(() => this.ChangeProdEdit({ atributos: this.PropsProd }))
    },
    updateActive () {
      this.ChangePropProd({ id: this.data.id, prop: { active: !this.data.active } })
        .then(() => this.ChangeProdEdit({ atributos: this.PropsProd }))
    }
  }
}
</script>

<style scoped>
.PropProd {
  border: thin solid #CCCCCC;
  border-radius: 5px;
  padding: 1.5%;
  margin-top: 1%;
  text-align: left
}

.cont-values {
  display: flex;
  flex-wrap: wrap;
  padding: 1.5%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
  font-size: 14px;
}

.value-btn {
  display: flex;
  justify-content: end;
  align-items: end;
}

.value {
  display: flex;
  align-items: center;
  margin: 0%;
}

button {
  border: 0;
  padding: 0.92%;
  height: 35px;
  border-radius: 5px;
  background-color: #CCCCCC;
  cursor: pointer;
}
</style>
