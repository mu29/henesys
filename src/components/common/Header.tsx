import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Text } from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 8,
    backgroundColor: palette.white.default,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
  },
  children: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export interface HeaderProps {
  title: string,
  children?: React.ReactElement<any> | Array<React.ReactElement<any>>,
}

const Header: React.FunctionComponent<HeaderProps> = ({ title, children }) => (
  <View style={styles.container}>
    <Text style={[typography.heading[1].black.bold, styles.title]}>
      {title}
    </Text>
    <View style={styles.children}>
      {children}
    </View>
  </View>
)

export default React.memo(Header)
