import React from 'react'
import {
  SectionList,
  SectionListData,
  StyleSheet,
} from 'react-native'
import { Section } from 'src/components'
import { withTopDivider } from 'src/wrappers'
import {
  DailyCharacterStatus,
  MissionItem,
} from 'src/containers'
import {
  Mission as MissionType,
  MissionList as MissionListType,
} from 'src/constants/missions'

const DividedSectionList = withTopDivider(SectionList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export interface MissionListProps {
  missions: MissionListType[]
}

interface ISectionHeader {
  section: SectionListData<MissionType>,
}

class MissionList extends React.Component<MissionListProps> {
  shouldComponentUpdate(nextProps: MissionListProps) {
    return JSON.stringify(this.props.missions) !== JSON.stringify(nextProps.missions)
  }

  _keyExtractor = (item: MissionType) => item.key

  _renderHeader = () => (
    <DailyCharacterStatus />
  )

  _renderSectionHeader = ({ section: { title } }: ISectionHeader) => (
    <Section title={title} />
  )

  _renderItem = ({ item }: { item: MissionType }) => (
    <MissionItem label={item.label} name={item.key} />
  )

  render() {
    const { missions } = this.props
    const sections = missions
      .map(m => ({ title: m.label, data: m.items }))
      .filter(m => m.data.length > 0)

    return (
      <DividedSectionList
        sections={sections}
        keyExtractor={this._keyExtractor}
        renderSectionHeader={this._renderSectionHeader}
        renderItem={this._renderItem}
        ListHeaderComponent={this._renderHeader}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    )
  }
}

export default MissionList
