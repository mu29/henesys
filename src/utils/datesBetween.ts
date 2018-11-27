import moment, { Moment } from 'moment'

export default (start: string | undefined, end: Moment) => {
  if (!start) {
    return [moment().format('YYYY-MM-DD')]
  }

  const dates = []
  const current = moment(start).startOf('day')
  const last = end.startOf('day')

  while (current.add(1, 'days').diff(last) <= 0) {
    dates.push(current.clone().format('YYYY-MM-DD'))
  }

  return dates
}
