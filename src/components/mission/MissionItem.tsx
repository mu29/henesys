import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import {
  Button,
  Text,
} from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: palette.white.default,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  closed: {
    color: palette.gray[60],
    textDecorationLine: 'line-through',
  },
})

export interface MissionItemProps {
  label: string,
  name: string,
  closed?: boolean,
  onPress?: () => void,
}

class MissionItem extends React.PureComponent<MissionItemProps> {
  renderInner() {
    const {
      label,
      name,
      closed,
    } = this.props
    return (
      <View style={styles.container}>
        <Image source={{uri: name}} style={styles.icon} />
        <Text style={[typography.body[1].black, closed && styles.closed]}>
          {label}
        </Text>
      </View>
    )
  }

  render() {
    const { onPress } = this.props
    return onPress ? (
      <Button onPress={onPress}>
        {this.renderInner()}
      </Button>
    ) : this.renderInner()
  }
}

export default MissionItem
