import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { Alert } from 'react-native'
import { IconButton } from '@/components'
import { info } from '@/api/session'
import { fetchUserInfo } from '@/stores/actions/userInfo'
import { Container, Wrapper } from './style'

const Home = ({ navigation, account }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const userInfo = await info({ reload: false })
      if (!userInfo || (userInfo && userInfo.errorCode)) {
        navigation.replace('Auth')
      } else {
        AsyncStorage.setItem('user', JSON.stringify(userInfo))
        dispatch(fetchUserInfo(userInfo))
      }
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
        <IconButton
          title={'프로젝트'}
          icon={'information-circle-sharp'}
          onPress={() => navigation.navigate('Project')}
        />
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
