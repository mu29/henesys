import React from 'react'
import {
  SectionList,
  StyleSheet,
  SectionListProps,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'
import { Divider } from 'src/components'

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 8,
  },
})

export interface DividedSectionListProps<T> extends SectionListProps<T> {}

class DividedSectionList<T> extends React.PureComponent<DividedSectionListProps<T>> {
  state = { showDivider: false }

  _onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => this.setState({
    showDivider: nativeEvent.contentOffset.y > 0,
  })

  render() {
    const { showDivider } = this.state
    return (
      <React.Fragment>
        <Divider hidden={!showDivider} />
        <SectionList
          onScroll={this._onScroll}
          scrollEventThrottle={160}
          contentContainerStyle={styles.contentContainer}
          {...this.props}
        />
      </React.Fragment>
    )
  }
}

export default DividedSectionList
