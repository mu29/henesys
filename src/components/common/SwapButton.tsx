import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Icon,
  Button,
} from 'src/components'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
})

export interface SwapButtonProps {
  onPress: () => void,
}

const SwapButton: React.SFC<SwapButtonProps> = ({ onPress }) => (
  <Button
    hitSlop={{ top: 4, bottom: 4, left: 4, right: 4 }}
    onPress={onPress}
    style={styles.container}
    round
  >
    <Icon name="md-swap" size={20} color={palette.gray[90]} />
  </Button>
)

export default SwapButton
