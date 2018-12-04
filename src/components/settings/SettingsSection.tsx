import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Text } from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-end',
    height: 48,
    paddingBottom: 6,
    paddingLeft: 16,
    backgroundColor: palette.gray[10],
    borderTopWidth: 1,
    borderTopColor: palette.gray[30],
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[30],
  },
})

export interface SettingsSectionProps {
  title: string,
}

const SettingsSection: React.FunctionComponent<SettingsSectionProps> = ({
  title,
  children,
}) => (
  <View>
    <View style={styles.header}>
      <Text style={typography.body[3].lightGray}>
        {title}
      </Text>
    </View>
    {children}
  </View>
)

export default SettingsSection
