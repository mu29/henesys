import React from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
import {
  Button,
  Text,
} from 'src/components'
import { EditableMissionList } from 'src/containers'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: palette.primary.default,
  },
})

export interface SettingsViewProps {
  character: string,
  remove: () => void,
}

class SettingsView extends React.PureComponent<SettingsViewProps> {
  onRemove = () => {
    const { character, remove } = this.props
    Alert.alert(
      character,
      '정말 삭제하시겠습니까?',
      [
        { text: '아니오', onPress: () => {} },
        { text: '예', onPress: () => remove() },
      ],
      { cancelable: true },
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <EditableMissionList />
        <Button onPress={this.onRemove} style={styles.button}>
          <Text style={typography.body[1].white}>
            캐릭터 삭제
          </Text>
        </Button>
      </View>
    )
  }
}

export default SettingsView
