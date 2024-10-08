<template>
  <div class='CardLink'>
    <component :is="icon"/>
    <label>{{ label }}</label>
  </div>
</template>

<script>
import EngineerIcon from './Icons/EngineerIcon'
import LogoutIcon from './Icons/LogoutIcon'
export default {
  name: 'CardLink',
  components: { EngineerIcon, LogoutIcon },
  data () {
    return {
      currentView: 'EngineerIcon'
    }
  },
  props: {
    icon: {
      type: String,
      default: 'EngineerIcon'
    },
    label: {
      type: String,
      default: 'Label'
    }
  }
}
</script>

<style scoped>
.CardLink {
  margin: 1%;
  padding: 1.5%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
  cursor: pointer;
  background-color: #EEEEEE;
}
</style>
