import React from 'react'
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native'
import {
  Text,
  Icon,
  Divider,
} from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  streak: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 16,
  },
  divider: {
    marginVertical: 8,
  },
  icon: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    paddingTop: Platform.select({
      ios: 1,
      android: 0,
    }),
    paddingLeft: Platform.select({
      ios: 1,
      android: 0,
    }),
    borderRadius: 14,
    borderColor: palette.primary.default,
    borderWidth: 2,
  },
})

export interface StreaksProps {
  current: number,
  most: number,
}

const Streaks: React.SFC<StreaksProps> = ({ current, most }) => (
  <View style={styles.container}>
    <View style={styles.streak}>
      <View style={styles.icon}>
        <Icon name="ios-flame" size={ 20 } color={palette.primary.default} />
      </View>
      <View>
        <Text style={typography.heading[1].black.bold}>
          {current}
        </Text>
        <Text style={typography.tiny[1].gray}>
          현재 연속 달성
        </Text>
      </View>
    </View>
    <Divider style={styles.divider} vertical />
    <View style={styles.streak}>
      <View style={styles.icon}>
        <Icon name="md-trophy" size={ 16 } color={palette.primary.default} />
      </View>
      <View>
        <Text style={typography.heading[1].black.bold}>
          {most}
        </Text>
        <Text style={typography.tiny[1].gray}>
          최고 연속 달성
        </Text>
      </View>
    </View>
  </View>
)

export default React.memo(Streaks)
