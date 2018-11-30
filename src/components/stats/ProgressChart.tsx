import React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {
  Text,
  Divider,
  BarChart,
} from 'src/components'
import { palette, typography } from 'src/styles'

const DEVICE_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  descriptionArea: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 12,
    left: 16,
    right: DEVICE_WIDTH / 2,
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    marginTop: 8,
    marginBottom: 8,
  },
  chart: {
    height: 52,
  },
})

export interface ProgressChartProps {
  completes: number,
  monthlyProgress: number,
  progressList: number[],
}

const ProgressChart: React.FunctionComponent<ProgressChartProps> = ({
  completes,
  monthlyProgress,
  progressList,
}) => (
  <View style={styles.container}>
    <View style={styles.descriptionArea}>
      <View style={styles.description}>
        <Text style={typography.heading[1].black.bold}>
          {completes}회
        </Text>
        <Text style={typography.tiny[1].lightGray}>
          완료 횟수
        </Text>
      </View>
      <Divider vertical style={styles.divider} />
      <View style={styles.description}>
        <Text style={typography.heading[1].black.bold}>
          {(monthlyProgress * 100).toFixed(1)}%
        </Text>
        <Text style={typography.tiny[1].lightGray}>
          완료율
        </Text>
      </View>
    </View>
    <BarChart
      style={styles.chart}
      data={new Array(Math.max(0, 30 - progressList.length)).fill(0).concat(progressList)}
      spacingInner={0.5}
      contentInset={{ left: DEVICE_WIDTH / 2, right: 16 }}
      svg={{
        stroke: palette.primary.default,
        fill: palette.primary.default,
      }}
    />
  </View>
)

export default React.memo(ProgressChart)
