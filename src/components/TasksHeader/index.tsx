import { View } from "react-native";
import { TaskCounter } from "../TaskCounter";
import { styles } from "./styles";

type Props = {
  countCompleted: number;
  countCreated: number;
}


export function TasksHeader({countCompleted=0, countCreated=0}: Props){
  return(
    <View style={styles.container}>
      <TaskCounter title="Criadas" counter={countCreated}/>
      <TaskCounter title="Concluídas" counter={countCompleted}/>
    </View>
  )
}