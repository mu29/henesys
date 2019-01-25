import React, { RefObject } from 'react'
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollViewProps,
} from 'react-native'
import { Divider } from 'src/components'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 8,
  },
})

function withTopDivider<T extends ScrollViewProps>(Component: React.ComponentType<T>) {
  return class WithTopDivider extends React.PureComponent<T & { listRef?: RefObject<any> }> {
    state = { showDivider: false }

    _onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => this.setState({
      showDivider: nativeEvent.contentOffset.y > 0,
    })

    render() {
      const { showDivider } = this.state
      return (
        <React.Fragment>
          <Divider color={palette.gray[40]} hidden={!showDivider} />
          <Component
            ref={this.props.listRef}
            onScroll={this._onScroll}
            scrollEventThrottle={160}
            contentContainerStyle={styles.contentContainer}
            {...this.props}
          />
        </React.Fragment>
      )
    }
  }
}

export default withTopDivider
