import React from 'react'
import {
  View,
  Image,
  StyleSheet,
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
  <Button onPress={() => {}}>
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.icon} />
      <Text style={typography.body[1].black}>
        {label}
      </Text>
    </View>
  </Button>
)

export default React.memo(MissionItem)
