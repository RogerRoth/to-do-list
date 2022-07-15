import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export type EditTaskArgs ={
  taskId: number;
  taskNewTitle: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const findTask = tasks.find( task => task.title === newTaskTitle)

    if(findTask){
      return Alert.alert('Você não pode cadastrar uma task com o mesmo nome');
    }
  
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks(oldTasks => [...oldTasks, task]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map( task => {
      if(task.id === id) {
        const updatedTask = {
          ...task,
          done: !task.done
        }
        return updatedTask
      }
      return task
    })

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    Alert.alert(
      'Remover item', 
      'Tem certeza que você deseja remover esse item?',
      [
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => {
            const updatedTasks = tasks.filter(task => task.id !== id)

            setTasks(updatedTasks)
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]);
  }

  function handleEditTask({taskId, taskNewTitle}: EditTaskArgs ){
    const updatedTasks = tasks.map( task => {
      if(task.id === taskId) {
        const updatedTask = {
          ...task,
          title: taskNewTitle
        }
        return updatedTask
      }
      return task
    })

    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        editTask={handleEditTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})