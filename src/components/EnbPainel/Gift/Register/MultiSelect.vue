<template>
  <div class='MultiSelect'>
    <div class="label">Label:</div>
    <div class="view-select">
      <multi-select-item
      v-for="(data, key) in 3"
      :key="key"
      :chave="key"
      />
    </div>
    <multi-select-search/>
  </div>
</template>

<script>
import MultiSelectSearch from './MultiSelectSearch'
import MultiSelectItem from './MultiSelectItem'
export default {
  name: 'MultiSelect',
  components: { MultiSelectSearch, MultiSelectItem }
}
</script>

<style scoped>
.MultiSelect {
  width: 100%;
  position: relative;
}

.label {
  font-size: 12px;
  text-align: left;
  margin-top: 10px;
  margin-left: 5px;
  padding-bottom: 5px;
}

.view-select {
  display: flex;
  padding: 2.5%;
  border: thin solid #CCCCCC;
  border-radius: 5px;
}
</style>
