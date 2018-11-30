import React from 'react'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import {
  Modal,
  Text,
  Button,
} from 'src/components'
import { SelectableCharacterInfo } from 'src/containers'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    margin: 16,
    borderRadius: 4,
    backgroundColor: palette.white.default,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[20],
  },
  title: {
    marginBottom: 12,
  },
  characters: {
    maxHeight: 195,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: palette.primary.default,
  },
})

export interface CharacterSelectModalProps extends Partial<NavigationInjectedProps> {
  characters: string[],
  isVisible: boolean,
  close: () => void,
}

class CharacterSelectModal extends React.PureComponent<CharacterSelectModalProps> {
  onAdd = () => {
    const { close, navigation } = this.props
    close()
    if (navigation) {
      navigation.push('AddCharacter', { close: true })
    }
  }

  render() {
    const {
      characters,
      isVisible,
      close,
    } = this.props
    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={close}
        onBackButtonPress={close}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={typography.heading[2].black.bold}>
              캐릭터 선택
            </Text>
            <Text style={typography.body[3].gray}>
              일과를 기록할 캐릭터를 선택하세요.
            </Text>
          </View>
          <ScrollView style={styles.characters}>
            <View>
              {characters.map(character => <SelectableCharacterInfo key={character} name={character} />)}
            </View>
          </ScrollView>
          <Button onPress={this.onAdd} style={styles.button}>
            <Text style={typography.body[1].white}>
              다른 캐릭터 추가
            </Text>
          </Button>
        </View>
      </Modal>
    )
  }
}

export default withNavigation(CharacterSelectModal)
