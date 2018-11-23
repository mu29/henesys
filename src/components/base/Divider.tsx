import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  vertical: {
    width: 1,
    height: '100%',
    marginHorizontal: 4,
  },
  horizontal: {
    width: '100%',
    height: 1,
    marginHorizontal: 4,
  },
})

export interface DividerProps {
  vertical?: boolean,
  color?: string,
}

const Divider: React.SFC<DividerProps> = ({
  vertical,
  color,
}) => {
  const withColor = { backgroundColor: color }
  return (
    <View style={[vertical ? styles.vertical : styles.horizontal, withColor]} />
  )
}

Divider.defaultProps = {
  color: palette.gray[30],
}

export default React.memo(Divider)
