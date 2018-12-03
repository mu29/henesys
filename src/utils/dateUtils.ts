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

export const monthsBetween = (start: string, end: string) => {
  const months = []
  const current = moment(start).startOf('day')
  const last = moment(end).startOf('day')

  while (current.diff(last) < 0) {
    months.push(current.clone().format('YYYY-MM'))
    current.add(1, 'month')
  }

  return [...months, end]
}

export const today = () => moment().format('YYYY-MM-DD')

export const thisMonth = () => moment().format('YYYY-MM')

export const lastMonth = () => moment().add(-30, 'days').format('YYYY-MM-DD')
