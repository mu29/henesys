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
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: palette.gray[40],
    backgroundColor: palette.white.default,
  },
  loading: {
    height: 0,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export interface AdBannerState {
  isLoaded: boolean
}

class AdBanner extends React.PureComponent<{}, AdBannerState> {
  state = {
    isLoaded: false,
  }

  _onAdLoaded = () => this.setState({ isLoaded: true })

  render() {
    if (!config.admobEnabled) {
      return null
    }

    return (
      <View style={[styles.container, !this.state.isLoaded && styles.loading]}>
        <Banner
          unitId={ARTICLE_VIEW_UNIT_ID}
          size="SMART_BANNER"
          request={request.build()}
          style={styles.banner}
          onAdLoaded={this._onAdLoaded}
        />
      </View>
    )
  }
}

export default AdBanner
