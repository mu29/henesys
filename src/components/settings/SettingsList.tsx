import React from 'react'
import {
  View,
  Switch,
  ScrollView,
  Linking,
  Share,
  StyleSheet,
  Platform,
} from 'react-native'
import {
  withNavigation,
  NavigationInjectedProps,
} from 'react-navigation'
import {
  AccountInfo,
  SettingsSection,
  SettingsItem,
} from 'src/components'
import { withTopDivider } from 'src/wrappers'
import { palette } from 'src/styles'

const DividedScrollView = withTopDivider(ScrollView)

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

export interface SettingsListProps extends Partial<NavigationInjectedProps> {
  urusNotification: boolean,
  enableUrusNotification: () => void,
  disableUrusNotification: () => void,
}

class SettingsList extends React.PureComponent<SettingsListProps> {
  _openUrl = (url: string) => Linking.canOpenURL(url)
    .then(r => r && Linking.openURL(url))
    .catch(() => {})

  _openEmailClient = () => this._openUrl('mailto:mu29@yeoubi.net')

  _openTermsPage = () => {
    const { navigation } = this.props
    if (navigation) {
      navigation.push('WebView', { url: 'https://yeoubi.net/policies/henesys.html' })
    }
  }

  _share = () => Share.share({
    message: '헤네시스 - 메이플스토리 일과 기록, 통계 및 커뮤니티\n' + Platform.select({
      ios: 'https://itunes.apple.com/',
      android: 'https://play.google.com/store/apps/details?id=net.yeoubi.henesys',
    }),
  })

  _toggleUrusNotification = (value: boolean) => {
    const {
      enableUrusNotification,
      disableUrusNotification,
    } = this.props
    if (value) {
      enableUrusNotification()
    } else {
      disableUrusNotification()
    }
  }

  render() {
    const { urusNotification } = this.props
    return (
      <DividedScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <AccountInfo />
          <SettingsSection title="알림">
            <SettingsItem title="우르스 알림" last>
              <Switch
                onValueChange={this._toggleUrusNotification}
                value={urusNotification}
                trackColor={{
                  true: palette.primary.light,
                  false: palette.gray[30],
                }}
              />
            </SettingsItem>
          </SettingsSection>
          <SettingsSection title="기타">
            <SettingsItem title="문의하기" onPress={this._openEmailClient} />
            <SettingsItem title="이용약관" onPress={this._openTermsPage} />
            <SettingsItem title="친구에게 추천하기" onPress={this._share} last />
          </SettingsSection>
        </View>
      </DividedScrollView>
    )
  }
}

export default withNavigation(SettingsList)
