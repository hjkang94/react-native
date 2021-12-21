import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './style'

const Splash = ({ navigation }) => {
  const [animating, setAnimating] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false)
      AsyncStorage.getItem('user').then(value =>
        navigation.replace(value === null ? 'Auth' : 'HomeBase')
      )
    }, 1000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HJKANG SPLASH TEST</Text>
      <ActivityIndicator
        animating={animating}
        color="#1687A7"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  )
}

export default Splash
