import moment, { Moment } from 'moment'

export const datesBetween = (start: string | undefined, end: string) => {
  if (!start) {
    return [moment().format('YYYY-MM-DD')]
  }

  const dates = []
  const current = moment(start).startOf('day')
  const last = moment(end).startOf('day')

  while (current.add(1, 'days').diff(last) <= 0) {
    dates.push(current.clone().format('YYYY-MM-DD'))
  }

  return dates
}

export const today = () => moment().format('YYYY-MM-DD')

export const lastMonth = () => moment().add(-30, 'days').format('YYYY-MM-DD')
