import { Moment } from 'moment'

export default (start: Moment, end: Moment) => {
  const dates = []
  const current = start.startOf('day')
  const last = end.startOf('day')

  while (current.add(1, 'days').diff(last) <= 0) {
    dates.push(current.clone().format('YYYY-MM-DD'))
  }

  return dates
}
