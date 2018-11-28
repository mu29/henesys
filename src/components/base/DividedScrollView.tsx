import React from 'react'
import {
  ScrollView,
  ScrollViewProps,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'
import { Divider } from 'src/components'

export interface DividedScrollViewProps extends ScrollViewProps {}

class DividedScrollView extends React.PureComponent<DividedScrollViewProps> {
  state = { showDivider: false }

  onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => this.setState({
    showDivider: nativeEvent.contentOffset.y > 0,
  })

  render() {
    const { showDivider } = this.state
    return (
      <React.Fragment>
        <Divider hidden={!showDivider} />
        <ScrollView {...this.props} onScroll={this.onScroll} scrollEventThrottle={160} />
      </React.Fragment>
    )
  }
}

export default DividedScrollView
