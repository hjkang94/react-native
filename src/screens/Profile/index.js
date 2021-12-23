import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { CustomButton } from '@/components'
import { logout } from '@/api/session'
import { Container } from './style'

const Profile = ({ navigation }) => {
  const handleLogout = () => {
    logout()
    AsyncStorage.removeItem('user')
    navigation.navigate('Auth')
  }

  return (
    <Container>
      <CustomButton title={'로그아웃'} onPress={() => handleLogout()} />
    </Container>
  )
}

export default Profile
