import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { StyleSheet } from 'react-native'
import {
  Button,
  Icon,
  Header,
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

class MissionScreen extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="친구">
          <Button style={styles.swapButton} onPress={() => {}}>
            <Icon name="md-swap" size={20} color={palette.gray['90']} />
          </Button>
        </Header>
      </SafeAreaView>
    )
  }
}

export default MissionScreen
