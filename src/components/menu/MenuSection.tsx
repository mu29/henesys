import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Text } from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: palette.gray[40],
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[40],
    backgroundColor: palette.gray[20],
  },
})

export interface MenuSectionProps {
  title: string,
}

const MenuSection: React.FunctionComponent<MenuSectionProps> = ({ title }) => (
  <View style={styles.container}>
    <Text style={typography.body[1].black}>
      {title}
    </Text>
  </View>
)

export default React.memo(MenuSection)
