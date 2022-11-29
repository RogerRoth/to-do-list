import { Text, TouchableOpacity, View } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";

type Props ={
  title: string;
  isCompleted: boolean;
  onComplete: () => void;
  onRemove: () => void;
}

export function TasksItem({title, isCompleted=false, onComplete, onRemove}: Props){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onComplete}>
        { isCompleted ? 
          <AntDesign name="checkcircle" size={18} color="#4EA8DE"/>
          :
          <Entypo name="circle" size={18} color="#4EA8DE"/>
        }
      </TouchableOpacity>

      { isCompleted ? 
        <Text style={styles.titleComplete}>
          {title}
        </Text>
        :
        <Text style={styles.title}>
          {title}
        </Text>
      }

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <EvilIcons name="trash" size={25} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}