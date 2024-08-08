<template>
  <div :class="{ marginLeft: chave > 0 }" class='MultiSelectItem'>
    <span class="close" @click="DelMultiSelect({ store: store, data: data })">x</span>
    <span class="desc">{{ data.name }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MultiSelectItem',
  props: ['data', 'chave', 'store'],
  methods: {
    ...mapActions(['DelMultiSelect'])
  }
}
</script>

<style scoped>
.MultiSelectItem {
  min-width: 15%;
  display: flex;
  align-items: center;
  background-color: #EEEEEE;
  padding: 0.6%;
  border-radius: 5px;
  border: thin solid #CCCCCC;
}

.marginLeft {
  margin-left: 1%;
}

.close {
  display: block;
  font-size: 12px;
  cursor: pointer;
}

.desc {
  display: block;
  width: 100%;
}
</style>
