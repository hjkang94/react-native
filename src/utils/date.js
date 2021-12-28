import dayjs from 'dayjs'

export const dateFormat = (date, format = 'YYYY-MM-DD hh:mm:ss') => {
  return dayjs(date).format(format)
}
