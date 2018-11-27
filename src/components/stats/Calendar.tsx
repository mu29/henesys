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
import { typography, palette } from 'src/styles'

const DEVICE_WIDTH = Dimensions.get('window').width
const ITEM_SIZE = (DEVICE_WIDTH - 32) / 7

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
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    height: 4,
    bottom: ITEM_SIZE / 12,
    left: ITEM_SIZE / 6,
    right: ITEM_SIZE / 6,
    zIndex: -1,
    borderRadius: 2,
    backgroundColor: palette.primary.default,
  },
})

export interface CalendarProps {
  month?: string,
  progressList: number[],
  style?: StyleProp<ViewStyle>,
}

class Calendar extends React.PureComponent<CalendarProps> {
  static defaultProps = {
    month: moment().format('YYYY-MM'),
    progressList: [],
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

  _renderItem = (
    style?: StyleProp<TextStyle>,
    opacity: number = 0,
  ) => (
    day: number | string,
    index: number,
  ) => (
    <View
      key={`calendar-item-${index}`}
      style={styles.item}
    >
      {!!day && (
        <Text style={style}>
          {day}
        </Text>
      )}
      <View style={[styles.background, { opacity }]} />
    </View>
  )

  _renderDay = (day: number, index: number) => {
    const { progressList } = this.props
    return this._renderItem(typography.body[2].black, progressList[day - 1])(day, index)
  }

  _renderRow = (days: number[], index: number) => (
    <View
      key={`calendar-row-${index}`}
      style={styles.horizontal}
    >
      {days.map(this._renderDay)}
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

export default React.memo(Calendar)
