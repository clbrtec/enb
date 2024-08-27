<template>
  <div class='EnbSetQtda01'>
    <div class="btn">
      -
    </div>
    <input type="text"
    :value="data"
    >
    <div class="btn" @click="data++">
      +
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnbSetQtda01',
  props: ['qtda'],
  emits: ['update:qtda'],
  data () {
    return {
      data: 1
    }
  },
  watch: {
    data (n) {
      this.$emit('update:qtda', n)
    }
  }
}
</script>

<style scoped>
.EnbSetQtda01 {
  width: 96%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  border: thin solid #CCCCCC;
  border-radius: 10px;
}

input {
  border: 0;
  width: 60%;
  text-align: center;
  font-size: 18px
}

input:focus {
  outline: none;
}

.btn {
  width: 20%;
  font-size: 22px;
  cursor: pointer;
}
</style>
