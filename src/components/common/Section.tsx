import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Text } from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
    borderTopWidth: 1,
    borderTopColor: palette.gray[30],
    backgroundColor: palette.white.default,
  },
})

export interface SectionProps {
  title: string,
}

const Section: React.SFC<SectionProps> = ({ title }) => (
  <View style={styles.container}>
    <Text style={typography.tiny[1].gray}>
      {title}
    </Text>
  </View>
)

export default React.memo(Section)
