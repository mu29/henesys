import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Icon,
  Text,
  Button,
  Divider,
} from 'src/components'
import { typography, palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 16,
    backgroundColor: palette.white.default,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
  divider: {
    marginHorizontal: 16,
  },
})

export interface SettingsItemProps {
  title: string,
  text?: string,
  last?: boolean,
  onPress?: () => void,
}

class SettingsItem extends React.PureComponent<SettingsItemProps> {
  renderItem() {
    const {
      title,
      text,
      children,
    } = this.props
    return (
      <View style={styles.container}>
        <Text style={typography.body[2].black}>
          {title}
        </Text>
        <View style={styles.item}>
          {text && (
            <Text style={typography.body[2].lightGray}>
              {text}
            </Text>
          )}
          { children || <Icon name="ios-arrow-forward" size={20} color={palette.gray[40]} style={styles.icon} /> }
        </View>
      </View>
    )
  }

  renderInner() {
    const { onPress } = this.props
    return onPress ? (
      <Button onPress={onPress}>
        {this.renderItem()}
      </Button>
    ) : this.renderItem()
  }

  render() {
    const { last } = this.props
    return (
      <View>
        {this.renderInner()}
        {!last && <Divider style={styles.divider} />}
      </View>
    )
  }
}

export default SettingsItem
