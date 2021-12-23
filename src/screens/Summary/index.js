import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { CustomModal } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSummarys } from '@/stores/actions/summary'
import styles from './style'

const modalData = item => {
  return [
    {
      name: 'Project ID',
      value: item.project_id
    },
    {
      name: 'Project Name',
      value: item.project_name
    },
    {
      name: 'Cost',
      value: item.cost
    },
    {
      name: 'Cost Type',
      value: item.cost_type
    },
    {
      name: 'Country',
      value: `${item.country}(${item.country_name})`
    }
  ]
}

const Summary = ({ navigation }) => {
  const dispatch = useDispatch()
  const summarys = useSelector(state => state.summaryReducer.summarys)
  const [visible, setVisible] = useState(false)
  const [detail, setDetail] = useState({})

  useEffect(() => {
    dispatch(fetchSummarys())
  }, [dispatch])

  const handleClick = item => {
    setVisible(true)
    setDetail(item)
  }

  const List = () => {
    return (
      <FlatList
        style={styles.list}
        data={summarys}
        keyExtractor={(item, i) => i}
        windowSize={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleClick(item)}>
            <View style={styles.metaInfo}>
              <Text style={styles.text}>{item.project_name}</Text>
              <Text style={styles.subText}>{item.account_id}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }

  const contents = []
  for (const item of modalData(detail)) {
    contents.push(
      <View style={styles.detailContainer} key={item.name}>
        <Text style={styles.detailTitle}>{item.name}</Text>
        <Text style={styles.detailText}>{item.value}</Text>
      </View>
    )
  }

  return (
    <>
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        body={<>{contents}</>}
      />
      <View style={styles.outerWrapper}>
        <List />
      </View>
    </>
  )
}

export default Summary
