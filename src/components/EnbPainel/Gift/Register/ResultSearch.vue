<template>
  <div class='ResultSearch' @click="select">
    {{ dados.name }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ResultSearch',
  props: ['store', 'dados'],
  methods: {
    ...mapActions(['PushMultiSelect']),
    select () {
      this.PushMultiSelect({ store: this.store, data: this.dados })
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.ResultSearch {
  text-align: left;
  padding: 2%;
  cursor: pointer;
}

.ResultSearch:hover {
  background-color: #EEEEEE;
}
</style>
