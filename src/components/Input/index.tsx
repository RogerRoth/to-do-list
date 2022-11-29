import { TextInput, View, TouchableOpacity, TextInputProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

import { styles } from './styles';

export interface InputProps extends TextInputProps {
  onAdd: () => void;
}

export function Input({onAdd, ...rest}: InputProps){
  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor='#808080'
        {...rest}
      />
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  )
}