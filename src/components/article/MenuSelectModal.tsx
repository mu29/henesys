import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import Modal from 'react-native-modal'
import {
  Text,
  Button,
} from 'src/components'
import menus from 'src/constants/menus'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: palette.white.default,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: palette.gray[20],
    borderBottomWidth: 1,
    borderBottomColor: palette.gray[20],
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menu: {
    margin: 4,
    padding: 8,
    borderRadius: 4,
    backgroundColor: palette.gray[20],
  },
})

export interface MenuSelectModalProps {
  isVisible: boolean,
  close: () => void,
}

class MenuSelectModal extends React.PureComponent<MenuSelectModalProps> {
  _renderMenu = (menu: { label: string }) => (
    <Button>
      <View style={styles.menu}>
        <Text>
          {menu.label}
        </Text>
      </View>
    </Button>
  )

  render() {
    const {
      isVisible,
      close,
    } = this.props

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={close}
        onBackButtonPress={close}
        style={styles.modal}
        backdropColor="transparent"
        backdropOpacity={1}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        useNativeDriver
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={typography.heading[2].black.bold}>
              게시판 선택
            </Text>
            <Text style={typography.body[3].lightGray}>
              열람할 게시판을 선택하세요.
            </Text>
          </View>
          <View style={styles.content}>
            {menus.map(this._renderMenu)}
          </View>
        </View>
      </Modal>
    )
  }
}

export default MenuSelectModal
