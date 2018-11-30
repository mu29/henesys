import React from 'react'
import {
  Switch,
  SectionListData,
  StyleSheet,
} from 'react-native'
import {
  DividedSectionList,
  Section,
  MissionItem,
} from 'src/components'
import { missions, Mission as MissionType } from 'src/constants/missions'
import { palette } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export interface EditableMissionListProps {
  todos: string[],
  toggle: (name: string, add: boolean) => void,
}

interface ISectionHeader {
  section: SectionListData<MissionType>,
}

class EditableMissionList extends React.PureComponent<EditableMissionListProps> {
  keyExtractor = (item: MissionType) => item.key

  renderSectionHeader = ({ section: { title } }: ISectionHeader) => (
    <Section title={title} />
  )

  renderItem = ({ item }: { item: MissionType }) => {
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
    const sections = Object.values(missions).map(m => ({ title: m.label, data: m.items }))
    return (
      <DividedSectionList
        sections={sections}
        keyExtractor={this.keyExtractor}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    )
  }
}

export default EditableMissionList