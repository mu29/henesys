import React from 'react'
import {
  View,
  Alert,
  StyleSheet,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
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
    margin: 16,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: palette.primary.default,
  },
})

export interface EditViewProps extends Partial<NavigationInjectedProps> {
  character: string,
  canRemove: boolean,
  remove: () => void,
}

class EditView extends React.PureComponent<EditViewProps> {
  _onRemove = () => {
    const {
      character,
      canRemove,
      remove,
      navigation,
    } = this.props

    Alert.alert(character, '정말 삭제하시겠습니까?', [{
      text: '아니오',
      onPress: () => {},
    }, {
      text: '예',
      onPress: () => {
        if (canRemove) {
          remove()
        }
        if (navigation) {
          navigation.goBack()
        }
      },
    }], {
      cancelable: true,
    })
  }

  _renderFooter = () => (
    <Button onPress={this._onRemove} style={styles.button}>
      <Text style={typography.body[1].white}>
        캐릭터 삭제
      </Text>
    </Button>
  )

  render() {
    return (
      <View style={styles.container}>
        <EditableMissionList footer={this._renderFooter} />
      </View>
    )
  }
}

export default withNavigation(EditView)
