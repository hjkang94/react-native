import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Color } from '@/assets/css'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainNavigation />
      </SafeAreaView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.babyPink,
    flexDirection: 'column'
  }
})
