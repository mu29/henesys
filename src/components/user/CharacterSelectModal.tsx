/* tslint:disable */
import React from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import {
  Modal,
  Text,
  Button,
  Divider,
} from 'src/components'
import { palette, typography } from 'src/styles'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 16,
    borderRadius: 4,
    backgroundColor: palette.white.default,
  },
})

export interface CharacterSelectModalProps {
  characters: string[],
  isVisible: boolean,
}

const CharacterSelectModal: React.SFC<CharacterSelectModalProps> = ({
  characters,
  ...props
}) => (
  <Modal {...props}>
    <View style={styles.container}>
      <Text style={typography.heading[2].black.bold}>
        캐릭터 선택
      </Text>
      <View style={{ flexDirection: 'row', padding: 16 }}>
        <Image
          source={{ uri: 'https://avatar.maplestory.nexon.com/Character/MFEBDDMBFFJDDGOHBNHCOHCHPJENEOIMBCFGMLEFAKLBAIPFHDFDAMLGJPPEGHDFPOHJHGEKIINFKPIKIBCGBEFDLCHFOOHHPFJGDNEEJJJOCHOKNMAPMDHEJLPADDEEBLNIBEGJPKAADGHPJPLKIOIJDKCHOCBBEGMPDPKHCMPIPGHFNLMDJMFLHMKACGKNGENBLELDKEAMOMGFAHFIKHDCIFJGOBAGFCBIFCEEADBDKPPFKAMCMLBNFNGFDIAD.png' }}
          style={{
            width: 48,
            height: 48,
          }}
        />
        <View style={{ marginLeft: 8, justifyContent: 'center' }}>
          <Text style={typography.heading[3].black.bold}>
            적류
          </Text>
          <Text style={typography.body[3].gray}>
            Lv. 226 메르세데스
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', padding: 16 }}>
        <Image
          source={{ uri: 'https://avatar.maplestory.nexon.com/Character/IKGJOMPMLEOPKLPJEJMFGGDGBAEGPFFNHAMFPMCHIEOFAKCJPDKKHOJDHMPIGIFDDFLDAPJOHCOKAKLMOJNIKFKHAMLKGDMKCECFDDGGGPPKAOCMIGJCEHOEOLEEJHNCCGCCLLDOBMANEHLDNMEFBADGMPCOLCNHMNBPPECALNCMAEBIEHAPODIBBOHBNPIKDHOBNMLOCKMMHBJAMMIOICKAIBAMBMGCGODGJGNMLMLICOKBLMNOHKLJMMJLLMFF.png' }}
          style={{
            width: 48,
            height: 48,
          }}
        />
        <View style={{ marginLeft: 8, justifyContent: 'center' }}>
          <Text style={typography.heading[3].black.bold}>
            별빛뒤로
          </Text>
          <Text style={typography.body[3].gray}>
            Lv. 222 팬텀
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', padding: 16, borderRadius: 4, borderColor: palette.primary.default, borderWidth: 2 }}>
        <Image
          source={{ uri: 'https://avatar.maplestory.nexon.com/Character/AICICNMPGFOBPNJBHJJOAMLGPKFHKEHELMENCGMHACIEPLBLLHLLLMFBEBFABOEENMGHEJGMKHPFPGBHPGJNEGGNMMBJAGPLBOHPKJOJOCJKEELFAMAGMGHGGBJOLODNKNCNKFFDNBDIIHACLNEJJDCLCGKACBAHGFKPLCPMBDCCMFDFCFAGDBDJAEOPEACHMCIFENGOOLABNJKFILEACCELKLKMPCAFBHKLMDAMEPPGCFGKDHKFNPEIBNJJMFMC.png' }}
          style={{
            width: 48,
            height: 48,
          }}
        />
        <View style={{ marginLeft: 8, justifyContent: 'center' }}>
          <Text style={typography.heading[3].black.bold}>
            백동요
          </Text>
          <Text style={typography.body[3].gray}>
            Lv. 200 듀얼블레이더
          </Text>
        </View>
      </View>
    </View>
  </Modal>
)

export default CharacterSelectModal
