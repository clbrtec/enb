<template>
  <div class='ResultSearch' @click="PushMultiSelect({ store: store, data: dados })">
    {{ dados.name }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ResultSearch',
  props: ['store', 'dados'],
  methods: {
    ...mapActions(['PushMultiSelect'])
  }
}
</script>

<style scoped>
.ResultSearch {
  text-align: left;
  padding: 2%;
  cursor: pointer;
}
</style>
