import React from 'react'
import {
  View,
  SectionList,
  SectionListData,
  ScrollView,
  StyleSheet,
} from 'react-native'
import {
  UserInfo,
  Section,
  MissionItem,
} from 'src/components'
import { missions, Mission } from 'src/constants/missions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const uri = 'https://avatar.maplestory.nexon.com/Character/MFEBDDMBFFJDDGOHBNHCOHCHPJENEOIMBCFGMLEFAKLBAIPFHDFDAML' +
'GJPPEGHDFPOHJHGEKIINFKPIKIBCGBEFDLCHFOOHHPFJGDNEEJJJOCHOKNMAPMDHEJLPADDEEBLNIBEGJPKAADGHPJPLKIOIJDKCHOCBBEGMPDPKH' +
'CMPIPGHFNLMDJMFLHMKACGKNGENBLELDKEAMOMGFAHFIKHDCIFJGOBAGFCBIFCEEADBDKPPFKAMCMLBNFNGFDIAD.png'

export interface MissionListProps {}

interface ISectionHeader {
  section: SectionListData<{ title: string }>
}

class MissionList extends React.PureComponent {
  keyExtractor = ({ item }: { item: Mission }) => item.key

  renderHeader = () => (
    <UserInfo
      name="적류"
      level={221}
      job="메르세데스"
      imageUrl={uri}
      progress={0.58}
    />
  )

  renderSectionHeader = ({ section: { title } }: ISectionHeader) => (
    <Section title={title} />
  )

  renderItem = ({ item }: { item: Mission }) => (
    <MissionItem label={item.label} image={item.key} />
  )

  render() {
    return (
      <SectionList
        sections={Object.values(missions).map(m => ({ title: m.label, data: m.items }))}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={this.renderHeader}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    )
  }
}

export default MissionList
