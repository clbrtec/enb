<template>
  <div class='EnbPainel'>
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
import EnbSidebar from '@/components/EnbPainel/EnbSidebar.vue'
import EnbLabel from '@/components/EnbLabel.vue';
export default {
  name: 'EnbPainel',
  components: { EnbSidebar, EnbLabel }
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
