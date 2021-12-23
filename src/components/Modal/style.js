import styled from 'styled-components'
import { Color } from '@/assets/css'

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const ModalContent = styled.View`
  background-color: white
  padding: 35px;
  align-items: center;
  elevation: 5;
  border-width: 0.5px;
  border-color: ${Color.lightGray};
`
const button = `
  padding: 10px;
  elevation: 2;
  min-width: 70px;
`

export const Button = styled.Pressable`
  ${button}
  margin-top: 20px;
  background-color: ${Color.danger};
`

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`
