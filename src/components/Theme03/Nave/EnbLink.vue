<template>
  <div class='EnbLink'>
    <div class="icon">
      <component :is="data.icon"/>
    </div>
    <div class="label">{{ data.label }}</div>
    <down-icon v-if="data.sublink"/> 
  </div>
</template>

<script>
import BuildIcon from '../Icons/BuildIcon'
import HouseIcon from '../Icons/HouseIcon'
import OfficeIcon from '../Icons/OfficeIcon'
import StoreIcon from '../Icons/StoreIcon'
import CoconutIcon from '../Icons/CoconutIcon'
import MapIcon from '../Icons/MapIcon'
import DownIcon from '../Icons/DownIcon'
export default {
  name: 'EnbLink',
  components: { BuildIcon, HouseIcon, OfficeIcon, StoreIcon, CoconutIcon, MapIcon, DownIcon },
  props: ['data'],
  data () {
    return {
      currentView: 'MapIcon'
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
</style>
