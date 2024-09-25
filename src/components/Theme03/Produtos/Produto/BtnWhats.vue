<template>
  <div class='BtnWhats'>
    <button>
      <whats-icon/>
      SAIBA MAIS
    </button>
  </div>
</template>

<script>
import WhatsIcon from '../../Icons/WhatsIcon'
export default {
  name: 'BtnWhats',
  components: { WhatsIcon }
}
</script>

<style scoped>
.BtnWhats {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: #67c15e;
  color: #FFFFFF;
  padding: 2%;
  border-radius: 8px;
  cursor: pointer;
}
</style>
