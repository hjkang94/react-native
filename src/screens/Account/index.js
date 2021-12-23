import React, { useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccounts } from '@/stores/actions/account'
import styles from './style'

const Account = ({ navigation }) => {
  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accountReducer.accounts)

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [dispatch])

  const List = () => {
    return (
      <FlatList
        style={styles.list}
        data={accounts}
        keyExtractor={item => item.id}
        windowSize={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('AccountDetail', item)}>
            <View style={styles.metaInfo}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.subText}>{item.id}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }

  return (
    <>
      <View style={styles.outerWrapper}>
        <List />
      </View>
    </>
  )
}

export default Account
