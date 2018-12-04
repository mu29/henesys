import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Icon,
  Text,
  Divider,
} from 'src/components'
import { typography, palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: palette.white.default,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
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

const SettingsItem: React.FunctionComponent<SettingsItemProps> = ({
  title,
  text,
  last,
  onPress,
}) => (
  <View>
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
        <Icon name="ios-arrow-forward" size={20} color={palette.gray[40]} />
      </View>
    </View>
    <Divider hidden={last} style={styles.divider} />
  </View>
)

export default SettingsItem
