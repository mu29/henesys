import React from 'react'
import moment from 'moment'
import chunk from 'lodash/chunk'
import {
  View,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'
import {
  Text,
  Divider,
} from 'src/components'
import { typography } from 'src/styles'

const DEVICE_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: (DEVICE_WIDTH - 32) / 7,
    height: (DEVICE_WIDTH - 32) / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export interface CalendarProps {
  month?: string,
  style?: StyleProp<ViewStyle>,
}

class Calendar extends React.PureComponent<CalendarProps> {
  static defaultProps = {
    month: moment().format('YYYY-MM'),
  }

  _days = () => {
    const { month } = this.props
    const startWeekday = moment(month).startOf('month').weekday()
    const daysInMonth = moment(month).daysInMonth()
    return [
      ...Array(startWeekday),
      ...Array(daysInMonth),
    ].map((_, i) => Math.max(0, i - startWeekday + 1))
  }

  _renderItem = (style?: StyleProp<TextStyle>) => (day: number | string) => (
    <View style={styles.item}>
      {!!day && (
        <Text style={style}>
          {day}
        </Text>
      )}
    </View>
  )

  _renderRow = (days: number[]) => (
    <View style={styles.horizontal}>
      {days.map(this._renderItem())}
    </View>
  )

  render() {
    const { style } = this.props
    return (
      <View style={[styles.container, style]}>
        <Divider />
        <View style={styles.horizontal}>
          {moment.weekdaysMin().map(this._renderItem(typography.tiny[1].gray))}
        </View>
        {chunk(this._days(), 7).map(this._renderRow)}
      </View>
    )
  }
}

export default Calendar
