import React from 'react'
import { View } from 'react-native'
import { CustomButton } from '@/components'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style'

const Login = ({ navigation }) => {
  return (
    <>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name={'person-circle'} size={200} />
      </View>
      <View style={styles.infoContainer}>
        <CustomButton
          title={'로그인'}
          width={'300px'}
          height={'50px'}
          onPress={() => navigation.navigate('Web')}
        />
      </View>
    </>
  )
}

export default Login
