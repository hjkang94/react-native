import React, { useState, useEffect, useContext } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccounts } from '@/stores/actions/account'
import { SearchBar, FixedButton } from '@/components'
import { dateFormat } from '@/utils/date'
import { ThemeContext } from 'styled-components'
import { FlatList, ListItem, Text, SubText, Switch } from './style'

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
      value: item.active ? 'true' : 'false'
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
  const themeContext = useContext(ThemeContext)
  const [inputText, setInputText] = useState('')
  const [active, setActive] = useState(true)

  const toggleSwitch = () => setActive(prev => !prev)

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [dispatch])

  const accounts = useSelector(state => state.accountReducer.accounts)
  let filtered = accounts.sort((a, b) => b.id.localeCompare(a.id))

  if (inputText) {
    filtered = accounts.filter(
      item =>
        item.id.toLowerCase().includes(inputText.toLowerCase()) ||
        item.name.toLowerCase().includes(inputText.toLowerCase())
    )
  }

  filtered = filtered.filter(account => account.active === active)

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
      <FixedButton onPress={() => navigation.navigate('AccountAdd')} />
      <Switch
        trackColor={{ false: '#767577', true: themeContext.colors.primary }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={active}
        marginSize={themeContext.margins.lg}
      />
      <List />
    </>
  )
}

export default Account
