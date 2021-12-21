export const state = () => ({
  dataBase: {
    id1: {
      id: 'id1',
      name: 'HeadHunter',
      link: 'https://hh.ru',
      data: [
        {
          id: 'id_headhunter_1',
          login: 'vlad@something',
          group: 'HeadHunter',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          password: '111111111'
        },
        {
          id: 'id_headhunter_2',
          login: 'vlad2@something',
          group: 'HeadHunter',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          password: '222222222'
        }
      ]
    },
    id2: {
      id: 'id2',
      name: 'NetAngeles',
      link: 'https://NetANgels.ru',
      data: [
        {
          id: 'id_NetANgels_1',
          login: 'vladimir@something',
          group: 'NetAngeles',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          password: '33333333'
        },
        {
          id: 'id_NetANgels_2',
          login: 'jora@something',
          group: 'NetAngeles',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          password: '4444444444'
        }
      ]
    }
  },
  searchData: ''
})

export const getters = {
  platforms (state) {
    const arr = []
    for (const key in state.dataBase) {
      arr.push({
        title: state.dataBase[key].name,
        to: `/KeyPass/${key}`
      })
    }
    return arr
  }
}

export const mutations = {
  editPassword (state, user) {
    const idGroup = Object.values(state.dataBase)
      .find(it => it.name === user.group).id
    state.dataBase[idGroup].data.forEach((it) => {
      if (it.id === user.id) { it.password = user.password }
    })
  },
  addAccount (state, addData) {
    const idGroup = Object.values(state.dataBase)
      .find(it => it.name === addData.group).id
    state.dataBase[idGroup].data.push(addData)
  },
  addPlatform (state, addData) {
    state.dataBase = {
      ...state.dataBase,
      [addData.id]: addData
    }
  },
  serchData (state, input) {
    state.searchData = input
  }
}
