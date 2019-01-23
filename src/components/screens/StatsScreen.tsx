import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Header,
  StatsView,
} from 'src/components'
import {
  CharacterSelectModal,
  SwapButton,
} from 'src/containers'
import { withSafeArea } from 'src/wrappers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swapButton: {
    padding: 4,
  },
})

const StatsScreen: React.FunctionComponent<{}> = () => (
  <View style={styles.container}>
    <Header title="통계">
      <SwapButton />
    </Header>
    <StatsView />
    <CharacterSelectModal />
  </View>
)

export default withSafeArea(React.memo(StatsScreen))
