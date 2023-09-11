import React from 'react'
import { GetBarbershops } from '../../../services/BarberShop'

function useBarber() {
  const [barberShops, setBarberShops] = React.useState([])

  React.useEffect(() => {
    //obtiene la data de todas las barberias disponibles
    GetBarbershops(setBarberShops)
  }, [])
  return { barberShops }
}

export default useBarber
