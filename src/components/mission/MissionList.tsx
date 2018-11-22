import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import {
  UserInfo,
  MissionItem,
} from 'src/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const uri = 'https://avatar.maplestory.nexon.com/Character/MFEBDDMBFFJDDGOHBNHCOHCHPJENEOIMBCFGMLEFAKLBAIPFHDFDAML' +
'GJPPEGHDFPOHJHGEKIINFKPIKIBCGBEFDLCHFOOHHPFJGDNEEJJJOCHOKNMAPMDHEJLPADDEEBLNIBEGJPKAADGHPJPLKIOIJDKCHOCBBEGMPDPKH' +
'CMPIPGHFNLMDJMFLHMKACGKNGENBLELDKEAMOMGFAHFIKHDCIFJGOBAGFCBIFCEEADBDKPPFKAMCMLBNFNGFDIAD.png'

export interface MissionListProps {}

const MissionList: React.SFC<MissionListProps> = () => (
  <ScrollView style={styles.container}>
    <UserInfo name="적류" level={221} job="메르세데스" imageUrl={uri} progress={0.58} />
    <MissionItem label="드림 브레이커" image="lacheln" />
  </ScrollView>
)

export default React.memo(MissionList)
