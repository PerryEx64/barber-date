import moment from 'moment'
const newDate = new Date()

const date = moment(newDate, 'Mon Sep 11 2023 19:38:41 GMT+0000').format(
  'DD/MM/YYYY HH:hh'
)

export const BarbersRegister = {
  name: '',
  id: '',
  avatar: 1,
  status: true,
  enabled: true,
  created_At: date,
  updated_At: date
}
