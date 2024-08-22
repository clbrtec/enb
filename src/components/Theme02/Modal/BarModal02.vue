<template>
  <div class='BarModal02'>
    <div class="text">{{ Modal01.barText }}</div>
    <div class="c-btn" @click="SetModal01({ active: false })">X</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BarModal02',
  computed: {
    ...mapGetters(['Modal01'])
  },
  methods: {
    ...mapActions(['SetModal01'])
  }
}
</script>

<style scoped>
.BarModal02 {
  display: flex;
  padding: 2%;
  color: #FFFFFF;
  background-color: #666666;
}

.text {
  width: 95%;
  text-align: left;
}

.c-btn {
  width: 20px;
  cursor: pointer;
}

.c-btn:hover {
  background-color: red;
}
</style>
