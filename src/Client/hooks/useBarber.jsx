import React from 'react'
import { DATABARBERS } from '../../utils/ConstantsBarber'

function useBarber() {
    const [barberShops, setBarberShops] = React.useState(DATABARBERS)

   React.useEffect(() => {
    //obtiene la data de todas las barberias disponibles
   
   }, []) 
  return {barberShops}
}

export default useBarber