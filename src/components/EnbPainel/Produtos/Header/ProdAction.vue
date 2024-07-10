<template>
  <div class='ProdAction'>
    <div class="cont">
      <edit-icon/>
    </div>
    <div class="cont">
      <edit-fast-icon/>
    </div>
    <div class="cont">
      <diretory-icon/>
    </div>
    <div class="cont">
      <eyes-icon :options="{ width: '30px', height: '30px', action: true }"/>
    </div>
    <div class="cont">
      <copy-icon/>
    </div>
    <div class="cont">
      <delete-icon/>
    </div>
    <div class="cont-add">
      <add-icon @click="$router.push('/painel/produtos/register')"/>
    </div>
  </div>
</template>

<script>
import DeleteIcon from '../../Icons/DeleteIcon'
import CopyIcon from '../../Icons/CopyIcon'
import EyesIcon from '../../Icons/EyesIcon'
import DiretoryIcon from '../../Icons/DiretoryIcon'
import EditFastIcon from '../../Icons/EditFastIcon'
import EditIcon from '../../Icons/EditIcon'
import AddIcon from '../../Icons/AddIcon'
export default {
  name: 'ProdAction',
  components: { AddIcon, EditIcon, EditFastIcon, DiretoryIcon, EyesIcon, CopyIcon, DeleteIcon }
}
</script>

<style scoped>
.ProdAction {
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.cont {
  width: 3.5%;
}
.cont-add {
  padding-right: 2%;
}
</style>
