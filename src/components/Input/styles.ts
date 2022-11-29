import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: -35,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 5,
    color:'#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    borderColor: '#0D0D0D',
    borderWidth: 1
  },
  button: {
    height: 54,
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
  }
})