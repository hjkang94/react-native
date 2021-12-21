import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, StatusBar, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSummarys } from '@/stores/actions/summary'
import styles from './style'

const Summary = ({ navigation }) => {
  const dispatch = useDispatch()
  const summarys = useSelector(state => state.summaryReducer.summarys)

  useEffect(() => {
    dispatch(fetchSummarys())
  }, [dispatch])

  function ListSummary() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={summarys}
          keyExtractor={(item, i) => i}
          windowSize={3}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View style={styles.metaInfo}>
                <Text style={styles.text}>{item.project_name}</Text>
                <Text style={styles.subText}>{item.account_id}</Text>
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
        <ListSummary />
      </View>
    </SafeAreaView>
  )
}

export default Summary
