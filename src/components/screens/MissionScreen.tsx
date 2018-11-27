import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Button,
  Icon,
  Header,
  MissionList,
  withSafeArea,
} from 'src/components'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swapButton: {
    padding: 4,
  },
})

const MissionScreen: React.SFC<{}> = () => (
  <View style={styles.container}>
    <Header title="기록">
      <Button
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        onPress={() => {}}
        style={styles.swapButton}
      >
        <Icon name="md-swap" size={20} color={palette.gray[90]} />
      </Button>
    </Header>
    <MissionList />
  </View>
)

export default withSafeArea(React.memo(MissionScreen))
