import React from 'react'
import {
  SectionListData,
  StyleSheet,
} from 'react-native'
import {
  DividedSectionList,
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
  section: SectionListData<Mission>
}

class MissionList extends React.PureComponent {
  keyExtractor = (item: Mission) => item.key

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
      <DividedSectionList
        sections={Object.values(missions).map(m => ({ title: m.label, data: m.items }))}
        keyExtractor={this.keyExtractor}
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
