import { useSelector } from 'react-redux'
import { selectService } from '../app/features/serviceSlice'

const usePrice = () => {
  const service = useSelector(selectService)

  const calculatePrice = () => {
    const barberPrice = service.price

    const barbaPrice = service.extra.barba.price
    const cejasPrice = service.extra.cejas.price

    const subTotalExtras = barbaPrice + cejasPrice

    return barberPrice + subTotalExtras
  }
  return { calculatePrice }
}

export default usePrice
