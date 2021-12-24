import React from 'react'
import { Container, TextInput } from './style'

const SearchBar = props => {
  const { inputText, setInputText } = props
  return (
    <Container>
      <TextInput
        placeholder="Search"
        value={inputText}
        onChangeText={setInputText}
      />
    </Container>
  )
}

export default SearchBar
