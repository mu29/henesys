import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { AchievementDay } from 'src/components'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
})

export interface AchievementListProps {
  completes: number,
  almostCompletes: number,
  incompletes: number,
}

const AchievementList: React.SFC<AchievementListProps> = ({
  completes,
  almostCompletes,
  incompletes,
}) => (
  <View style={styles.container}>
    <AchievementDay title="완료!" days={completes} color={palette.primary.default} />
    <AchievementDay title="거의 완료" days={almostCompletes} color={palette.primary.light} />
    <AchievementDay title="성과 저조" days={incompletes} color={palette.gray[50]} />
  </View>
)

export default AchievementList
