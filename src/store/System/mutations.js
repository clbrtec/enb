import router from '../../router'
import Theme01 from '../../router/Theme01'
import Theme02 from '../../router/Theme02'
import Theme03 from '../../router/Theme03'
import MyStore from '../../views/MyStore'

export default {
  'PUSH_MSG' (state, payload) {
    state.EnbMsg.push({
      id: Math.round(Math.random() * 1000000),
      msg: payload.msg,
      color: payload.color
    })
  },
  'DEL_MSG' (state, payload) {
    state.EnbMsg = state.EnbMsg.filter(m => m.id !== payload)
  },
  'GET_LOGIN' (state, payload) {
    state.Profile = payload
  },
  'GET_LOGOUT' (state) {
    state.Profile = {
      logged: false,
      admin: false
    }
  },
  'PUSH_MULTI_SELECT' (state, payload) {
    if(typeof state[payload.store] === 'undefined') {
      state[payload.store] = []
    }
    state[payload.store].push(payload.data)
  },
  'DEL_MULTI_SELECT' (state, payload) {
    let newList = state[payload.store].filter(i => i.id !== payload.data.id)
    state[payload.store] = newList
  },
  'SET_MULTI_SELECT' (state, payload) {
    state[payload.store] = payload.list
  },
  'CHANGE_USER_EDIT' (state, payload) {
    for(let key in payload) {
      state.SelectedUserEdit[key] = payload[key]
    }
  },
  'CHANGE_USER_PERMISSION' (state, payload) {
    state.SelectedUserEdit.permission.map(p => {
      if(p.id === payload.id) {
        p.active = !p.active
      }
    })
  },
  'PUSH_USER' (state, payload) {
    state.Users.push(payload)
  },
  'UPDATE_STATUS_USER' (state, payload) {
    state.Users.map(u => {
      if(u.id === payload.id) {
        u.status = payload.status
      }
    })
  },
  'DELETE_USER' (state, payload) {
    state.Users = state.Users.filter(u => u.id !== payload.id)
  },
  'SET_USER_EDIT' (state, payload) {
    state.SelectedUserEdit = payload
  },
  'CLEAR_USER_EDIT' (state) {
    state.SelectedUserEdit = {
      usuario: '',
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      permission: [
        {
          id: 1,
          name: 'Produtos',
          nivel: 0,
          seq: 1,
          parent: 0,
          active: false
        },
        {
          id: 2,
          name: 'Cadastro',
          nivel: 1,
          seq: 2,
          parent: 1,
          active: false
        }
      ]
    }
  },
  'CHANGE_THEME' (state, payload) {
    let routeThemes = { Theme01, Theme02, Theme03 }
    let selectedTheme = state.Themes.filter(t => t.name === payload)[0]
    console.log(routeThemes[selectedTheme.route])
    state.Themes.map(t => {
      t.active = false
      if (t.name === payload) {
        t.active = true
      }
    })
    router.addRoute({
      name: 'Minha Loja',
      path: '/',
      component: MyStore,
      children: routeThemes[selectedTheme.route]
    })
    //console.log(router.getRoutes())
    state.Theme = selectedTheme
  },
  'TOGGLE_SEARCH_LOAD' (state, payload) {
    state.SearchLoad = payload
  },
  'UPDATE_LOGO' (state, payload) {
    state.Logo = payload
  }
}
