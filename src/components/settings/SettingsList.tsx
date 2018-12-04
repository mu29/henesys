import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  DividedScrollView,
  AccountInfo,
  SettingsSection,
  SettingsItem,
} from 'src/components'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[30],
  },
})

export interface SettingsListProps {}

const SettingsList: React.FunctionComponent<SettingsListProps> = () => (
  <DividedScrollView contentContainerStyle={styles.contentContainer}>
    <View style={styles.container}>
      <AccountInfo />
      <SettingsSection title="알림">
        <SettingsItem title="할 일 완료 알림" />
        <SettingsItem title="우르스 알림" last />
      </SettingsSection>
      <SettingsSection title="기타">
        <SettingsItem title="문의하기" />
        <SettingsItem title="이용약관" />
        <SettingsItem title="오픈소스 라이센스" />
        <SettingsItem title="앱 평가하기" />
        <SettingsItem title="친구에게 추천하기" last />
      </SettingsSection>
    </View>
  </DividedScrollView>
)

export default React.memo(SettingsList)
