import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
import { IconButton } from '@/components'
import { info } from '@/api/session'
import { Container, Wrapper } from './style'

const Home = ({ navigation, account }) => {
  useEffect(() => {
    async function fetchData() {
      const userInfo = await info({ reload: false })
      AsyncStorage.setItem('user', JSON.stringify(userInfo))
    }
    fetchData()
  })

  return (
    <Container>
      <Wrapper>
        <IconButton
          title={'계정'}
          icon={'md-person-circle'}
          onPress={() => navigation.navigate('Account')}
        />
        <IconButton
          title={'계정요약'}
          icon={'information-circle-sharp'}
          onPress={() => navigation.navigate('Summary')}
        />
        <IconButton onPress={() => Alert.alert('메뉴를 추가해주세요')} />
      </Wrapper>
      <Wrapper>
        <IconButton onPress={() => Alert.alert('메뉴를 추가해주세요')} />
        <IconButton onPress={() => Alert.alert('메뉴를 추가해주세요')} />
        <IconButton onPress={() => Alert.alert('메뉴를 추가해주세요')} />
      </Wrapper>
      <Wrapper>
        <IconButton onPress={() => Alert.alert('메뉴를 추가해주세요')} />
        <IconButton onPress={() => Alert.alert('메뉴를 추가해주세요')} />
        <IconButton onPress={() => Alert.alert('메뉴를 추가해주세요')} />
      </Wrapper>
    </Container>
  )
}

export default Home
