/* tslint:disable */
import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import {
  Modal,
  Text,
  SelectableCharacterInfo,
} from 'src/components'
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
    padding: 16,
  },
  title: {
    marginBottom: 12,
  },
})

export interface CharacterSelectModalProps {
  characters: string[],
  isVisible: boolean,
}

const CharacterSelectModal: React.SFC<CharacterSelectModalProps> = ({
  characters,
  ...props
}) => (
  <Modal {...props}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={typography.heading[2].black.bold}>
          캐릭터 선택
        </Text>
        <Text style={typography.body[3].gray}>
          일과를 기록할 캐릭터를 선택하세요.
        </Text>
      </View>
      <SelectableCharacterInfo name="적류" />
      <SelectableCharacterInfo name="별빛뒤로" selected />
      <SelectableCharacterInfo name="백동요" />
    </View>
  </Modal>
)

export default CharacterSelectModal
