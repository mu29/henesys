import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  wrapper: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palette.black.default,
    backgroundColor: palette.gray['90'],
  },
  image: {
    width: 90,
    height: 90,
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
