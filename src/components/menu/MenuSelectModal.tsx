import React from 'react'
import {
  View,
  Switch,
  StyleSheet,
  LayoutAnimation,
  UIManager,
} from 'react-native'
import Modal from 'react-native-modal'
import {
  Text,
  MenuItem,
  MenuSection,
} from 'src/components'
import { Menu } from 'src/store/selectors'
import groups from 'src/constants/menus'
import { palette, typography } from 'src/styles'
import { isIphoneX } from 'src/utils'

const TRACK_COLOR = {
  true: palette.primary.light,
  false: palette.gray[30],
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    borderTopWidth: 1,
    borderTopColor: palette.gray[50],
    backgroundColor: palette.white.default,
    paddingBottom: isIphoneX() ? 32 : 0,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  wrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menus: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  menu: {
    margin: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: palette.gray[20],
  },
  selected: {
    backgroundColor: palette.primary.light,
  },
})

export interface MenuSelectModalProps {
  isVisible: boolean,
  group: string,
  menu: Menu,
  bestOnly: boolean,
  switchGroup: (group: string) => void,
  switchMenu: (menu: Menu) => void,
  toggleBestOnly: () => void,
  close: () => void,
}

class MenuSelectModal extends React.PureComponent<MenuSelectModalProps> {
  _pressHandlers: { [key: string]: () => any } = {}

  constructor(props: MenuSelectModalProps) {
    super(props)
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  _getPressHandler(key: string | Menu): () => any {
    const {
      switchGroup,
      switchMenu,
      close,
    } = this.props
    const handlerKey = typeof key === 'string' ? key : `${key.board}-${key.label}`

    if (!Object.prototype.hasOwnProperty.call(this._pressHandlers, handlerKey)) {
      if (typeof key === 'string') {
        this._pressHandlers[handlerKey] = () => {
          LayoutAnimation.configureNext({
            duration: 200,
            update: { type: 'linear' },
          })
          switchGroup(key)
        }
      } else {
        this._pressHandlers[handlerKey] = () => {
          switchMenu(key)
          close()
        }
      }
    }

    return this._pressHandlers[handlerKey]
  }

  _renderGroup = (group: string) => (
    <MenuItem
      key={group}
      label={group}
      selected={group === this.props.group}
      onPress={this._getPressHandler(group)}
    />
  )

  _renderMenu = (menu: Menu) => (
    <MenuItem
      key={`${menu.board}-${menu.label}`}
      label={menu.label}
      selected={menu.board === this.props.menu.board && menu.category === this.props.menu.category}
      onPress={this._getPressHandler(menu)}
    />
  )

  render() {
    const {
      isVisible,
      group,
      bestOnly,
      toggleBestOnly,
      close,
    } = this.props

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={close}
        onBackButtonPress={close}
        style={styles.modal}
        backdropOpacity={0.5}
        useNativeDriver
        hideModalContentWhileAnimating
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={typography.heading[2].black.bold}>
              게시판 선택
            </Text>
            <Text style={typography.body[3].lightGray}>
              열람할 게시판과 카테고리를 선택하세요.
            </Text>
          </View>
          <View>
            <MenuSection title="필터" />
            <View style={styles.filter}>
              <Text style={typography.body[2].black}>
                인기 게시글만 보기
              </Text>
              <Switch
                onValueChange={toggleBestOnly}
                value={bestOnly}
                trackColor={TRACK_COLOR}
              />
            </View>
            <MenuSection title="게시판" />
            <View style={styles.wrapper}>
              <View style={styles.menus}>
                {Object.keys(groups).slice(0, 3).map(this._renderGroup)}
              </View>
              <View style={styles.menus}>
                {Object.keys(groups).slice(3).map(this._renderGroup)}
              </View>
            </View>
            <MenuSection title="카테고리" />
            <View style={[styles.wrapper, styles.menus]}>
              {groups[group].map(this._renderMenu)}
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

export default MenuSelectModal
