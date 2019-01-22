import React from 'react'
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation'
import { Icon } from 'src/components'
import {
  MissionScreen,
  StatsScreen,
  CommunityScreen,
  SettingsScreen,
  AddCharacterScreen,
  EditScreen,
  WebViewScreen,
  WelcomeScreen,
} from 'src/components'
import { palette } from 'src/styles'

const MainTab = createBottomTabNavigator({
  Mission: MissionScreen,
  Stats: StatsScreen,
  Community: CommunityScreen,
  Settings: SettingsScreen,
}, {
  initialRouteName: 'Community',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let iconName = ''
      switch (routeName) {
        case 'Mission':
          iconName += 'md-list-box'
          break
        case 'Stats':
          iconName += 'md-pie'
          break
        case 'Community':
          iconName += 'ios-text'
          break
        case 'Settings':
          iconName += 'md-settings'
          break
      }

      return <Icon name={ iconName } size={ 25 } color={ tintColor || palette.gray[60] } />
    },
  }),
  tabBarOptions: {
    activeTintColor: palette.primary.default,
    inactiveTintColor: palette.gray[60],
    showLabel: false,
    style: {
      borderTopColor: palette.gray[50],
      backgroundColor: palette.white.default,
    },
  },
})

const AppSwitch = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Main: MainTab,
  Create: AddCharacterScreen,
}, {
  initialRouteName: 'Welcome',
})

export default createStackNavigator({
  App: AppSwitch,
  AddCharacter: AddCharacterScreen,
  Edit: EditScreen,
  WebView: WebViewScreen,
}, {
  mode: 'modal',
  headerMode: 'none',
})
