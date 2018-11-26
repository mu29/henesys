import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Text } from 'src/components'
import { typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    marginBottom: 24,
  },
  day: {
    marginTop: 4,
    marginLeft: 2,
  },
})

export interface AchievementDaysProps {
  title: string,
  days: number,
  color: string,
}

const AchievementDays: React.SFC<AchievementDaysProps> = ({
  title,
  days,
  color,
}) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    <Text style={[typography.tiny[1].white, styles.title]}>
      {title}
    </Text>
    <View style={styles.horizontal}>
      <Text style={typography.heading[1].white.bold}>
        {days}
      </Text>
      <Text style={[typography.body[2].white, styles.day]}>
        일
      </Text>
    </View>
  </View>
)

export default AchievementDays
