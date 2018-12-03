import React from 'react'
import { Dimensions } from 'react-native'
import { Carousel } from 'src/components'
import { Calendar } from 'src/containers'
import { monthsBetween, thisMonth } from 'src/utils'

const DEVICE_WIDTH = Dimensions.get('window').width

export interface SwipableCalendarProps {
  startMonth: string,
  onUpdate: (month: string) => void,
}

class SwipableCalendar extends React.Component<SwipableCalendarProps> {
  _getMonths = () => {
    const { startMonth } = this.props
    return monthsBetween(startMonth, thisMonth())
  }

  _onSnapToItem = (index: number) => {
    const { onUpdate } = this.props
    const month = this._getMonths()[index]
    onUpdate(month)
  }

  _renderItem({ item }: { item: string }) {
    return <Calendar key={`swipable-calendar-${item}`} month={item} />
  }

  render() {
    return (
      <Carousel
        data={this._getMonths()}
        activeSlideOffset={0}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        firstItem={this._getMonths().length - 1}
        renderItem={this._renderItem}
        onSnapToItem={this._onSnapToItem}
        sliderWidth={DEVICE_WIDTH}
        itemWidth={DEVICE_WIDTH}
      />
    )
  }
}

export default SwipableCalendar
