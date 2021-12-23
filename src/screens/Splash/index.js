import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { ActivityIndicator, View, Text } from 'react-native'
import styles from './style'

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
    <View style={styles.container}>
      <Text style={styles.text}>HJKANG TEST APP</Text>
      <ActivityIndicator
        animating={animating}
        color="white"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  )
}

export default Splash
