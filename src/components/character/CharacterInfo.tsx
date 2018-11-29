import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import {
  Divider,
  Text,
} from 'src/components'
import { typography } from 'src/styles'
import { GetCharacterInfoParams } from 'src/store/actions'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    width: 48,
    height: 48,
  },
  divider: {
    height: 44,
    marginHorizontal: 4,
  },
  description: {
    marginLeft: 8,
    justifyContent: 'center',
  },
})

export interface CharacterInfoProps {
  name: string,
  level?: number,
  job?: string,
  imageUrl?: string,
  color?: string,
  getCharacterInfo: (params: GetCharacterInfoParams) => void,
}

class CharacterInfo extends React.PureComponent<CharacterInfoProps> {
  componentWillMount() {
    const { name, imageUrl, getCharacterInfo } = this.props
    if (!imageUrl) {
      getCharacterInfo({ name })
    }
  }

  render() {
    const {
      name,
      level,
      job,
      imageUrl,
      color,
    } = this.props

    return (
      <View style={styles.container}>
        <Image
          source={Object.assign({}, imageUrl ? { uri: imageUrl } : {})}
          style={styles.avatar}
        />
        <Divider color={color} style={styles.divider} vertical />
        <View style={styles.description}>
          <Text style={typography.heading[3].black.bold}>
            {name}
          </Text>
          <Text style={typography.body[3].gray}>
            Lv. {level} {job}
          </Text>
        </View>
      </View>
    )
  }
}

export default CharacterInfo
