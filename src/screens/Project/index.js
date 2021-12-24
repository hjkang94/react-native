import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { CustomModal, SearchBar } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '@/stores/actions/project'
import {
  FlatList,
  ListItem,
  Text,
  SubText,
  DetailContainer,
  DetailText,
  DetailSubText
} from './style'

const header = item => {
  return [
    {
      name: 'ID',
      value: item.id
    },
    {
      name: 'Name',
      value: item.name
    },
    {
      name: 'Account ID',
      value: item.account_id
    },
    {
      name: 'Number',
      value: item.number
    },
    {
      name: 'Created At',
      value: item.created_at
    },
    {
      name: 'Updated At',
      value: item.updated_at
    }
  ]
}

const Project = ({ navigation }) => {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projectReducer.projects)
  const [visible, setVisible] = useState(false)
  const [detail, setDetail] = useState({})
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  const handleClick = item => {
    setVisible(true)
    setDetail(item)
  }

  let filtered = projects
  if (inputText) {
    filtered = projects.filter(
      item =>
        item.id.toLowerCase().includes(inputText.toLowerCase()) ||
        item.name.toLowerCase().includes(inputText.toLowerCase()) ||
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
              <Text>
                {item.name}({item.id})
              </Text>
              <SubText>{item.account_id}</SubText>
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

export default Project
