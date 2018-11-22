import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import {
  Text,
} from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white.default,
  },
  icon: {
    width: 24,
    height: 24,
  },
})

export interface MissionItemProps {
  label: string,
  image: string,
  completed?: boolean,
}

const MissionItem: React.SFC<MissionItemProps> = ({
  label,
  image,
  completed,
}) => (
  <View style={styles.container}>
    <Image source={{uri: image}} style={styles.icon} />
    <Text>
      {label}
    </Text>
  </View>
)

export default React.memo(MissionItem)
