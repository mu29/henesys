import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import firebase from 'react-native-firebase'
import config from 'src/constants/config'
import { ARTICLE_VIEW_UNIT_ID } from 'src/constants/admob'
import { palette } from 'src/styles'

// @ts-ignore
const Banner = firebase.admob.Banner
// @ts-ignore
const AdRequest = firebase.admob.AdRequest
const request = new AdRequest()

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: palette.gray[40],
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class AdBanner extends React.PureComponent {
  render() {
    if (!config.admobEnabled) {
      return null
    }

    return (
      <View style={styles.container}>
        <Banner
          unitId={ARTICLE_VIEW_UNIT_ID}
          size="SMART_BANNER"
          request={request.build()}
          style={styles.banner}
        />
      </View>
    )
  }
}

export default AdBanner
