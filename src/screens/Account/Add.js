import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { createAccount } from '@/stores/actions/account'
import { CustomButton } from '@/components'
import { ThemeContext } from 'styled-components'
import {
  DetailContainer,
  AddContent,
  AddText,
  TextInput,
  ButtonContainer,
  Switch
} from './style'

const Add = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const themeContext = useContext(ThemeContext)
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [active, setActive] = useState(true)

  const toggleSwitch = () => setActive(prev => !prev)

  const handleSubmit = () => {
    const account = {
      id,
      name,
      description,
      active,
      secret_key: {},
      reseller_seq: 0
    }
    dispatch(createAccount(account))
    navigation.goBack()
  }

  return (
    <>
      <DetailContainer>
        <Switch
          trackColor={{ false: '#767577', true: themeContext.colors.primary }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={active}
          marginSize={themeContext.margins.xl}
        />
        <AddContent>
          <AddText>ID</AddText>
          <TextInput value={id} onChangeText={setId} />
        </AddContent>
        <AddContent>
          <AddText>Name</AddText>
          <TextInput value={name} onChangeText={setName} />
        </AddContent>
        <AddContent>
          <AddText>Description</AddText>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={{ height: 100, textAlignVertical: 'top' }}
            value={description}
            onChangeText={setDescription}
          />
        </AddContent>
        <ButtonContainer>
          <CustomButton
            buttonColor={themeContext.colors.secondary}
            title={'추가'}
            onPress={() => handleSubmit()}
          />
          <CustomButton
            buttonColor={themeContext.colors.danger}
            title={'취소'}
            onPress={() => navigation.goBack()}
          />
        </ButtonContainer>
      </DetailContainer>
    </>
  )
}

export default Add
