import React from 'react'
import throttle from 'lodash/throttle'
import HapticFeedback from 'react-native-haptic-feedback'
import {
  View,
  Image,
  StyleSheet,
  Platform,
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
    color: palette.gray[50],
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
  pressWithHaptic = () => {
    const { onPress } = this.props
    if (onPress) {
      if (Platform.OS === 'ios') {
        HapticFeedback.trigger('selection', false)
      }
      onPress()
    }
  }

  // tslint:disable-next-line
  onPress = throttle(this.pressWithHaptic, 200)

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
    return this.props.onPress ? (
      <Button onPress={this.onPress} activeOpacity={0.8}>
        {this.renderInner()}
      </Button>
    ) : this.renderInner()
  }
}

export default MissionItem
