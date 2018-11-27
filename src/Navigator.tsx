import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'src/components'
import {
  MissionScreen,
  StatsScreen,
  CommunityScreen,
  ProfileScreen,
} from 'src/components'
import { palette } from 'src/styles'

export default createBottomTabNavigator({
  Mission: MissionScreen,
  Stats: StatsScreen,
  Community: CommunityScreen,
  Profile: ProfileScreen,
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
        case 'Profile':
          iconName += 'md-person'
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
