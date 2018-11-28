import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Progress } from 'src/components'
import { CharacterInfo } from 'src/containers'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: palette.gray[15],
  },
  progress: {
    marginRight: 8,
  },
})

export interface CharacterStatusProps {
  name: string,
  progress: number,
}

class CharacterStatus extends React.PureComponent<CharacterStatusProps> {
  render() {
    const {
      name,
      progress,
    } = this.props

    return (
      <View style={styles.container}>
        <CharacterInfo name={name} />
        <Progress.Circle
          color={palette.secondary.default}
          unfilledColor={palette.gray[30]}
          borderWidth={0}
          progress={progress}
          animated={false}
          style={styles.progress}
          showsText
        />
      </View>
    )
  }
}

export default CharacterStatus