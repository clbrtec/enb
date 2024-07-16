<template>
  <div class='InputCateg'>
    <input @change="Update" :checked="data.active" type="checkbox">
    <label>{{ data.name }}</label>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'InputCateg',
  props: ['data'],
  methods: {
    ...mapActions(['UpdateProdCateg', 'ChangeProdEdit']),
    Update () {
      let checked = !this.data.active
      this.UpdateProdCateg({ name: this.data.name, active: checked })
      this.ChangeProdEdit({ categoria: '' })
      if (checked) {
        this.ChangeProdEdit({ categoria: this.data.name })
      }
    }
  }
}
</script>

<style scoped>
.InputCateg {
  display: flex;
  padding: 2%;
}

label {
  padding-left: 2%;
}
</style>
