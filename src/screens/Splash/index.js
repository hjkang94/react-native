import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Container, ActivityIndicator, Title } from './style'

const Splash = ({ navigation }) => {
  const [animating, setAnimating] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false)
      AsyncStorage.getItem('user').then(res => {
        const value = JSON.parse(res)
        if (!value || (value && value.errorCode)) {
          navigation.replace('Auth')
        } else {
          navigation.replace('HomeBase')
        }
      })
    }, 1000)
  }, [navigation])

  return (
    <Container>
      <Title>HJKANG TEST APP</Title>
      <ActivityIndicator animating={animating} color="white" size="large" />
    </Container>
  )
}

export default Splash
