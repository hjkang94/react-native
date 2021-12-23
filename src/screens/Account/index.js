import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccounts } from '@/stores/actions/account'
import { FlatList, ListItem, Text, SubText } from './style'

const Account = ({ navigation }) => {
  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accountReducer.accounts)

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [dispatch])

  const List = () => {
    return (
      <FlatList
        data={accounts}
        keyExtractor={item => item.id}
        windowSize={3}
        renderItem={({ item }) => (
          <ListItem onPress={() => navigation.navigate('AccountDetail', item)}>
            <View>
              <Text>{item.name}</Text>
              <SubText>{item.id}</SubText>
            </View>
          </ListItem>
        )}
      />
    )
  }

  return <List />
}

export default Account
