import React, { useState, useEffect } from 'react'
import { login } from '@/api/session'
import { WebView } from 'react-native-webview'

const Web = ({ navigation }) => {
  const [url, setUrl] = useState()

  useEffect(() => {
    async function fetchData() {
      const result = await login()
      setUrl(result)
    }
    fetchData()
  }, [navigation])

  if (!url) {
    return <></>
  }

  return (
    <WebView
      source={{ uri: url }}
      sharedCookiesEnabled={true}
      userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
    />
  )
}

export default Web
