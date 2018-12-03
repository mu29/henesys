import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Icon } from 'src/components'
import {
  MissionScreen,
  StatsScreen,
  SettingsScreen,
  AddCharacterScreen,
  EditScreen,
} from 'src/components'
import { palette } from 'src/styles'

const MainTab = createBottomTabNavigator({
  Mission: MissionScreen,
  Stats: StatsScreen,
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

export default createStackNavigator({
  Main: MainTab,
  AddCharacter: AddCharacterScreen,
  Edit: EditScreen,
}, {
  mode: 'modal',
  headerMode: 'none',
})
