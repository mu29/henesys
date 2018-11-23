import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import {
  Divider,
  Text,
  Progress,
} from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: palette.gray[15],
  },
  avatar: {
    width: 48,
    height: 48,
  },
  divider: {
    marginHorizontal: 4,
  },
  description: {
    marginLeft: 8,
    marginRight: 'auto',
    justifyContent: 'center',
  },
})

export interface UserInfoProps {
  name: string,
  level: number,
  job: string,
  imageUrl: string,
  progress: number,
}

const UserInfo: React.SFC<UserInfoProps> = ({
  name,
  level,
  job,
  imageUrl,
  progress,
}) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: imageUrl }} />
    <Divider style={styles.divider} vertical />
    <View style={styles.description}>
      <Text style={typography.heading[3].black}>
        {name}
      </Text>
      <Text style={typography.body[2].gray}>
        Lv. {level} {job}
      </Text>
    </View>
    <Progress.Circle
      color={palette.secondary.default}
      unfilledColor={palette.gray[30]}
      borderWidth={0}
      progress={progress}
      animated={false}
      showsText
    />
  </View>
)

export default React.memo(UserInfo)
