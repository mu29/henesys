import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'src/components'
import {
  MissionScreen,
  StatsScreen,
  SettingsScreen,
} from 'src/screens'
import { palette } from 'src/styles'

export default createBottomTabNavigator({
  Mission: MissionScreen,
  Stats: StatsScreen,
  Settings: SettingsScreen,
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let iconName = 'md-'
      switch (routeName) {
        case 'Mission':
          iconName += 'list-box'
          break
        case 'Stats':
          iconName += 'pie'
          break
        case 'Settings':
          iconName += 'settings'
          break
      }

      return <Icon name={ iconName } size={ 25 } color={ tintColor || palette.gray['60'] } />
    },
  }),
  tabBarOptions: {
    activeTintColor: palette.primary.default,
    inactiveTintColor: palette.gray['60'],
    showLabel: false,
    style: {
      borderTopColor: palette.gray['50'],
      backgroundColor: palette.gray['10'],
    },
  },
})
