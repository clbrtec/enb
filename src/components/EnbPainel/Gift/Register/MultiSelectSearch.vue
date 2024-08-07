<template>
  <div class='MultiSelectSearch'>
    <input type="text"/>
    <div class="cont-result">
      <result-search
      v-for="(data, key) in 3"
      :key="key"
      />
    </div>
  </div>
</template>

<script>
import ResultSearch from './ResultSearch'
export default {
  name: 'MultiSelectSearch',
  components: { ResultSearch }
}
</script>

<style scoped>
.MultiSelectSearch {
  width: 100%;
  position: absolute;
  box-shadow: 1px 1px 1px 1px #CCCCCC;
}

input {
  font-size: 18px;
  width: 96.5%;
  padding: 1.8%;
  border: 0;
}

input:focus {
  outline: none;
}

.cont-result {
  width: 100%;
  max-height: 250px;
  overflow: auto;
}
</style>
