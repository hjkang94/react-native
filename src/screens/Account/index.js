import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccounts } from '@/stores/actions/account'
import { SearchBar } from '@/components'
import { dateFormat } from '@/utils/date'
import { FlatList, ListItem, Text, SubText } from './style'

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
      name: 'Desc',
      value: item.description
    },
    {
      name: 'Active',
      value: item.active
    },
    {
      name: 'Created At',
      value: dateFormat(item.created_at)
    },
    {
      name: 'Updated At',
      value: dateFormat(item.updated_at)
    }
  ]
}

const Account = ({ navigation }) => {
  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accountReducer.accounts)
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [dispatch])

  let filtered = accounts
  if (inputText) {
    filtered = accounts.filter(
      item =>
        item.id.toLowerCase().includes(inputText.toLowerCase()) ||
        item.name.toLowerCase().includes(inputText.toLowerCase())
    )
  }

  const List = () => {
    return (
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        windowSize={3}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => navigation.navigate('AccountDetail', header(item))}>
            <View>
              <Text>{item.name}</Text>
              <SubText>{item.id}</SubText>
            </View>
          </ListItem>
        )}
      />
    )
  }

  return (
    <>
      <SearchBar inputText={inputText} setInputText={setInputText} />
      <List />
    </>
  )
}

export default Account
