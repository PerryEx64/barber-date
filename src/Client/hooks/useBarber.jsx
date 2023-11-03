import React from 'react'
import { GetBarbershops } from '../../../services/BarberShop'

function useBarber() {
  const [barberShops, setBarberShops] = React.useState([])

  React.useEffect(() => {
    GetBarbershops(setBarberShops)
  }, [])
  return { barberShops }
}

export default useBarber
