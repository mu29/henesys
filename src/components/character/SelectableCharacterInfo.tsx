import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'src/components'
import { CharacterInfo } from 'src/containers'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[20],
    backgroundColor: palette.white.default,
  },
  selected: {
    backgroundColor: palette.gray[20],
  },
})

export interface SelectableCharacterInfoProps {
  name: string,
  selected?: boolean,
  onSelect: () => void,
}

const SelectableCharacterInfo: React.SFC<SelectableCharacterInfoProps> = ({
  name,
  selected,
  onSelect,
}) => (
  <Button
    onPress={onSelect}
    style={[styles.container, selected && styles.selected]}
  >
    <CharacterInfo name={name} color={palette.gray[selected ? 30 : 20]} />
  </Button>
)

export default React.memo(SelectableCharacterInfo)
