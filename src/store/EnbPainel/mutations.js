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
      state.SelectedProdEdit[0][key] = payload[key]
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
  },
  'PUSH_PRODEDIT' (state, payload) {
    if (state.SelectedProdEdit[0].id === '') {
      state.SelectedProdEdit[0] = payload
    } 
    else {
      state.SelectedProdEdit.push(payload)
    }
  },
  'DELETE_PRODEDIT' (state, payload) {
    let newList = state.SelectedProdEdit.filter(s => s.id !== payload.id)
    state.SelectedProdEdit = newList
    if (!state.SelectedProdEdit.length) {
      this.commit('CLEAR_PRODEDIT')
    }
  },
  'CLEAR_PRODEDIT' (state) {
    state.SelectedProdEdit = [{
      id: '',
      code: '',
      tipo: '',
      name: '',
      preco: 0,
      oferta: 0,
      img: [],
      descricao: '',
      dateOfertaStart: '',
      dateOfertaEnd: '',
      categoria: '',
      gerEstoque: false,
      statusEstoque: '',
      estoque: 0,
      pendencia: '',
      visibilidade: '',
      visualizacao: 0,
      individual: false
    }]
  },
  PUSH_ALLEDIT (state, payload) {
    state.SelectedProdEdit = payload
  },
  'COPY_PROD' (state, payload) {
    state.SelectedProdEdit[0] = payload
  }
}
