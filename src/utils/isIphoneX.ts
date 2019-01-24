import { Dimensions, Platform, ScaledSize } from 'react-native'

const isIPhoneXSize = (dimension: ScaledSize) => dimension.height === 812 || dimension.width === 812

const isIPhoneXrSize = (dimension: ScaledSize) => dimension.height === 896 || dimension.width === 896

export const isIphoneX = () => {
  const dimension = Dimensions.get('window')
  return Platform.OS === 'ios' && (isIPhoneXSize(dimension) || isIPhoneXrSize(dimension))
}
