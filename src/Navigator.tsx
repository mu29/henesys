import React from 'react'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation'
import { Icon, OpenInWebButton } from 'src/components'
import {
  MissionScreen,
  StatsScreen,
  CommunityScreen,
  SettingsScreen,
  ArticleScreen,
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

const MainStack = createStackNavigator({
  MainTab: {
    screen: MainTab,
    navigationOptions: {
      header: null,
      headerStyle: {
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
        elevation: 0,
      },
    },
  },
  Article: {
    screen: ArticleScreen,
    navigationOptions: {
      headerTintColor: palette.gray[90],
      headerStyle: {
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
        elevation: 0,
      },
      headerRight: <OpenInWebButton />,
      headerRightContainerStyle: {
        paddingRight: Platform.select({
          ios: 20,
          android: 12,
        }),
      },
      headerLeftContainerStyle: {
        paddingLeft: Platform.select({
          ios: 8,
          android: 0,
        }),
      },
    },
  },
}, {
  headerBackTitleVisible: false,
})

const AppSwitch = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Main: MainStack,
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
