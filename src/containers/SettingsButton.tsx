import React from 'react'
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Action, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IconButton } from 'src/components'
import { showModalAction } from 'src/store/actions'

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
})

export interface SettingsButtonContainerProps {
  style?: StyleProp<ViewStyle>
  onPress: () => void,
}

const SettingsButtonContainer: React.FunctionComponent<SettingsButtonContainerProps> = props => (
  <IconButton icon="md-more" size={22} style={styles.container} { ...props } />
)

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onPress: () => dispatch(showModalAction({ modal: 'CharacterSelect' })),
})

export default connect(null, mapDispatchToProps)(SettingsButtonContainer)
