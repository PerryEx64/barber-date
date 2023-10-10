export const EXTRAS = {
  cejas: [
    {
      id: 1,
      name: 'linea',
      price: 5
    },
    {
      id: 2,
      name: 'depilacion',
      price: 10
    }
  ],
  barba: [
    {
      id: 1,
      name: 'recorte',
      price: 10
    },
    {
      id: 2,
      name: 'alineacion',
      price: 15
    }
  ]
}

export const CejasImg = (id) => {
  const requires = {
    1: require('../../assets/extras/linea.png'),
    2: require('../../assets/extras/depilacion.png')
  }

  return requires[id]
}

export const BarbaImg = (id) => {
  const requires = {
    1: require('../../assets/extras/recorte.png'),
    2: require('../../assets/extras/alineacion.png')
  }

  return requires[id]
}
