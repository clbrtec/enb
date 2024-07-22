<template>
  <div class='ClientAction'>
    <div class="cont-add">
      <add-icon
      text="Adiconar um cliente"
      :active="true"
      :optionsLabel="{ width: '100px', marginTop: '90px', marginRight: '60px' }"
      />
    </div>
  </div>
</template>

<script>
import AddIcon from '../../Icons/AddIcon'
export default {
  name: 'ClientAction',
  components: { AddIcon },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.ClientAction {
  display: flex;
  align-items: center;
  justify-content: end;
}

.cont-add {
  padding: 0.5%;
}
</style>
