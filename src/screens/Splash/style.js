import { StyleSheet } from 'react-native'
import { Color } from '@/assets/css'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.secondary
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})
