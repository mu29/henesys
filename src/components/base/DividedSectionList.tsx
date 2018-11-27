import React from 'react'
import {
  SectionList,
  SectionListProps,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'
import { Divider } from 'src/components'

export interface DividedSectionListProps<T> extends SectionListProps<T> {}

class DividedSectionList<T> extends React.PureComponent<DividedSectionListProps<T>> {
  state = { showDivider: false }

  onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => this.setState({
    showDivider: nativeEvent.contentOffset.y > 0,
  })

  render() {
    const { children, ...props } = this.props
    const { showDivider } = this.state
    return (
      <React.Fragment>
        <Divider hidden={!showDivider} />
        <SectionList {...props} onScroll={this.onScroll} scrollEventThrottle={1600} />
      </React.Fragment>
    )
  }
}

export default DividedSectionList
