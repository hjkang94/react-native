import { StyleSheet } from 'react-native'
import { Color } from '@/assets/css'

export default StyleSheet.create({
  list: { margin: 10 },
  listItem: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.lightGray
  },
  text: { fontSize: 15 },
  subText: { marginTop: 5, fontSize: 12, color: Color.subText },

  detailContainer: {
    flexDirection: 'row',
    height: 40,
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.lightGray
  },
  detailTitle: {
    width: '30%',
    color: Color.subText
  },
  detailText: {
    width: '50%',
    marginLeft: 20
  }
})
