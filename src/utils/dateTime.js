import moment from 'moment'
export const format=function (datetime,fmt) {
  return datetime?moment(datetime).format(fmt):''
}
