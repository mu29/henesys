import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Calendar,
  DividedScrollView,
} from 'src/components'
import { UserInfo } from 'src/containers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export interface StatsViewProps {}

const StatsView: React.SFC<StatsViewProps> = () => (
  <DividedScrollView
    showsVerticalScrollIndicator={false}
    style={styles.container}
  >
    <View>
      <UserInfo progress={0.1} />
      <Calendar progressList={[0, 0, 0, 0.5, 0.2, 0.1, 1, 0.7, 0.9, 0, 0.1, 0, 1, 1]} />
    </View>
  </DividedScrollView>
)

export default StatsView
