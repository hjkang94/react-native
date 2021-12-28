import 'react-native-gesture-handler'
import React, { useState } from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import { darkTheme, lightTheme } from '@/assets/style/theme'
import { Container } from './style'
import { ThemeProvider } from 'styled-components'

const App = () => {
  const [theme, setTheme] = useState(lightTheme)
  const switchTheme = () => {
    const nextTheme = theme === lightTheme ? darkTheme : lightTheme
    setTheme(nextTheme)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <MainNavigation switchTheme={switchTheme} theme={theme} />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
