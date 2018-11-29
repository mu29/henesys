import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { CharacterInfo } from 'src/containers'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 4,
    borderTopWidth: 1,
    borderTopColor: palette.gray[20],
    backgroundColor: palette.white.default,
  },
  selected: {
    backgroundColor: palette.gray[20],
  },
})

export interface SelectableCharacterInfoProps {
  name: string,
  selected?: boolean,
}

const SelectableCharacterInfo: React.SFC<SelectableCharacterInfoProps> = ({
  name,
  selected,
}) => (
  <View style={[styles.container, selected && styles.selected]}>
    <CharacterInfo name={name} color={palette.gray[selected ? 30 : 20]} />
  </View>
)

export default React.memo(SelectableCharacterInfo)
