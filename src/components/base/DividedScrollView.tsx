import React from 'react'
import {
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'
import { Divider } from 'src/components'

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 8,
  },
})

export interface DividedScrollViewProps extends ScrollViewProps {}

class DividedScrollView extends React.PureComponent<DividedScrollViewProps> {
  state = { showDivider: false }

  _onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => this.setState({
    showDivider: nativeEvent.contentOffset.y > 0,
  })

  render() {
    const { showDivider } = this.state
    return (
      <React.Fragment>
        <Divider hidden={!showDivider} />
        <ScrollView
          onScroll={this._onScroll}
          scrollEventThrottle={160}
          contentContainerStyle={styles.contentContainer}
          {...this.props}
        />
      </React.Fragment>
    )
  }
}

export default DividedScrollView
