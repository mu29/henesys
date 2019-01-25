import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Text,
  Button,
} from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    margin: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: palette.gray[20],
  },
  selected: {
    backgroundColor: palette.primary.light,
  },
})

export interface MenuItemProps {
  label: string
  selected: boolean
  onPress: () => void
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  label,
  selected,
  onPress,
}) => (
  <Button onPress={onPress}>
    <View style={[styles.container, selected && styles.selected]}>
      <Text style={typography.body[1][selected ? 'white' : 'black']}>
        {label}
      </Text>
    </View>
  </Button>
)

export default React.memo(MenuItem)
