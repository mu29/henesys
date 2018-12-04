import React from 'react'
import {
  View,
  Switch,
  Linking,
  StyleSheet,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
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

export interface SettingsListProps extends NavigationInjectedProps {}

class SettingsList extends React.PureComponent<SettingsListProps> {
  _openUrl = (url: string) => {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url)
    }
  }

  _openEmailClient = () => this._openUrl('mailto:mu29@yeoubi.net')

  _openTermsPage = () => {
    const { navigation } = this.props
    navigation.push('WebView', { url: 'https://naver.com' })
  }

  render() {
    return (
      <DividedScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <AccountInfo />
          <SettingsSection title="알림">
            <SettingsItem title="할 일 완료 알림" text="오후 9시" />
            <SettingsItem title="우르스 알림" last>
              <Switch />
            </SettingsItem>
          </SettingsSection>
          <SettingsSection title="기타">
            <SettingsItem title="문의하기" onPress={this._openEmailClient} />
            <SettingsItem title="이용약관" onPress={this._openTermsPage} />
            <SettingsItem title="오픈소스 라이센스" />
            <SettingsItem title="친구에게 추천하기" last />
          </SettingsSection>
        </View>
      </DividedScrollView>
    )
  }
}

export default withNavigation(SettingsList)
