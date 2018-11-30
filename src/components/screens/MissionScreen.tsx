import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Header } from 'src/components'
import {
  MissionList,
  CharacterSelectModal,
  SwapButton,
  SettingsButton,
} from 'src/containers'
import { withSafeArea } from 'src/wrappers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const MissionScreen: React.SFC<{}> = () => (
  <View style={styles.container}>
    <Header title="기록">
      <SwapButton />
      <SettingsButton />
    </Header>
    <MissionList />
    <CharacterSelectModal />
  </View>
)

export default withSafeArea(React.memo(MissionScreen))
