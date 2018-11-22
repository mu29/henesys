import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  wrapper: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palette.gray['90'],
    backgroundColor: palette.primary.default,
  },
  image: {
    width: 40,
    height: 40,
  },
})

export interface AvatarProps {
  uri: string,
}

const Avatar: React.SFC<AvatarProps> = ({ uri }) => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={{ uri }} />
  </View>
)

export default React.memo(Avatar)
