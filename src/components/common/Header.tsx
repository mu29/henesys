import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Text } from 'src/components'
import { typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export interface HeaderProps {
  title: string,
  children?: Node,
}

const Header: React.SFC<HeaderProps> = ({ title, children }) => (
  <View style={styles.container}>
    <Text style={typography.heading['1'].black}>
      {title}
    </Text>
    <View>
      {children}
    </View>
  </View>
)

export default React.memo(Header)
