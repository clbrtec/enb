<template>
  <div class='InputCateg'>
    <input @change="Update" :checked="data.active" type="checkbox">
    <label>{{ data.name }}</label>
    <img :src="data.icon">
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
  align-items: center;
}

label {
  padding-left: 2%;
}

img {
  width: 20px;
  height: 20px;
}
</style>
