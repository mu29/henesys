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
import { GetUserInfoParams } from 'src/store/actions'

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
    height: '100%',
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
  getUserInfo: (params: GetUserInfoParams) => void,
}

class UserInfo extends React.PureComponent<UserInfoProps> {
  componentWillMount() {
    const { name, getUserInfo } = this.props
    getUserInfo({ name })
  }

  render() {
    const {
      name,
      level,
      job,
      imageUrl,
      progress,
    } = this.props

    return (
      <View style={styles.container}>
        <Image
          source={Object.assign({}, imageUrl ? { uri: imageUrl } : {})}
          style={styles.avatar}
        />
        <Divider style={styles.divider} vertical />
        <View style={styles.description}>
          <Text style={typography.heading[3].black.bold}>
            {name}
          </Text>
          <Text style={typography.body[3].gray}>
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
  }
}

export default UserInfo
