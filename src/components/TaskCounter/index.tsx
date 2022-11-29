import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string,
  counter: number,
  color?: 'blue' | 'purple'
}

export function TaskCounter({title, counter, color='blue'}: Props){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View>
        <Text style={styles.counter}>
          {counter}
        </Text>
      </View>
    </View>
  )
}