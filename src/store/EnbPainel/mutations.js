export default {
  'SET_MODAL' (state, payload) {
    state.EnbModal = payload
  },
  'PUSH_IMG' (state, payload) {
    if (!state.UploadImg.filter(i => i === payload).length) {
      state.UploadImg.push(payload)
    }
  },
  'CHANGE_PRODEDIT' (state, payload) {
    for(let key in payload) {
      state.SelectedProdEdit[key] = payload[key]
    }
  },
  'UPDATE_PRODCATEG' (state, payload) {
    state.Categorias.map(c => c.active = false)
    state.Categorias.map(c => {
      if (c.name === payload.name) {
        c.active = payload.active
      }
    })
  },
  'PUSH_CATEG' (state, payload) {
    state.Categorias.push(payload.children)
    state.Categorias.map(c => {
      if (c.name === payload.parent) {
        c.childrens.push(payload.children.name)
      }
    })
  }
}
