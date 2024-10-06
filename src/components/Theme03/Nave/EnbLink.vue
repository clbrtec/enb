<template>
  <div class='EnbLink' @click="push">
    <div class="icon">
      <component
      :is="data.icon"
      :color="CategSelected === data.label ? '#ffb573' : '#000000'"
      />
    </div>
    <div :class="{ selected: CategSelected === data.label }" class="label">{{ data.label }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BuildIcon from '../Icons/BuildIcon'
import HouseIcon from '../Icons/HouseIcon'
import OfficeIcon from '../Icons/OfficeIcon'
import StoreIcon from '../Icons/StoreIcon'
import CoconutIcon from '../Icons/CoconutIcon'
import MapIcon from '../Icons/MapIcon'
export default {
  name: 'EnbLink',
  components: { BuildIcon, HouseIcon, OfficeIcon, StoreIcon, CoconutIcon, MapIcon },
  props: ['data'],
  computed: {
    ...mapGetters(['CategSelected'])
  },
  data () {
    return {
      currentView: 'MapIcon'
    }
  },
  methods: {
    ...mapActions(['FilterCateg']),
    router () {
      return new Promise((resolve) => {
        this.$router.push('/categorias')
        resolve()
      })
    },
    push () {
      this.router()
        .then(() => this.FilterCateg(this.data.label))
    }
  }
}
</script>

<style scoped>
.EnbLink {
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 18px;
}

.icon {
  padding-right: 5%;
}

.label {
  cursor: pointer;
}

.selected {
  color: orange
}
</style>
