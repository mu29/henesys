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

export const daysInWeek = (date: Moment | string, day: number = 4) => {
  const targetDate = typeof date === 'string' ? moment(date) : date

  const now = targetDate.isoWeekday()

  const start = (
    now < day
      ? targetDate.add(-1, 'weeks').isoWeekday(day)
      : targetDate.isoWeekday(day)
  )
  const last = start.clone().add(1, 'weeks')
  return datesBetween(start.add('-1', 'days').format('YYYY-MM-DD'), last.add('-1', 'days').format('YYYY-MM-DD'))
}

export const today = () => moment().format('YYYY-MM-DD')

export const thisWeek = () => {
  const thursday = 4
  const now = moment()
  return (
    now.isoWeekday() < thursday
      ? now.add(-1, 'weeks').isoWeekday(thursday)
      : now.isoWeekday(thursday)
  )
}

export const thisMonth = () => moment().format('YYYY-MM')

export const lastMonth = () => moment().add(-30, 'days').format('YYYY-MM-DD')
