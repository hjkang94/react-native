import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { fetchUserInfo } from '@/stores/actions/userInfo'
import { Container, ActivityIndicator, Title } from './style'

const Splash = ({ navigation }) => {
  const [animating, setAnimating] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false)
      AsyncStorage.getItem('user').then(res => {
        const value = JSON.parse(res)
        if (!value || (value && value.errorCode)) {
          navigation.replace('Auth')
        } else {
          dispatch(fetchUserInfo(value))
          navigation.replace('HomeBase')
        }
      })
    }, 2000)
  }, [dispatch, navigation])

  return (
    <Container>
      <Title>HJKANG TEST APP</Title>
      <ActivityIndicator animating={animating} color="white" size="large" />
    </Container>
  )
}

export default Splash
