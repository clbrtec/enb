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
      estoqueVariavel: [],
      caracter: [],
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
  },
  'CHANGE_GIFT_EDIT' (state, payload) {
    for(let key in payload) {
      state.SelectedGiftEdit[key] = payload[key]
    }
  },
  'PUSH_GIFT' (state, payload) {
    state.Gifts.push(payload)
  },
  'SET_GIFT_EDIT' (state, payload) {
    state.SelectedGiftEdit = payload
  },
  'DELETE_GIFT' (state, payload) {
    state.Gifts = state.Gifts.filter(g => g.id !== payload.id)
  },
  'PUSH_ESTOQUE_VARIAVEL' (state, payload) {
    state.SelectedProdEdit[0].estoqueVariavel.push(payload)
  },
  'UPDATE_ESTOQUE' (state, payload) {
    state.SelectedProdEdit[0].estoque = payload
  },
  'DELETE_ESTOQUE_VARIAVEL' (state, payload) {
    state.SelectedProdEdit[0].estoqueVariavel = state.SelectedProdEdit[0].estoqueVariavel
      .filter(e => e.id !== payload.id)
  },
  'UPDATE_ESTOQUE_QTDE' (state, payload) {
    state.SelectedProdEdit[0].estoqueVariavel.map(e => {
      if(e.id === payload.id) {
        e.src.quantidade = payload.quantidade
      }
    })
  },
  'CLEAR_GIFT_EDIT' (state) {
    state.SelectedGiftEdit = {
      id: '',
      codigo: '',
      tipo: '',
      valor: 0,
      validade: '',
      gastoMin: 0,
      gastoMax: 0,
      produtos: [],
      produtoDel: [],
      categorias: [],
      categoriasDel: [],
      emailsDel: [],
      limiteCupom: 0,
      limiteNprodutos: 0,
      limiteUser: 0,
      freteGratis: false,
      individual: false,
      itensVendaDel: false
    }
  },
  'PUSH_CARACTER_PROD' (state, payload) {
    state.SelectedProdEdit[0].caracter.push(payload)
  },
  'DEL_CARACTER_PROD' (state, payload) {
    state.SelectedProdEdit[0].caracter = state.SelectedProdEdit[0].caracter.filter(c => c.id != payload)
  }
}
