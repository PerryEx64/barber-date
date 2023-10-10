import { useSelector } from 'react-redux'
import { selectService } from '../app/features/serviceSlice'

const usePrice = () => {
  const service = useSelector(selectService)

  const calculatePrice = () => {
    //precio del barbero
    const barberPrice = service.price

    //precio de la barba y cejas
    const barbaPrice = service.extra.barba.price
    const cejasPrice = service.extra.cejas.price

    const subTotalExtras = barbaPrice + cejasPrice

    return barberPrice + subTotalExtras
  }
  return { calculatePrice }
}

export default usePrice
