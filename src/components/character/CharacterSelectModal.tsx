import React from 'react'
import {
  View,
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
  },
  title: {
    marginBottom: 12,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: palette.primary.default,
  },
})

export interface CharacterSelectModalProps {
  characters: string[],
  isVisible: boolean,
}

const CharacterSelectModal: React.SFC<CharacterSelectModalProps> = ({
  characters,
  isVisible,
}) => (
  <Modal isVisible={isVisible}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={typography.heading[2].black.bold}>
          캐릭터 선택
        </Text>
        <Text style={typography.body[3].gray}>
          일과를 기록할 캐릭터를 선택하세요.
        </Text>
      </View>
      {characters.map(character => <SelectableCharacterInfo key={character} name={character} />)}
      <Button onPress={() => {}}>
        <View style={styles.button}>
          <Text style={typography.body[1].white}>
            다른 캐릭터 추가
          </Text>
        </View>
      </Button>
    </View>
  </Modal>
)

export default React.memo(CharacterSelectModal)
