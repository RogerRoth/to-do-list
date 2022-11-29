import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    height: 64,
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 1,
    marginBottom: 8
  },
  title: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14
  },
  titleComplete: {
    flex: 1,
    color: '#808080',
    fontSize: 14,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  button: {
    width: 42,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})