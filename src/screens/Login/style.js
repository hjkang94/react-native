import { StyleSheet } from 'react-native'
import { Color } from '@/assets/css'

export default StyleSheet.create({
  logo: {
    width: 128,
    height: 56
  },
  title: {},
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: '40%'
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: '40%'
  },
  icon: {
    color: Color.primary,
    marginLeft: 10
  }
})
