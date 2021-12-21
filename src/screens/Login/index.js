import React from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native'
import { CustomButton } from '@/components'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style'

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#99A799'} />
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name={'person-circle'} size={200} />
        </View>
        <View style={styles.infoContainer}>
          <CustomButton
            title={'로그인'}
            width={300}
            height={50}
            onPress={() => navigation.navigate('Web')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login
