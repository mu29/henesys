import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Text,
  Icon,
} from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
    backgroundColor: palette.white.default,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: palette.gray[10],
  },
})

export interface AccountInfoProps {
  name?: string,
  email?: string,
}

const AccountInfo: React.FunctionComponent<AccountInfoProps> = ({
  name = '로그인',
  email = '계정을 만들어 커뮤니티를 100% 이용하세요 (개발 중)',
}) => (
  <View style={styles.container}>
    <View style={styles.info}>
      <View>
        <Text style={typography.heading[3].black.bold}>
          {name}
        </Text>
        <Text style={typography.body[3].lightGray}>
          {email}
        </Text>
      </View>
      <Icon name="ios-arrow-forward" size={20} color={palette.gray[40]} />
    </View>
  </View>
)

export default AccountInfo
