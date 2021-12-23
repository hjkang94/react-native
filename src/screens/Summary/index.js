import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { CustomModal } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSummarys } from '@/stores/actions/summary'
import {
  FlatList,
  ListItem,
  Text,
  SubText,
  DetailContainer,
  DetailText,
  DetailSubText
} from './style'

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
        data={summarys}
        keyExtractor={(item, i) => i}
        windowSize={3}
        renderItem={({ item }) => (
          <ListItem onPress={() => handleClick(item)}>
            <View>
              <Text>{item.project_name}</Text>
              <SubText>{item.account_id}</SubText>
            </View>
          </ListItem>
        )}
      />
    )
  }

  const contents = []
  for (const item of modalData(detail)) {
    contents.push(
      <DetailContainer key={item.name}>
        <DetailText>{item.name}</DetailText>
        <DetailSubText>{item.value}</DetailSubText>
      </DetailContainer>
    )
  }

  return (
    <>
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        body={<>{contents}</>}
      />
      <List />
    </>
  )
}

export default Summary
