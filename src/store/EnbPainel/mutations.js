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
  'TOFILE_PROD' (state, payload) {
    state.SelectedProdEdit.map(p => p.status = payload)
  },
  'CHANGESTATUS_PROD' (state, payload) {
    state.StatusProd = payload
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
      atributos: [],
      individual: false
    }]
  },
  PUSH_ALLEDIT (state, payload) {
    state.SelectedProdEdit = payload
  },
  'COPY_PROD' (state, payload) {
    payload.name = payload.name + ' - copia'
    state.SelectedProdEdit[0] = payload
  },
  'PUSH_PROPPROD' (state, payload) {
    state.SelectedProdEdit[0].atributos.push(payload)
  },
  'UPDATE_PROPPROD' (state, payload) {
    state.SelectedProdEdit[0].atributos.map(p => {
      if(p.id === payload.id) {
        p.active = !payload.active
      }
    })
  },
  'UPDATE_VALUEPROP' (state, payload) {
    let prop = state.SelectedProdEdit[0].atributos.filter(p => p.id === payload.prop.id)[0]
    prop.values.map(v => {
      if (v.id === payload.value.id) {
        v.active = !payload.value.active
      }
    })
  }
}
