import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { View } from 'react-native'
import { CustomButton } from '@/components'
import { logout } from '@/api/session'
import styles from './style'

const Profile = ({ navigation }) => {
  const handleLogout = () => {
    logout()
    AsyncStorage.removeItem('user')
    navigation.navigate('Auth')
  }

  return (
    <View style={styles.outerWrapper}>
      <CustomButton title={'로그아웃'} onPress={() => handleLogout()} />
    </View>
  )
}

export default Profile
