import { Text, View } from 'react-native'
import ImgClipboar from '../../assets/clipboard.svg'

import { styles } from './styles';

export function EmptyComponent(){
  return(
    <View style={styles.container}>
      <View style={styles.line} />

      <ImgClipboar />
      
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}