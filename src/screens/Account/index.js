import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, StatusBar, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccounts } from '@/stores/actions/account'
import styles from './style'

const Account = ({ navigation }) => {
  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accountReducer.accounts)

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [dispatch])

  function ListAccount() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={accounts}
          keyExtractor={item => item.id}
          windowSize={3}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View style={styles.metaInfo}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.subText}>{item.id}</Text>
              </View>
            </View>
          )}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#99A799'} />
      <View style={styles.outerWrapper}>
        <ListAccount />
      </View>
    </SafeAreaView>
  )
}

export default Account
