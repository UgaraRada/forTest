export const state = () => ({
  dataBase: {
    id1: {
      id: 'id1',
      name: 'HeadHunter',
      link: 'https://chototam.ru',
      data: [
        {
          id: 'id_headhunter_1',
          login: 'vlad@something',
          group: 'id1',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          id: 'id_headhunter_2',
          login: 'vlad2@something',
          group: 'id1',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      ]
    },
    id2: {
      id: 'id2',
      name: 'NetAngels',
      link: 'https://NetANgels.ru',
      data: [
        {
          id: 'id_NetANgels_1',
          login: 'vladimir@something',
          group: 'id2',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          id: 'id_NetANgels_2',
          login: 'jora@something',
          group: 'id2',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      ]
    }
  }
})
