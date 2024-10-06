<template>
  <div class='ProdCaracter'>
    <div
    v-for="(data, key) in ItemSelected01.caracter"
    :key="key"
    class="caracter"
    >
      <point-icon/>{{ data.name }}
    </div>  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PointIcon from '../../Icons/PointIcon'
export default {
  name: 'ProdCaracter',
  components: { PointIcon },
  computed: {
    ...mapGetters(['ItemSelected01'])
  }
}
</script>

<style scoped>
.ProdCaracter {
  padding-top: 2%;
  text-align: left;
  font-weight: bold;
}

.caracter {
  display: flex;
  align-items: center;
}
</style>
