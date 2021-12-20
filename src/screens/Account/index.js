import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, StatusBar, FlatList } from 'react-native'
import styles from './style'
import { connect, useDispatch } from 'react-redux'
import { fetchDataAccount } from '../../stores/actions/account'

const Home = ({ navigation, account }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataAccount())
  }, [dispatch])

  function ListAccount() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={account}
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

const mapStateToProps = state => {
  return {
    account: state.accountReducer.accounts
  }
}

export default connect(mapStateToProps, null)(Home)
