import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Text } from 'src/components'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
  },
  text: {
    color: palette.white.default,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
})

export interface UserInfoProps {
  name: string,
  level: string,
  job: string,
}

const UserInfo: React.SFC<UserInfoProps> = ({ name, level, job }) => (
  <View style={styles.wrapper}>
    <Text style={[styles.text, styles.name]}>
      {name}
    </Text>
    <View style={styles.horizontal}>
      <Text style={styles.text}>
        {level}
      </Text>
      <Text style={styles.text}>
        {job}
      </Text>
    </View>
  </View>
)

export default React.memo(UserInfo)
