import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { CustomModal, SearchBar } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSummarys } from '@/stores/actions/summary'
import {
  FlatList,
  ListItem,
  Container,
  Text,
  SubText,
  DetailContainer,
  DetailText,
  DetailSubText
} from './style'

const header = item => {
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
      value: `${item.currency === 'KRW' ? '₩' : '$'} ${item.cost}`
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
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    dispatch(fetchSummarys())
  }, [dispatch])

  const handleClick = item => {
    setVisible(true)
    setDetail(item)
  }

  let filtered = summarys
  if (inputText) {
    filtered = summarys.filter(
      item =>
        item.project_name.toLowerCase().includes(inputText.toLowerCase()) ||
        item.account_id.toLowerCase().includes(inputText.toLowerCase())
    )
  }

  const List = () => {
    return (
      <FlatList
        data={filtered}
        keyExtractor={(item, i) => i}
        windowSize={3}
        renderItem={({ item }) => (
          <ListItem onPress={() => handleClick(item)}>
            <View>
              <Container>
                <Text>Project</Text>
                <SubText>
                  {item.project_name} ({item.project_id})
                </SubText>
              </Container>
              <Container>
                <Text>Cost</Text>
                <SubText>
                  {item.currency === 'KRW' ? '₩' : '$'} {item.cost}
                </SubText>
              </Container>
              <Container>
                <Text>Country</Text>
                <SubText>{item.country_name}</SubText>
              </Container>
            </View>
          </ListItem>
        )}
      />
    )
  }

  const contents = header(detail).map(item => (
    <DetailContainer key={item.name}>
      <DetailText>{item.name}</DetailText>
      <DetailSubText>{item.value}</DetailSubText>
    </DetailContainer>
  ))

  return (
    <>
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        body={<>{contents}</>}
      />
      <SearchBar inputText={inputText} setInputText={setInputText} />
      <List />
    </>
  )
}

export default Summary
