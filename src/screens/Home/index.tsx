import { useState } from 'react';
import { View, FlatList, Alert } from "react-native";

import { Menu } from "../../components/Menu";
import { TasksHeader } from "../../components/TasksHeader";
import { TasksItem } from "../../components/TaskItem";

import { styles } from './styles';
import { EmptyComponent } from '../../components/EmptyComponent';

interface TaskItemProps {
  id: string;
  isCompleted: boolean;
  title: string;
}

export function Home(){
  const [tasks, setTasks] = useState<TaskItemProps[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskCount, setTaskCount] = useState<number>(0);
  const [taskCompleted, setTaskCompleted] = useState<number>(0);

  function handleAddTask(){
    if(!taskTitle.trim()){
      return Alert.alert("Valor inválido", "Preencha um valor válido.");
    }
    
    const id = Math.random().toString().split('.')[1];

    const newTask = {
      id,
      title: taskTitle.trim(),
      isCompleted: false
    } as TaskItemProps;

    setTaskCount(taskCount+ 1)

    setTasks(prevState => [...prevState, newTask]);
    setTaskTitle('');
  }

  function handleCompleteTask(taskId: string){
    const newTaskList = tasks.filter(task => {
      if (task.id === taskId){
        if(task.isCompleted === true){
          setTaskCompleted(taskCompleted - 1)
        } else {
          setTaskCompleted(taskCompleted + 1)
        }
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(newTaskList.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)))

  }

  function handleRemoveTask(taskId: string){
    Alert.alert("Remover todo!", "Deseja remover o to-do?", [
      {
        text: 'Sim',
        onPress: () => {
          const taskToDelete: TaskItemProps[] = tasks.filter(task => task.id === taskId) 
          if(taskToDelete[0].isCompleted){
            setTaskCompleted(taskCompleted - 1)
          }

          setTasks(prevState => prevState.filter(task => task.id !== taskId))
          setTaskCount(taskCount - 1)
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return(
    <View style={styles.container}>
      <Menu 
        onAdd={handleAddTask} 
        value={taskTitle} 
        onChangeText={setTaskTitle}
        onSubmitEditing={handleAddTask}
      />

      <TasksHeader countCompleted={taskCompleted} countCreated={taskCount} />

      <FlatList 
        style={styles.taskList}
        data={tasks}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 48 }}
        renderItem={({ item }) => (
          <TasksItem 
            title={item.title}
            isCompleted={item.isCompleted}
            onComplete={()=>{handleCompleteTask(item.id)}}
            onRemove={()=>{handleRemoveTask(item.id)}}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyComponent />
        )}
      />
    </View>
  )
}