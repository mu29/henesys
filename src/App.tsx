/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet,  View} from 'react-native'
import { UserInfo, Avatar } from 'src/components'

const uri = 'https://avatar.maplestory.nexon.com/Character/MFEBDDMBFFJDDGOHBNHCOHCHPJENEOIMBCFGMLEFAKLBAIPFHDFDAML' +
'GJPPEGHDFPOHJHGEKIINFKPIKIBCGBEFDLCHFOOHHPFJGDNEEJJJOCHOKNMAPMDHEJLPADDEEBLNIBEGJPKAADGHPJPLKIOIJDKCHOCBBEGMPDPKH' +
'CMPIPGHFNLMDJMFLHMKACGKNGENBLELDKEAMOMGFAHFIKHDCIFJGOBAGFCBIFCEEADBDKPPFKAMCMLBNFNGFDIAD.png'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar uri={uri} />
        <UserInfo name="적류" level="LV. 222" job="메르세데스"  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
})
