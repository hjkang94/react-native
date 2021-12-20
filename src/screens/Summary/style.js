import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    backgroundColor: '#F6F5F5'
  },
  list: { marginTop: 5 },
  listItem: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDDDDD'
  },
  title: {
    fontSize: 16,
    color: '#1687A7',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: { fontSize: 15 },
  subText: { marginTop: 5, fontSize: 12, color: '#848484' }
})
