import React from 'react'
import {
  Switch,
  SectionList,
  SectionListData,
  StyleSheet,
} from 'react-native'
import {
  Section,
  MissionItem,
} from 'src/components'
import { withTopDivider } from 'src/wrappers'
import {
  missions,
  weeklyMissions,
  Mission as MissionType,
} from 'src/constants/missions'
import { palette } from 'src/styles'

const DividedSectionList = withTopDivider(SectionList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export interface EditableMissionListProps {
  todos: string[],
  footer?: React.FunctionComponent<any>,
  toggle: (name: string, add: boolean) => void,
}

interface ISectionHeader {
  section: SectionListData<MissionType>,
}

class EditableMissionList extends React.PureComponent<EditableMissionListProps> {
  _keyExtractor = (item: MissionType) => item.key

  _renderSectionHeader = ({ section: { title } }: ISectionHeader) => (
    <Section title={title} />
  )

  _renderItem = ({ item }: { item: MissionType }) => {
    const { todos, toggle } = this.props
    return (
      <MissionItem label={item.label} name={item.key}>
        <Switch
          onValueChange={add => toggle(item.key, add)}
          value={todos.includes(item.key)}
          trackColor={{
            true: palette.primary.light,
            false: palette.gray[30],
          }}
        />
      </MissionItem>
    )
  }

  render() {
    const { footer } = this.props
    const sections = [
      ...Object.values(missions).map(m => ({ title: m.label, data: m.items })),
      ...Object.values(weeklyMissions).map(m => ({ title: m.label, data: m.items })),
    ]
    return (
      <DividedSectionList
        sections={sections}
        keyExtractor={this._keyExtractor}
        renderSectionHeader={this._renderSectionHeader}
        renderItem={this._renderItem}
        ListFooterComponent={footer}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    )
  }
}

export default EditableMissionList
