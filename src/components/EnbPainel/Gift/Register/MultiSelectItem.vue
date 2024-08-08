<template>
  <div :class="{ marginLeft: chave > 0 }" class='MultiSelectItem'>
    <span class="close" @click="del">x</span>
    <span class="desc">{{ data.name }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MultiSelectItem',
  props: ['data', 'chave', 'store'],
  methods: {
    ...mapActions(['DelMultiSelect']),
    del (e) {
      e.cancelBubble = true
      this.DelMultiSelect({ store: this.store, data: this.data })
    }
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
