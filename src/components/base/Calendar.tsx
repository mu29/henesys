import React from 'react'
import moment from 'moment'
import chunk from 'lodash/chunk'
import {
  View,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native'
import {
  Text,
} from 'src/components'
import { typography } from 'src/styles'

const DEVICE_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  style?: StyleProp<ViewStyle>,
}

class Calendar extends React.PureComponent<CalendarProps> {
  _days = () => {
    const startWeekday = moment().startOf('month').weekday()
    const daysInMonth = moment().daysInMonth()
    return [
      ...Array(startWeekday),
      ...Array(daysInMonth),
    ].map((_, i) => Math.max(0, i - startWeekday + 1))
  }

  _renderItem = (day: number | string) => (
    <View style={styles.item}>
      {!!day && (
        <Text>
          {day}
        </Text>
      )}
    </View>
  )

  _renderRow = (days: number[]) => (
    <View style={styles.horizontal}>
      {days.map(this._renderItem)}
    </View>
  )

  render() {
    const { style } = this.props
    return (
      <View style={[styles.container, style]}>
        <View style={styles.header}>
          <Text style={typography.heading[3].black.normal}>
            2018년
          </Text>
          <Text style={typography.heading[3].black.bold}>
            11월
          </Text>
        </View>
        <View style={styles.horizontal}>
          {moment.weekdaysMin().map(this._renderItem)}
        </View>
        {chunk(this._days(), 7).map(this._renderRow)}
      </View>
    )
  }
}

export default Calendar
