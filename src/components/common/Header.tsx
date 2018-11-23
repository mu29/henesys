import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Text } from 'src/components'
import { typography, palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  border: {
    borderBottomColor: palette.gray[30],
    borderBottomWidth: 1,
  },
})

export interface HeaderProps {
  title: string,
  border?: boolean,
  children?: React.ReactElement<any>,
}

const Header: React.SFC<HeaderProps> = ({ title, border, children }) => (
  <View style={[styles.container, border && styles.border]}>
    <Text style={typography.heading[1].black}>
      {title}
    </Text>
    <View>
      {children}
    </View>
  </View>
)

export default React.memo(Header)
