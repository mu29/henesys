import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Section,
  Calendar,
  ProgressChart,
  DividedScrollView,
} from 'src/components'
import { UserInfo } from 'src/containers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const progressList = [
  1, 0.2, 0.4, 0.5, 0.2, 0.1, 1, 0.7, 0.9, 0, 0.1, 0, 1, 1, 0.7,
  1, 0.2, 0.4, 0.5, 0.2, 0.1, 1, 0.7, 0.9, 0, 0.1, 0, 1, 1, 0.7,
]

export interface StatsViewProps {}

const StatsView: React.SFC<StatsViewProps> = () => (
  <DividedScrollView
    showsVerticalScrollIndicator={false}
    style={styles.container}
  >
    <View>
      <UserInfo progress={0.1} />
      <Calendar progressList={progressList} />
      <Section title="최근 30일" />
      <ProgressChart progressList={progressList.map(p => p * 10)} />
    </View>
  </DividedScrollView>
)

export default StatsView
