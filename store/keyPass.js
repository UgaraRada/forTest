export const state = () => ({
  dataBase: {
    HeadHunter: {
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
    NetAngeles: {
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
  }
})

export const mutations = {
  editPassword (state, user) {
    state.dataBase[user.group].data.forEach((it) => {
      if (it.id === user.id) { it.password = user.password }
    })
  }
}
