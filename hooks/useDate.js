import moment from 'moment/moment'

const useDate = () => {
  const newDate = new Date()
  const date = moment(newDate, 'Mon Sep 11 2023 19:38:41 GMT+0000').format(
    'DD/MM/YYYY HH:hh'
  )

  return { date }
}

export default useDate
