<template>
  <div class='EnbFooter'>
    <div class="nets">
      <div class="net">
        <facebook-icon/>
      </div>
      <div class="net">
        <instagram-icon/>
      </div>
      <div class="net">
        <whats-icon width="30px" height="30px"/>
      </div>
    </div>
    <div>
      ENB Business © 2022 | Todos os direitos reservados
    </div>
  </div>
</template>

<script>
import FacebookIcon from '../Icons/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import WhatsIcon from '../Icons/WhatsIcon'
export default {
  name: 'EnbFooter',
  components: { FacebookIcon, InstagramIcon, WhatsIcon }
}
</script>

<style scoped>
.EnbFooter {
  width: 100%;
  padding: 1%;
  /* position: absolute;
  bottom: 0; */
  color: #FFFFFF;
  background-color: orange;
}

.nets {
  display: flex;
  justify-content: center;
}

.net {
  padding-left: 3px;
  padding-right: 3px;
}
</style>
