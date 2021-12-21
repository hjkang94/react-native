import React, { useEffect } from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native'
import { CustomButton, IconButton } from '@/components'
import styles from './style'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import { info, logout } from '@/api/session'

const Home = ({ navigation, account }) => {
  useEffect(() => {
    async function fetchData() {
      const userInfo = await info({ reload: false })
      AsyncStorage.setItem('user', JSON.stringify(userInfo))
    }
    fetchData()
  })

  const logoutBtn = async () => {
    logout()
    AsyncStorage.removeItem('user')
    navigation.navigate('Splash')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#99A799'} />
      <View style={styles.outerWrapper}>
        <View>
          <CustomButton title={'로그아웃'} onPress={() => logoutBtn()} />
        </View>
        <View>
          <IconButton
            title={'계정'}
            icon={'md-person-circle'}
            onPress={() => navigation.navigate('Account')}
          />
        </View>
        <View>
          <IconButton
            title={'계정요약'}
            icon={'information-circle-sharp'}
            onPress={() => navigation.navigate('Summary')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default connect(null, null)(Home)
