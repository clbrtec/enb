<template>
  <div class='EnbPainel'>
    <enb-msg/>
    <enb-modal v-if="EnbModal.active"/>
    <enb-sidebar/>
    <div class="cont-painel">
      <div class="label" >
        <enb-label
        :text="$route.name"
        config="font-weight:bold;font-size:18px;color:#648EEA;text-align:left;padding:1.5%"
        />
      </div>
      <div class="cont" >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EnbSidebar from '@/components/EnbPainel/EnbSidebar.vue'
import EnbLabel from '@/components/EnbLabel.vue';
import EnbModal from '@/components/EnbPainel/Modal/EnbModal'
import EnbMsg from '@/components/EnbMsg/EnbMsg'
export default {
  name: 'EnbPainel',
  components: { EnbSidebar, EnbLabel, EnbModal, EnbMsg },
  computed: {
    ...mapGetters(['EnbModal'])
  }
}
</script>

<style scoped>
.EnbPainel {
  width: 100%;
  height: 100%;
  display: flex;
}

.cont-painel {
  width: 80%;
  height: 100%;
  box-shadow: 0px 0px 4px 1px #CCCCCC;
}

.label {
  height: 8%;
}

.cont {
  height: 92%;
}
</style>
